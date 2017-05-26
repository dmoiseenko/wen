import { call, fork } from 'redux-saga/effects';


export default function forkAutoRestarting(fn, ...args) {
  return fork(function* restart() {
    while (true) {
      try {
        yield call(fn, ...args);
      } catch (e) {
        console.warn(`Unhandled error in ${fn.name}`, e); // eslint-disable-line no-console
      }
    }
  });
}
