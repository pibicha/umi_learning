import { Effect, Reducer } from 'umi';




const HeroModel = {
  namespace: 'hero',

  state: {
    name: 'hero',
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default HeroModel;