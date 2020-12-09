import API from "@/services/api";
import Utils from "@/utils/utils";

const FILL_ALL_COUPON = 'fillAllCoupon'

const initState = {
  allCoupon: [],
}

export default {
  namespace: 'apps',
  state: initState,
  effects: {
    * listCoupon({payload = {}, callback}, {put}) {
      let result = yield API.listCoupon(payload);
      if (Utils.isSuccess(result)) {
        yield put({type: FILL_ALL_COUPON, payload: result.data});
        if (callback) callback(result);
      }
    },
  },
  reducers: {
    [FILL_ALL_COUPON](state, {payload}) {
      return {
        ...state,
        allCoupon: payload
      };
    },
  },
  // subscriptions: {
  //   setup({dispatch, history}, done) {
  //     return history.listen(({pathname, search}) => {
  //       const query = qs.parse(search);
  //       switch (pathname) {
  //         default: {
  //           console.log(pathname);
  //         }
  //       }
  //     });
  //   },
  // },
};
