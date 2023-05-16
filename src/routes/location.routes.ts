import express, { Request, Response } from "express";
import { Location } from "../entities/location.entity";
import { AppDataSource } from "../utils/data-source";

const router = express.Router();
import amqp from "amqplib";

const queueName = "locations";
// GET /locations
router.get("/locations", async (req: Request, res: Response) => {

  const locationRepository = AppDataSource.getRepository(Location);
  const locations = await locationRepository.find();
  res.json(locations);

});

// POST /locations
router.post("/locations", async (req: Request, res: Response) => {

  const locationRepository = AppDataSource.getRepository(Location);
  const { latitude, longitude, userId } = req.body;
  const location = new Location();
  location.latitude = latitude;
  location.longitude = longitude;
  location.userId = userId;
  const result = await locationRepository.save(location);
  const connection = await amqp.connect("amqp://localhost");
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

  res.json(result);

});

// PUT /locations/:id
router.get("/locations/:id", async (req: Request, res: Response) => {

  const locationRepository = AppDataSource.getRepository(Location);
  const id = req.params.id as unknown as number;
  const location = await locationRepository.findOneBy({ userId: id });
  if (!location) {

    return res.status(404).json({ message: "Location not found" });

  }
  res.json(location);

});

export default router;
