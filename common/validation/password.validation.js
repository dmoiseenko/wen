module.exports = (password) => {
  if (!password) {
    throw new Error('Invalid password');
  }
};
