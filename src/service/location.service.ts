import amqp from 'amqplib';
import { Location } from '../entities/location.entity';
import { AppDataSource } from '../utils/data-source';

const queueName = 'locations';

export interface ILocationService {
  getLocations(): Promise<Location[]>;
  createLocation(
    latitude: number,
    longitude: number,
    userId: number
  ): Promise<Location>;
  getLocationById(userId: number): Promise<Location>;
}

export class LocationService implements ILocationService {

  private locationRepository = AppDataSource.getRepository(Location);

  async getLocations(): Promise<Location[]> {

    return this.locationRepository.find();

  }

  async createLocation(
    latitude: number,
    longitude: number,
    userId: number,
  ): Promise<Location> {

    const location = new Location();
    location.latitude = latitude;
    location.longitude = longitude;
    location.userId = userId;
    const result = await this.locationRepository.save(location);
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(result)));
    channel.consume(
      queueName,
      (message) => {

        const content = message && message.content.toString();
        console.log(`Received message: ${content}`);

      },
      { noAck: true },
    );
    return result;

  }

  async getLocationById(userId: number): Promise<Location> {

    const location = await this.locationRepository.findOneBy({ userId });
    if (!location) {

      throw new Error('Location not found');

    }
    return location;

  }

}
