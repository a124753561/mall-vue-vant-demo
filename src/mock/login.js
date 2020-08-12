export default {
  'post|/login': option => {
    return {
      code: '000',
      message: '登录成功',
      data: {
        avatar: '展示',
        token: 'sdfsdfsddsf',
        nickName: '好好'
      }
    }
  }
}
