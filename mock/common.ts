import mockjs from 'mockjs'
import MockKit from '@hocgin/mock-kit'

export default {
  'GET /api/worked': mockjs.mock(MockKit.success()),
  'GET /api/com/project/:encoding': mockjs.mock(MockKit.success({
    unreadTotalCount: 1,
  })),
  'GET /api/com/mina/message/stat': mockjs.mock(MockKit.success()),
  'GET /api/com/mina/integral/stat': mockjs.mock(MockKit.success()),
  'POST /api/com/mina/message/_paging': mockjs.mock(MockKit.success({records: []})),
  'GET /api/ums/account': mockjs.mock(MockKit.success({
    id: 1,
    username: 'hocgin',
    nickname: 'HOCGIN',
    avatar: mockjs.Random.image('100x100', '#50B347', '#FFF', 'png', 'HOCGIN'),
  })),
  'POST /api/docking/wx/miniapp/:appid/token': mockjs.mock(MockKit.success({
    userDetail: {
      id: 1,
      username: 'hocgin',
      nickname: 'HOCGIN',
      avatar: mockjs.Random.image('100x100', '#50B347', '#FFF', 'png', 'HOCGIN'),
    },
    token: `token_${Math.random()}`,
  })),
  'POST /api/com/mina/sign': mockjs.mock(MockKit.success()),
  'POST /api/chaos/sms-code': mockjs.mock(MockKit.success()),
  'POST /api/ums/account/phone': mockjs.mock(MockKit.success()),
  'POST /api/sso/account/login/qrcode': mockjs.mock(MockKit.success()),
  'POST /api/sso/account/login/token': mockjs.mock(MockKit.success()),
  'POST /api/com/mina/watch-ad': mockjs.mock(MockKit.success()),
  'POST /api/mock/loadRows': mockjs.mock(MockKit.success([
    1, 2, 2, 3, 4, 4, 5, 1, 2, 2, 3, 4, 4, 5, 1, 2, 2, 3, 4, 4, 5,
    1, 2, 2, 3, 4, 4, 5, 1, 2, 2, 3, 4, 4, 5, 1, 2, 2, 3, 4, 4, 5
  ]))

};
