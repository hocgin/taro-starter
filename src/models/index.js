import apps from './apps'
// eslint-disable-next-line import/no-commonjs
const apply = require('@/pages/common/apply/model').default
// eslint-disable-next-line import/no-commonjs
const user = require('@/pages/common/user/model').default
// eslint-disable-next-line import/no-commonjs
const index = require('@/pages/index/model').default


export default [apps, apply, user, index]
