const throwIfNopInstance = require('../throwIfNoInstance');

it('should throw if instance is null', () => {
  const error = new Error('instance is null');

  function fut() {
    throwIfNopInstance(error)(null)('octopus');
  }

  expect(fut).toThrowErrorMatchingSnapshot();
});
