import { companies } from '../configs';

const updateCompanyController = (req, res) => {
  const { cnpj } = req.params;
  const company = companies.find((companyDB) => companyDB.cnpj === cnpj);
  const data = req.body;

  for (let key in data) {
    company[key] = data[key];
  }

  res.status(200).json({ messagem: 'Company updated', companies });
};

export default updateCompanyController;
