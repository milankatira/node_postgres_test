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
    res.json(locations);

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
    res.json(result);

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
    res.json(location);

  } catch (err) {

    next(err);

  }

};
