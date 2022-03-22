import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { companies, config } from '../configs';

const loginCompanyController = async (req, res) => {
  const { cnpj, password } = req.body;

  const company = companies.find((companyDB) => companyDB.cnpj === cnpj);

  if (!company) {
    return res.status(401).json({ message: 'Company not found' });
  }

  const match = await bcrypt.compare(password, company.password);

  if (!match) {
    return res.status(401).json({ message: 'User and password missmatch.' });
  }

  const token = jsonwebtoken.sign({ cnpj: cnpj }, config.secret, {
    expiresIn: config.expiresIn,
  });

  return res.status(200).json({ token, company });
};

export default loginCompanyController;
