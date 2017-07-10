const jwtService = require('../token.service.js');


it('should generate token and verify it', async () => {
  const data = 'data';

  const actual = await jwtService.generateToken(data);

  expect(actual).toMatchSnapshot();
});

it('should generate token and verify it', async () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.MDQzMmQ5ODU1Zjdk.KiAacE8kqxVSecWzuwDeLLp9EB0z19VrZiIuI7_iiQ0';

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
