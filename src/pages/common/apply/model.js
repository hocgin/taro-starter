import API from "@/services/api";
import Utils from "@/utils/utils";

const initState = {}

export default {
  namespace: 'apply',
  state: initState,
  effects: {
    * getUserToken({payload = {}, callback, complete}, {put}) {
      let result = yield API.getUserToken(payload);
      if (Utils.ifFailShowMessage(result)) {
        if (callback) callback(result);
      }
      if (complete) complete();
    },
    * login({payload = {}, callback, complete}, {put}) {
      let result = yield API.login(payload);
      if (Utils.ifFailShowMessage(result)) {
        if (callback) callback(result);
      }
      if (complete) complete();
    },
    * getCurrentUser({payload = {}, callback, complete}, {put}) {
      let result = yield API.getCurrentUser(payload);
      if (Utils.ifFailShowMessage(result)) {
        if (callback) callback(result);
      }
      if (complete) complete();
    }
  },
  reducers: {},
};
