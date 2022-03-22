import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../../app';
import { companies } from '../../configs';

describe('Route register company', () => {
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

  test('201 Created: return company and push to companies', async () => {
    const response = await request(app)
      .post('/api/companies/register')
      .send(company);

    const expectedStatusCode = 201;
    expect(response.statusCode).toBe(expectedStatusCode);

    expect(
      companies.find((companyDB) => companyDB.cnpj === company.cnpj)
    ).toBeTruthy();
  });
});
