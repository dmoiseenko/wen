const cryptoService = require('../crypto.service.js');


it('should encrypt data', () => {
  const data = 'data';

  const encrypted = cryptoService.encrypt(data);

  expect(encrypted).toMatchSnapshot();
});

it('should decrypt data', () => {
  const data = '8b75241f7286cea1d406a2fd34d625ee';

  const actual = cryptoService.decrypt(data);

  expect(actual).toMatchSnapshot();
});
