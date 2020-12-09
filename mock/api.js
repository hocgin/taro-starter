import mockjs from 'mockjs'

export default {
  'GET /api/tags': mockjs.mock({
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  })
}
