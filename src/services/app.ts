import {request} from '@hocgin/taro-kit';
import Config from "@/config";

export default class {

  static getUserToken(payload = {}) {
    return request(`/docking/wx/miniapp/${Config.getAppid()}/token2`, {
      method: 'POST',
      body: {...payload}
    });
  }

  static getCurrentUser(payload = {}) {
    return request(`/ums/account`, {
      method: 'GET',
    });
  }

  static login(payload = {}) {
    return request(`/sso/account/login/token`, {
      method: 'POST',
      body: {...payload}
    });
  }

  static worked(payload = {}) {
    return request(`/api/worked`, {
      method: 'GET'
    })
  }
}
