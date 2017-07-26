const validateInput = (state, formName, fieldName) => {
  if (!formName) {
    throw new Error('formName should be defined');
  }

  if (!state) {
    throw new Error('state should be defined');
  }

  if (!fieldName) {
    throw new Error('fieldName should be defined');
  }
};

const checkReduxFormSetup = (state) => {
  if (!state.form) {
    throw new Error('redux-form is not initialized');
  }
};

export default (state, formName, fieldName) => {
  validateInput(state, formName, fieldName);

  checkReduxFormSetup(state);

  if (!state.form[formName]) {
    return '';
  }

  if (!state.form[formName].submitErrors) {
    return '';
  }

  return state.form[formName].submitErrors[fieldName];
};
