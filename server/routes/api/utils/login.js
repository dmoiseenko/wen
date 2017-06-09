const getClient = require('./getClient');


module.exports = async () => {
  const res = await getClient()
    .post('/api/login')
    .send({ email: 'js@mail.com', password: 'password' });
  return res.headers['set-cookie'].pop().split(';')[0];
};
