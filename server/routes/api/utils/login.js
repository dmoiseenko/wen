const getHttpClient = require('./getHttpClient');


module.exports = async () => {
  const res = await getHttpClient()
    .post('/api/login')
    .send({ email: 'js@mail.com', password: 'password' });
  return res.headers['set-cookie'].pop().split(';')[0];
};
