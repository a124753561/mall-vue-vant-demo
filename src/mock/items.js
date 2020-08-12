export default {
  'get|/itemCategorys': option => {
    return {
      code: '000',
      message: '成功',
      data: [
        {
          id: '1',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '居家'
        }, {
          id: '2',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '餐厨'
        }, {
          id: '3',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '饮食'
        }, {
          id: '4',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '配件'
        }, {
          id: '5',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '服装'
        }, {
          id: '6',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '婴童'
        }
      ]
    }
  },
  'get|/goodsList': option => {
    return {
      code: '000',
      message: '成功',
      data: [
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        },
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        },
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        },
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        },
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        }, {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        },
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        },
        {
          id: '1',
          price: '2.00',
          image: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png',
          name: '手机',
          title: '周末促销'
        }
      ]
    }
  },
  'get|/goodsDetail': option => {
    return {
      code: '000',
      message: '成功',
      data: {
        images: ['http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png', 'http://yanxuan.nosdn.127.net/e48d2eb849c4426894fad347e9b8691a.jpg'],
        name: '闪屏3G',
        retailPrice: 20,
        counterPrice: 50,
        brief: 'kljl是对方答复军军军军',
        detail: '<p><img src="http://yanxuan.nosdn.127.net/1e6a7d46666cf41f62ae68b5fce159ef.jpg" _src="http://yanxuan.nosdn.127.net/1e6a7d46666cf41f62ae68b5fce159ef.jpg" style=""/></p>',
        picture: 'http://yanxuan.nosdn.127.net/2bfecfe58ea3ee0d554f2ed58e9ba30a.png',
        propsStr: [
          {
            name: '材质',
            value: '牛皮'
          },
          {
            name: '重量',
            value: '12KG'
          },
          {
            name: '重量',
            value: '12KG'
          },
          {
            name: '重量',
            value: '12KG'
          }
        ],
        productList: [
          {
            id: 61,
            number: 100,
            price: 345,
            url: 'http://yanxuan.nosdn.127.net/2bfecfe58ea3ee0d554f2ed58e9ba30a.png',
            specifications: [
              {
                id: 12313,
                name: '红色'
              },
              {
                id: 22313,
                name: 'S'
              }
            ]
          },
          {
            id: 62,
            number: 100,
            price: 34,
            url: 'http://yanxuan.nosdn.127.net/2bfecfe58ea3ee0d554f2ed58e9ba30a.png',
            specifications: [
              {
                id: 12313,
                name: '红色'
              },
              {
                id: 22314,
                name: 'M'
              }
            ]
          }
        ],
        specifications: [
          {
            name: '颜色',
            valueList: [
              {
                id: 12313,
                name: '红色',
                picUrl: 'http://yanxuan.nosdn.127.net/2bfecfe58ea3ee0d554f2ed58e9ba30a.png'
              },
              {
                id: 12314,
                name: '黑色',
                picUrl: 'http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png'
              }
            ]
          },
          {
            name: '尺寸',
            valueList: [
              {
                id: 22313,
                name: 'S',
                picUrl: ''
              },
              {
                id: 22314,
                name: 'M',
                picUrl: ''
              }
            ]
          }
        ]
      }
    }
  }
}
