import { companies } from '../configs';

const verifyVehicleExistence = (req, res, next) => {
  const { cnpj, plate } = req.params;

  const company = companies.find((companyDB) => companyDB.cnpj === cnpj);
  const vehicle = company.vehicles.find(
    (vehicleDB) => vehicleDB.plate === plate
  );

  if (!vehicle) {
    return res.status(400).json({ message: 'Vehicle not registered' });
  }

  req.vehicle = vehicle;

  return next();
};

export default verifyVehicleExistence;
