import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { startSubmit, stopSubmit } from 'redux-form';

import {
  getEmailAndPasswordSaga,
  signInFailureSaga,
  signInSaga,
  signInSuccessSaga,
  watchSignInSaga
} from '../signIn.module.saga';
import * as module from '../signIn.module';
import * as signInForm from '../../../../core/form.constants';
import * as api from '../../../../core/api';
import * as location from '../../../../../common/core/location';
import * as routes from '../../../../../../common/routes';
import * as signInSelector from '../../../../core/signIn.selector';


describe('signInSaga', () => {
  const email = 'email';
  const password = 'password';
  const response = 'response';
  const error = 'error';

  it('should call signInSuccessSaga if login was successful', () => {
    testSaga(signInSaga)
      .next()
      .call(getEmailAndPasswordSaga)
      .next({ email, password })
      .put(startSubmit(signInForm.signInForm))
      .next()
      .call(api.login, { email, password })
      .next({ response })
      .call(signInSuccessSaga, response)
      .next()
      .isDone();
  });

  it('should call signInFailureSaga if login failed', () => {
    testSaga(signInSaga)
      .next()
      .call(getEmailAndPasswordSaga)
      .next({ email, password })
      .put(startSubmit(signInForm.signInForm))
      .next()
      .call(api.login, { email, password })
      .next({ error })
      .call(signInFailureSaga, error)
      .next()
      .isDone();
  });
});

describe('signInSuccessSaga', () => {
  const response = 'response';

  it('should have proper composition', () => {
    testSaga(signInSuccessSaga, response)
      .next()
      .put.resolve(module.signInSuccess(response))
      .next()
      .put(stopSubmit(signInForm.signInForm))
      .next()
      .call(location.setLocation, routes.home)
      .next()
      .isDone();
  });
});

describe('signInFailureSaga', () => {
  const error = { error: 'error' };

  it('should have proper composition', () => expectSaga(signInFailureSaga, error)
      .run()
      .then((result) => {
        expect(result.toJSON()).toMatchSnapshot();
      }));
});

describe('signInSuccessSaga', () => {
  const response = 'response';

  it('should have proper composition', () => {
    testSaga(signInSuccessSaga, response)
      .next()
      .put.resolve(module.signInSuccess(response))
      .next()
      .put(stopSubmit(signInForm.signInForm))
      .next()
      .call(location.setLocation, routes.home)
      .next()
      .isDone();
  });
});

describe('getEmailAndPasswordSaga', () => {
  it('should have proper composition', () => {
    testSaga(getEmailAndPasswordSaga)
      .next()
      .select(signInSelector.email)
      .next()
      .select(signInSelector.password)
      .next()
      .isDone();
  });
});

describe('watchSignInSaga', () => {
  it('should have proper composition', () => {
    testSaga(watchSignInSaga)
      .next()
      .takeEveryEffect(module.signIn.getType(), signInSaga)
      .finish()
      .isDone();
  });
});
