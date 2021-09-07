import {ActionType} from '../types';

export type State = {
  events: Array<object> | [];
};

export const initialState: State = {
  events: [],
};

const eventReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case ActionType.SET_EVENTS:
      return {
        ...state,
        events: payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
