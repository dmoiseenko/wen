import { createAction } from 'redux-act';


export const signIn = createAction(
  'sign in'
);

export const signInSuccess = createAction(
  'sign in success'
);

export const signInFailure = createAction(
  'sign in failure'
);

export const reducer = {
  [signIn]: state => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: true,
      loaded: false
    }
  }),

  [signInSuccess]: state => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: false,
      loaded: true
    }
  }),

  [signInFailure]: state => ({
    ...state,
    signIn: {
      ...state.signIn,
      loading: false,
      loaded: false
    }
  })
};
