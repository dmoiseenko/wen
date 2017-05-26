const request = require('supertest')('http://localhost:3000');

const bootstrap = require('../../db/preparations/bootstrap');


describe('POST /api/login', () => {
  before(async () => {
    await bootstrap();
  });

  afterEach(async () => {
    await bootstrap();
  });

  it('should set cookie token', async () => {
    await request
      .post('/api/login')
      .send({ email: 'js@mail.com', password: 'password' })
      .expect('set-cookie', 'wen=eyJhbGciOiJIUzI1NiJ9.YjM5NGI1YTE5ZDIzYTVlNTY0MGI1YTZhZDJiZDhjMWY.CQ1tB-8IFWXE2fj9qdOApJMfchq1Me_8p19dCAxe8yo; path=/; httponly')
      .expect(200);
  });

  it('should response with 500 if credentials are invalid', async () => {
    await request
      .post('/api/login')
      .send({ email: 'js1@mail.com', password: 'password' })
      .expect(400)
      .expect({ error: 'Invalid email or password' });
  });
});
