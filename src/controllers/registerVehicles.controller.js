const registerVehiclesController = (req, res) => {
  const { company } = req;

  const newVehicle = { ...req.validated };

  company.vehicle.push(newVehicle);

  return res.status(201).json({
    message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
    vehicle: newVehicle,
  });
};

export default registerVehiclesController;
