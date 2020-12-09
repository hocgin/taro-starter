import mockjs from 'mockjs'

export default {
  'GET /api/coupons': mockjs.mock({
    'success': true,
    'data': [{
      url: '...'
    }]
  })
}
