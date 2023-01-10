import {EnvPropsKit, request} from '@hocgin/taro-kit';
import Config from "@/config";

export default class {

  static worked(payload = {}) {
    return request(`/api/worked`, {
      method: 'GET'
    })
  }
}
