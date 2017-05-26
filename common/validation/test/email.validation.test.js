const validateEmail = require('../email.validation');


describe('email.validation', () => {
  it('should throw error if email is empty string', () => {
    expect(() => validateEmail('')).toThrow('Invalid email');
  });

  it('should throw error if email is null', () => {
    expect(() => validateEmail(null)).toThrow('Invalid email');
  });

  it('should throw error if email is undefined', () => {
    expect(() => validateEmail(undefined)).toThrow('Invalid email');
  });

  it('should throw error if email is invalid', () => {
    expect(() => validateEmail('2@')).toThrow('Invalid email');
  });

  it('should not throw error if email is valid', () => {
    expect(() => validateEmail('js@mail.com')).not.toThrow();
  });
});
