const supertest = require('supertest');

const bootstrap = require('../../../../db/preparations/bootstrap');
const config = require('../../../../../common/config.js');


const request = supertest(`http://${config.server.host}:${config.server.port}`);

describe('POST /api/login', () => {
  beforeAll(async () => {
    await bootstrap();
  });

  afterEach(async () => {
    await bootstrap();
  });

  it('should response with 200 and empty body if credentials are valid', async () => {
    await request
      .post('/api/login')
      .send({ email: 'js@mail.com', password: 'password' })
      .expect(200, {});
  });

  it('should response with 500 if credentials are invalid', async () => {
    await request
      .post('/api/login')
      .send({ email: 'js1@mail.com', password: 'password' })
      .expect(400)
      .expect({ error: 'Invalid email or password' });
  });
});
