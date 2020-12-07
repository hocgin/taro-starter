import request from '@/utils/request';

export default class API {

  /**
   * 测试接口
   * @param payload
   */
  static worked(payload) {
    return request(`/worked`, {
      method: 'POST',
      body: {
        ...payload,
      },
    });
  }
}
