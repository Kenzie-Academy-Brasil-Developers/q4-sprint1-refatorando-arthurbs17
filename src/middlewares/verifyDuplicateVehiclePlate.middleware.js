import { companies } from '../configs';

const verifyDuplicateVehiclePlate = (req, res, next) => {
  const { plate } = req.body;

  const vehicle = companies.some((company) =>
    company.vehicles.some((vehicleDB) => vehicleDB.plate === plate)
  );

  if (vehicle) {
    return res.status(400).json({ message: 'Vehicle already registered' });
  }

  return next();
};

export default verifyDuplicateVehiclePlate;
