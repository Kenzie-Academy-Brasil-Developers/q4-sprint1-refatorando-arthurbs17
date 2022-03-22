import { companies } from '../configs';

const updateCompanyController = (req, res) => {
  const { company } = req;
  const data = req.body;

  const index = companies.indexOf(company);

  for (let key in data) {
    company[key] = data[key];
  }

  companies[index] = company;

  res.status(200).json({ messagem: 'Company updated', companies });
};

export default updateCompanyController;
