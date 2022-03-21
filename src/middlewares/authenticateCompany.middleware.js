import jsonwebtoken from 'jsonwebtoken';
import { config } from '../configs';

const authenticateCompany = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Missing authorization' });
  }

  const token = req.headers.authorization.split(' ')[1];

  jsonwebtoken.verify(token, config.secret, (err) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: 'Invalid Token.' });
    }
    return next();
  });
};

export default authenticateCompany;
