const bootstrap = require('../../../../db/bootstrap/bootstrap');
const getClient = require('../../utils/getClient');


beforeEach(async () => {
  await bootstrap();
});

it('should response with 200 and empty body if credentials are valid', async () => {
  await getClient()
    .post('/api/login')
    .send({ email: 'js@mail.com', password: 'password' })
    .expect(200, {});
});

it('should response with 500 if email are invalid', async () => {
  await getClient()
    .post('/api/login')
    .send({ email: 'js1@mail.com', password: 'password' })
    .expect(400)
    .expect({ error: 'Invalid email or password' });
});

it('should response with 500 if password are invalid', async () => {
  await getClient()
    .post('/api/login')
    .send({ email: 'js@mail.com', password: 'pass' })
    .expect(400)
    .expect({ error: 'Invalid email or password' });
});
