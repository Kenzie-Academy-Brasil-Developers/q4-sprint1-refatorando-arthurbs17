import verifyDuplicateCnpj from './verifyDuplicateCnpj.middleware';
import verifyDuplicateVehiclePlate from './verifyDuplicateVehiclePlate.middleware';
import verifyCompanyExistence from './verifyCompanyExistence.middleware';
import verifyVehicleExistence from './verifyVehicleExistence.middleware';
import authenticateCompany from './authenticateCompany.middleware';
import validateShape from './validateShape.middleware';

export {
  verifyDuplicateCnpj,
  verifyDuplicateVehiclePlate,
  verifyCompanyExistence,
  verifyVehicleExistence,
  authenticateCompany,
  validateShape,
};
