import request from '../utils/requests'

export function itemCategorys(parentId) {
  return request.get('/itemCategorys', {
    parentId: parentId
  })
}

export function goodsList(categoryId) {
  return request.get('/goodsList', {
    categoryId: categoryId
  })
}
export function goodsDetail(itemId) {
  return request.get('/goodsDetail', {
    itemId: itemId
  })
}
