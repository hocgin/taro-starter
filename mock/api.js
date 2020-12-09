import mockjs from 'mockjs'

export default {
  'GET /api/coupons': mockjs.mock({
    'success': true,
    'data': [{
      title: '饿了么红包',
      type: 'ele',
      url: 'https://s.click.ele.me/T2rAUtu',
      mini: {
        appid: 'wxece3a9a4c82f58c9',
        path: `pages/sharePid/web/index?scene=T2rAUtu`
      }
    }, {
      title: '饿了么红包',
      type: 'ele_guosu',
      url: 'https://s.click.ele.me/BixnXtu',
      mini: {
        appid: 'wxece3a9a4c82f58c9',
        path: `pages/sharePid/web/index?scene=BixnXtu`
      }
    }]
  })
}
