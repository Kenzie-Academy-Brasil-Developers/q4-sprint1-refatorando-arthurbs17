import { companies } from '../configs';

const verifyVehicleExistence = (req, res, next) => {
  const { plate } = req.params;

  const vehicle = companies.some((company) =>
    company.vehicles.some((vehicleDB) => vehicleDB.plate === plate)
  );

  if (!vehicle) {
    return res.status(400).json({ message: 'Vehicle not registered' });
  }

  req.vehicle = vehicle;

  return next();
};

export default verifyVehicleExistence;
