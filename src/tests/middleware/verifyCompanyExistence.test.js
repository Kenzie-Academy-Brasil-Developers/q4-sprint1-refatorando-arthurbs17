import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { companies } from '../../configs';
import { verifyCompanyExistence } from '../../middlewares';

describe('verifyCompanyExistence Middleware Tests', () => {
  const mockReq = {};
  const mockRes = {};
  const nextFn = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it('Status = 400 | Json = Company not registered', () => {
    mockReq.params = {
      cnpj: '43194023000197',
    };

    verifyCompanyExistence(mockReq, mockRes, nextFn);

    const expectedStatusCode = 400;
    expect(mockRes.status).toBeCalledWith(expectedStatusCode);

    const expectedJsonMessage = { message: 'Company not registered' };
    expect(mockRes.json).toBeCalledWith(expectedJsonMessage);
  });

  it('Company Exists', () => {
    const company = {
      name: 'Auto Nunes',
      cnpj: '43194023000197',
      password: '123456',
      cep: '54110000',
      address: 'Av. Barão de Lucena',
      number: '35',
      state: 'PE',
      city: 'Jaboatão',
    };

    companies.push(company);

    mockReq.params = {
      cnpj: company.cnpj,
    };

    verifyCompanyExistence(mockReq, mockRes, nextFn);

    expect(nextFn).toBeCalledTimes(1);
    expect(mockReq.company).toBe(company);
  });
});
