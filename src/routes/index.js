import { Router } from 'express';

import {
  verifyDuplicateCnpj,
  verifyDuplicateVehiclePlate,
  verifyCompanyExistence,
  verifyVehicleExistence,
  authenticateCompany,
  validateShape,
} from '../middlewares';

import { companySchema, vehicleSchema } from '../models';

import {
  registerCompanyController,
  loginCompanyController,
  getCompaniesController,
  updateCompanyController,
  deleteCompanyController,
  registerVehiclesController,
  getVehiclesController,
  updateVehiclesController,
  deleteVehiclesController,
} from '../controllers';

const router = Router();

// companies routes

router.post(
  '/companies/register',
  validateShape(companySchema),
  verifyDuplicateCnpj,
  registerCompanyController
);

router.post('/companies/login', loginCompanyController);

router.get('/companies', getCompaniesController);

router.put(
  '/companies/:cnpj',
  authenticateCompany,
  verifyCompanyExistence,
  updateCompanyController
);

router.delete(
  '/companies/:cnpj',
  authenticateCompany,
  verifyCompanyExistence,
  deleteCompanyController
);

// vehicles routes

router.post(
  '/companies/:cnpj/vehicles',
  authenticateCompany,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  validateShape(vehicleSchema),
  registerVehiclesController
);

router.get(
  '/companies/:cnpj/vehicles',
  authenticateCompany,
  verifyCompanyExistence,
  getVehiclesController
);

router.put(
  '/companies/:cnpj/vehicles/:plate',
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  updateVehiclesController
);

router.delete(
  '/companies/:cnpj/vehicles/:plate',
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  deleteVehiclesController
);

export default router;
