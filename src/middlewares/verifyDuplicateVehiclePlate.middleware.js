import { companies } from '../configs';

const verifyDuplicateVehiclePlate = (req, res, next) => {
  const { plate } = req.body;
  const { company } = req;
  const vehicle = company.vehicles.find(
    (vehicleDB) => vehicleDB.plate === plate
  );

  if (vehicle) {
    return res.status(400).json({ message: 'Vehicle already registered' });
  }

  return next();
};

export default verifyDuplicateVehiclePlate;
