const getVehiclesController = (req, res) => {
  const { company } = req;

  return res.status(200).json(company.vehicles);
};

export default getVehiclesController;
