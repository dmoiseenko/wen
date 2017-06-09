import { postApiRequest } from '../../common/api';


export function login({ email, password }) { // eslint-disable-line import/prefer-default-export
  return postApiRequest(
    '/api/login',
    { email, password });
}
