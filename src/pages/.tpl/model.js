import API from "@/services/api";
import Utils from "@/utils/utils";
import Pages from "@/utils/pages";

const FILL_WORKED = 'fillWorked'

const initState = {
  worked: null
}

export default {
  namespace: 'tpl',
  state: initState,
  effects: {
    * worked({payload = {}, callback, complete}, {put}) {
      let result = yield API.worked(payload);
      if (Utils.ifFailShowMessage(result)) {
        yield put({type: FILL_WORKED, payload: result.data});
        if (callback) callback(result);
      }
      if (complete) complete();
    },
  },
  reducers: {
    [FILL_WORKED](state, {payload}) {
      return {
        ...state,
        gumballsGift: payload
      };
    },
  },
};
