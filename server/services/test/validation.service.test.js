jest.mock('../../../common/validation/email.validation');
jest.mock('../../../common/validation/password.validation');

const validationService = require('../validation.service');
const errors = require('../../utils/errors.js');
const validateEmail = require('../../../common/validation/email.validation');
const validatePassword = require('../../../common/validation/password.validation');


describe('validateLoginInput', () => {
  const body = {
    email: 'email',
    password: 'password'
  };

  it('should throw LoginValidationError if input is undefined', () => {
    expect(() => {
      validationService.validateLoginInput(undefined);
    }).toThrow(errors.LoginValidationError);
  });

  it('should throw LoginValidationError if input is null', () => {
    expect(() => {
      validationService.validateLoginInput(null);
    }).toThrow(errors.LoginValidationError);
  });

  it('should validate email', () => {
    validationService.validateLoginInput(body);

    expect(validateEmail).toHaveBeenCalledWith('email');
  });

  it('should validate password', () => {
    validationService.validateLoginInput(body);

    expect(validatePassword).toHaveBeenCalledWith('password');
  });

  it('should throw LoginValidationError if email validation throws error', () => {
    validateEmail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => {
      validationService.validateLoginInput(body);
    }).toThrow(errors.LoginValidationError);
  });

  it('should throw LoginValidationError if password validation throws error', () => {
    validatePassword.mockImplementation(() => {
      throw new Error();
    });

    expect(() => {
      validationService.validateLoginInput(body);
    }).toThrow(errors.LoginValidationError);
  });
});
