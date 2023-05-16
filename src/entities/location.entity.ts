import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
