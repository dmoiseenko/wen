const mockCipher = {
  update: jest.fn().mockReturnValue('encrypted'),
  final: jest.fn().mockReturnValue('final')
};
const mockDecipher = {
  update: jest.fn().mockReturnValue('decrypted'),
  final: jest.fn().mockReturnValue('final')
};
jest.mock('crypto', () => ({
  createCipher: jest.fn().mockReturnValue(mockCipher),
  createDecipher: jest.fn().mockReturnValue(mockDecipher)
}));

const cryptoService = require('../crypto.service');
const crypto = require('crypto');


describe('encrypt', () => {
  it('should create cipher', () => {
    cryptoService.encrypt('data');

    expect(crypto.createCipher).toHaveBeenCalledWith('aes-256-ctr', 'zc6tkJ9dAPw=5zRW');
  });

  it('should update cipher with data', () => {
    cryptoService.encrypt('data');

    expect(mockCipher.update).toHaveBeenCalledWith('data', 'utf8', 'hex');
  });

  it('should call final on cipher', () => {
    cryptoService.encrypt('data');

    expect(mockCipher.final).toHaveBeenCalledWith('hex');
  });

  it('should return encrypted data', () => {
    const actual = cryptoService.encrypt('data');

    expect(actual).toEqual('encryptedfinal');
  });
});

describe('decrypt', () => {
  it('should create decipher', () => {
    cryptoService.decrypt('encryptedData');

    expect(crypto.createDecipher).toHaveBeenCalledWith('aes-256-ctr', 'zc6tkJ9dAPw=5zRW');
  });

  it('should update cipher with data', () => {
    cryptoService.decrypt('encryptedData');

    expect(mockDecipher.update).toHaveBeenCalledWith('encryptedData', 'hex', 'utf8');
  });

  it('should call final on cipher', () => {
    cryptoService.decrypt('encryptedData');

    expect(mockDecipher.final).toHaveBeenCalledWith('utf8');
  });

  it('should return encrypted data', () => {
    const actual = cryptoService.decrypt('encryptedData');

    expect(actual).toEqual('decryptedfinal');
  });
});
