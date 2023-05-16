import { Request, Response, NextFunction } from 'express';
import { LocationService } from '../service/location.service';

const locationService = new LocationService();

export const getLocations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  try {

    const locations = await locationService.getLocations();
    res.status(200).json({ success: true, message: 'Locations fetched successfully', data: locations });

  } catch (err) {

    next(err);

  }

};

export const postLocation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  try {

    const { latitude, longitude, userId } = req.body;
    const result = await locationService.createLocation(
      latitude,
      longitude,
      userId,
    );
    res.status(201).json({ success: true, message: 'Location created successfully', data: result });

  } catch (err) {

    next(err);

  }

};

export const getLocationById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  try {

    const id = parseInt(req.params.id) as unknown as number;
    const location = await locationService.getLocationById(id);
    if (!location) {
      return res.status(404).json({ success: false, message: 'Location not found' });
    }
    res.status(200).json({ success: true, message: 'Location fetched successfully', data: location });

  } catch (err) {

    next(err);

  }

};
