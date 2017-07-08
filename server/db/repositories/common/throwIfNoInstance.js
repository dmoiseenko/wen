module.exports = error => (data) => {
  if (!data) {
    throw error;
  }

  return data;
};
