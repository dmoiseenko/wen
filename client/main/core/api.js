import { apiRequest } from '../../common/api';


export function logout() { // eslint-disable-line import/prefer-default-export
  return apiRequest('/api/logout');
}
