export const initial = {
  apollo: PREBUILD ? {} : window.__APOLLO_STATE__.apollo // eslint-disable-line
};

export const test = {
  apollo: {}
};
