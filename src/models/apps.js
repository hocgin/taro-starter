export default {
  namespace: 'apps',
  state: {},
  effects: {
    * findAll({payload}, {put}) {
      yield put({type: 'fillAll', payload: payload})
    },
  },
  reducers: {
    fillAll(state, {payload}) {
      return {
        ...state,
        all: payload
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
