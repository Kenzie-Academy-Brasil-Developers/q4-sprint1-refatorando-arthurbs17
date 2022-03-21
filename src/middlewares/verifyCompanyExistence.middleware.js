import { companies } from '../configs';

const verifyCompanyExistence = (req, res, next) => {
  const { cnpj } = req.params;

  const company = companies.find((companyDB) => companyDB.cnpj === cnpj);

  if (!company) {
    return res.status(400).json({ message: 'Company not registered' });
  }

  req.company = company;

  return next();
};

export default verifyCompanyExistence;
