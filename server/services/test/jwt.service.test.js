jest.mock('../crypto.service');
jest.mock('jsonwebtoken');
const jsonStringifySpy = jest.spyOn(JSON, 'stringify')
  .mockReturnValue('json data');
const jsonParseSpy = jest.spyOn(JSON, 'parse')
  .mockReturnValue('data');

const jwtService = require('../jwt.service');
const cryptoService = require('../crypto.service');
const jwt = require('jsonwebtoken');
const config = require('../../../common/config');
const errors = require('../../utils/errors');


describe('generateToken', () => {
  cryptoService.encrypt.mockReturnValue('encrypted');
  jwt.sign.mockReturnValue('token');

  afterAll(() => {
    jsonStringifySpy.mockRestore();
  });

  it('should stringify provided data', () => {
    jwtService.generateToken('data');

    expect(jsonStringifySpy).toHaveBeenCalled();
  });

  it('should encrypt data', () => {
    jwtService.generateToken('data');

    expect(cryptoService.encrypt).toHaveBeenCalledWith('json data');
  });

  it('should generate jwt token', async () => {
    const actual = jwtService.generateToken('data');

    expect(jwt.sign).toHaveBeenCalledWith('encrypted', config.secret.jwt);
    expect(actual).toEqual('token');
  });
});

describe('generateToken', () => {
  cryptoService.decrypt.mockReturnValue('data JSON');
  jwt.verify.mockReturnValue('encryptedData');

  afterAll(() => {
    jsonParseSpy.mockRestore();
  });

  it('should verify token data', () => {
    jwtService.verifyTokenAndReturnUserData('token');

    expect(jwt.verify).toHaveBeenCalledWith('token', config.secret.jwt);
  });

  it('should decrypt data', () => {
    jwtService.verifyTokenAndReturnUserData('token');

    expect(cryptoService.decrypt).toHaveBeenCalledWith('encryptedData');
  });

  it('should parse decrypted json data', async () => {
    const actual = jwtService.verifyTokenAndReturnUserData('token');

    expect(jsonParseSpy).toHaveBeenCalledWith('data JSON');
    expect(actual).toEqual('data');
  });

  it('should throw InvalidTokenError in token did not pass verification', () => {
    jwt.verify.mockImplementation(() => {
      throw new Error();
    });

    expect(() => jwtService.verifyTokenAndReturnUserData('token'))
      .toThrow(errors.InvalidTokenError);
  });
});
