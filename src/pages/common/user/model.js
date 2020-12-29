import API from "@/services/api";
import Utils from "@/utils/utils";
import Pages from "@/utils/pages";

const FILL_CURRENT_USER = 'fillCurrentUser'

const initState = {
  currentUser: null
}

export default {
  namespace: 'user',
  state: initState,
  effects: {
    * getCurrentUser({payload = {}, callback, complete}, {put}) {
      let result = yield API.getCurrentUser(payload);
      if (Utils.ifFailShowMessage(result)) {
        yield put({type: FILL_CURRENT_USER, payload: result.data});
        if (callback) callback(result);
      }
      if (complete) complete();
      Pages.gotoApply();
    },
  },
  reducers: {
    [FILL_CURRENT_USER](state, {payload}) {
      return {
        ...state,
        currentUser: payload
      };
    },
  },
};
