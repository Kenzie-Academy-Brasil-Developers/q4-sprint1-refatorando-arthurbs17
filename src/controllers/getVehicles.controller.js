const getVehiclesController = (req, res) => {
  const { company } = req;

  return res.status(201).json(company.vehicles);
};

export default getVehiclesController;
