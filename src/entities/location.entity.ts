import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Location {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    userId: number;

  @Column('double precision')
    latitude: number;

  @Column('double precision')
    longitude: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    timestamp: Date;

}
