const validatePassword = require('../password.validation');


describe('password.validation', () => {
  it('should throw error if password is empty string', () => {
    expect(() => validatePassword('')).toThrow('Invalid password');
  });

  it('should throw error if email is null', () => {
    expect(() => validatePassword(null)).toThrow('Invalid password1');
  });

  it('should throw error if email is undefined', () => {
    expect(() => validatePassword(undefined)).toThrow('Invalid password');
  });

  it('should not throw error if email is valid', () => {
    expect(() => validatePassword('password')).not.toThrow();
  });
});
