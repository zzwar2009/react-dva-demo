// import { delay, takeLatest } from 'redux-saga' 
const Model = {
  namespace: 'counter',
  state: {
      value:100
  },
  effects: {
    *asyncAdd(_, { put }) {
        // yield delay(1000);
        yield put({
            type: 'add',
            payload: {
            },
        });
    },
  },
  reducers: {
    add(state, { payload }) {
      return {
        value:state.value+1
      };
    },
    minus(state, { payload }) {
        return {
            value:state.value-1
        };
    }
  },
};
export default Model;
