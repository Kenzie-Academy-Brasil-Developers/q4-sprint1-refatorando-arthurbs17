import { companies } from '../configs';

const verifyDuplicateCnpj = (req, res, next) => {
  const { cnpj } = req.body;

  const company = companies.find((companyDB) => companyDB.cnpj === cnpj);

  if (company) {
    return res.status(400).json({ message: 'CNPJ already registered' });
  }

  return next();
};

export default verifyDuplicateCnpj;
