import mockjs from 'mockjs'
import Utils from "@/utils/utils";

export default {
  'GET /api/worked': mockjs.mock(Utils.mockSuccess(true))
}
