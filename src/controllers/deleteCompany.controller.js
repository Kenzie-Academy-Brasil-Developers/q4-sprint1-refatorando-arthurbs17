import { companies } from '../configs';

const deleteCompanyController = (req, res) => {
  const { company } = req;

  const companyIndex = companies.indexOf(company);

  companies.splice(companyIndex, 1);

  res.status(200).json({ messagem: 'Company deleted', companies });
};

export default deleteCompanyController;
