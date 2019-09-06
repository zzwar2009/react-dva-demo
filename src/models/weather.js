// import { parse, stringify } from 'qs';
// import { routerRedux } from 'dva/router';

// ajax函数将返回Promise对象:

import {request} from '@/service/api';
const Model = {
  namespace: 'weather',
  state: {
    data: [],
    city:''
  },
  effects: {
    *queryList(_, { call, put }) {
        try {
            const response = yield call(request);
            const { city, data} = response ? JSON.parse(response) : {};
            yield put({
                type: 'updateList',
                payload: {
                    data,
                    city
                },
            });
        } catch (e) {
            console.error(e.stack);
            message.error(e.stack);
        }
    },
  },
  reducers: {
    updateList(state, { payload }) {
      return { ...state, ...payload};
    },
  },
};
export default Model;
