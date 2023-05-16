import express, { Request, Response, NextFunction } from 'express';
import {
  getLocations,
  getLocationById,
  postLocation,
} from '../controller/location.controller';
import { validateRequestBody } from '../validator/location.validator';

const router = express.Router();

router.get('/locations', getLocations);

router.post('/locations', validateRequestBody, postLocation);

router.get('/locations/:id', getLocationById);

export default router;
