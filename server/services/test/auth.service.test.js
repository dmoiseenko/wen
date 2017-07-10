const authService = require('../auth.service');

const user = {
  id: 1,
  passwordHash: '123'
};
const email = 'email';
const password = 'password';


describe('getUserAndPassword', () => {
  it('should get user by email', async () => {
    const getUserByEmail = jest.fn().mockReturnValue(Promise.resolve(user));

    const actual = await authService.getUserAndPassword(getUserByEmail)({ email, password });

    expect(actual).toMatchSnapshot();
  });
});

describe('verifyPassword', () => {
  it('should verify password hash', async () => {
    const verifyPasswordHash = jest.fn().mockReturnValue(true);

    const actual = await authService.verifyPassword(verifyPasswordHash)({ user, password });

    expect(actual).toMatchSnapshot();
  });
});

describe('formPayload', () => {
  it('should form JWT token payload', () => {
    const actual = authService.formPayload({ user });

    expect(actual).toMatchSnapshot();
  });
});
