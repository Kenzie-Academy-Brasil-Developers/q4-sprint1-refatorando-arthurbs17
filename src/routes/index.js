import { Router } from 'express';

import {
  verifyDuplicateCnpj,
  verifyDuplicateVehiclePlate,
  verifyCompanyExistence,
  verifyVehicleExistence,
  authenticateCompany,
  validateShape,
} from '../middlewares';

import { companySchema, vehicleSchema } from '../shapes';

import { companies } from '../configs';

const router = Router();
