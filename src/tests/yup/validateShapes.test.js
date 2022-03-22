import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../../app';

describe('Validate register company', () => {
  const company = {
    name: 'Auto Nunes',
    cnpj: '43194023000197',
    password: '123456',
    address: 'Av. Barão de Lucena',
    number: '35',
    state: 'PE',
    city: 'Jaboatão',
  };

  test('Erro miss cep field', async () => {
    const response = await request(app)
      .post('/api/companies/register')
      .send(company);

    const expectedStatusCode = 400;
    const expectedReturn = '{"error":"Campo de cep obrigátorio"}';
    expect(response.statusCode).toBe(expectedStatusCode);
    expect(response.error.text).toBe(expectedReturn);
  });
});
