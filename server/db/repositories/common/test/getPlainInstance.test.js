const getPlainInstance = require('../getPlainInstance');

it('should call plain instance getter', () => {
  const instance = {
    plain: 'plain instance'
  };

  const actual = getPlainInstance(instance);

  expect(actual).toEqual('plain instance');
});
