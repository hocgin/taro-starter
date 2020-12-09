import API from "@/services/api";
import Utils from "@/utils/utils";

export default {
  namespace: 'apps',
  state: {
    allCoupon: []
  },
  effects: {
    * listCoupon({payload = {}, callback}, {put}) {
      let result = yield API.listCoupon(payload);
      if (Utils.isSuccess(result)) {
        yield put({type: 'fillAllCoupon', payload: result.data});
        if (callback) callback(result);
      }
    },
  },
  reducers: {
    fillAllCoupon(state, {payload}) {
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
