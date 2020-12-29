import request from '@/utils/request';
import qs from 'querystring';
import Config from "@/config";
import Utils from "@/utils/utils";

export default class API {

  static getUserToken(payload = {}) {
    return request(`/docking/wx/miniapp/${Config.getAppid()}/token`, {
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
