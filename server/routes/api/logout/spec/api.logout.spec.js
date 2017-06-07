const bootstrap = require('../../../../db/bootstrap/bootstrap');
const getClient = require('../../utils/getClient');
const login = require('../../utils/login');


beforeEach(async () => {
  await bootstrap();
  await login();
});

it('should response with 302 and redirect to /login', async () => {
  await getClient()
    .get('/api/logout')
    .expect('location', '/login')
    .expect(302, {});
});
