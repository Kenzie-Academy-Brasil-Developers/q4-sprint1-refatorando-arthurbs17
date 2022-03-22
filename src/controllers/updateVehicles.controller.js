const updateVehiclesController = (req, res) => {
  const { vehicle, company } = req;

  const updatedVehicle = { ...vehicle, ...req.body };

  const index = company.vehicles.indexOf(vehicle);

  company.vehicles[index] = updatedVehicle;

  return res
    .status(200)
    .json({ message: 'Vehicle updated', vehicle: updatedVehicle });
};

export default updateVehiclesController;
