import request from '../utils/requests'

export function login(data) {
  return request.post('/login', data)
}
