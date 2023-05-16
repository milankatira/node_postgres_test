import express, { Request, Response } from 'express';
import { Location } from '../entities/location.entity';
import { AppDataSource } from '../utils/data-source';

const router = express.Router();

// GET /locations
router.get('/locations', async (req: Request, res: Response) => {
  const locationRepository = AppDataSource.getRepository(Location);
  const locations = await locationRepository.find();
  res.json(locations);
});

// POST /locations
router.post('/locations', async (req: Request, res: Response) => {
  const locationRepository = AppDataSource.getRepository(Location);
  const { latitude, longitude } = req.body;
  const location = new Location();
  location.latitude = latitude;
  location.longitude = longitude;
  const result = await locationRepository.save(location);
  res.json(result);
});

// PUT /locations/:id
router.put('/locations/:id', async (req: Request, res: Response) => {
  const locationRepository = AppDataSource.getRepository(Location);
  
  const id = req.params.id as unknown as any;
  const { latitude, longitude } = req.body;
  const location = await locationRepository.findOne(id);
  if (!location) {
    return res.status(404).json({ message: 'Location not found' });
  }
  location.latitude = latitude;
  location.longitude = longitude;
  const result = await locationRepository.save(location);
  res.json(result);
});

// DELETE /locations/:id
router.delete('/locations/:id', async (req: Request, res: Response) => {
  const locationRepository = AppDataSource.getRepository(Location);
  const id = req.params.id;
  const result = await locationRepository.delete(id);
  res.json(result);
});

export default router;
