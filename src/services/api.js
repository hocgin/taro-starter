import request from '@/utils/request';
import qs from 'querystring';

export default class API {

  /**
   * 测试接口
   * @param payload
   */
  static listCoupon(payload) {
    return request(`/api/coupons?${qs.stringify(payload)}`, {
      method: 'GET',
    });
  }
}
