import { postApiRequest } from '../../common/api';


export default function login({ email, password }) {
  return postApiRequest(
    '/api/login',
    { email, password });
}
