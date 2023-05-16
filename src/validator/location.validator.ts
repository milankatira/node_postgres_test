import { Request, Response, NextFunction } from 'express';

export const validateRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const { latitude, longitude, userId } = req.body;
  if (!latitude || !longitude || !userId) {

    return res.status(400).json({ message: 'Invalid request body' });

  }
  next();

};
