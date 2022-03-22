const deleteVehiclesController = (req, res) => {
  const { vehicle, company } = req;

  const index = company.vehicles.indexOf(vehicle);

  company.vehicles.splice(index, 1);

  return res.status(200).json({ message: 'Vehicle deleted', vehicle: vehicle });
};

export default deleteVehiclesController;
