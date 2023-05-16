import express from 'express';
import {
  getLocations,
  getLocationById,
  postLocation,
} from '../controller/location.controller';
import { validateRequestBody } from '../validator/location.validator';

const router = express.Router();

router.get('/locations', getLocations);

router.post('/locations', postLocation);

router.get('/locations/:id', validateRequestBody, getLocationById);

export default router;
