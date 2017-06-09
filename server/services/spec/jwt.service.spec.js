const jwtService = require('../jwt.service.js');


it('should generate token and verify it', async () => {
  const data = 'data';

  const actual = await jwtService.generateToken(data);

  expect(actual).toMatchSnapshot();
});

it('should generate token and verify it', async () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.OWZiNTIyNmRjMTVjZWU1ZmMxODhiYmVmODBkZjc3NDU.dqH5DqCy5XeciTE9D7yIdLeEVel8HN5dcwH_waQP7as';

  const actual = await jwtService.verifyTokenAndReturnUserData(token);

  expect(actual).toMatchSnapshot();
});

it('should throw InvalidTokenError if token is invalid', async () => {
  try {
    await jwtService.verifyTokenAndReturnUserData('token');
  } catch (err) {
    expect(err.name).toEqual('InvalidTokenError');
  }
});
