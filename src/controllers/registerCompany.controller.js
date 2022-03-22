import { companies } from '../configs';

const registerCompanyController = (req, res) => {
  const company = { ...req.validated };

  company.vehicles = [];
  companies.push(company);

  return res.status(201).json(company);
};

export default registerCompanyController;
