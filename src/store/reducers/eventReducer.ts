import {ActionType} from '../types';

export type State = {
  events: Array<object> | [];
  loading: boolean;
};

export const initialState: State = {
  events: [],
  loading: true,
};

const eventReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case ActionType.SET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
