import request from '../utils/requests'

export function cartGoods() {
  return request.get('/cartGoods', {})
}
