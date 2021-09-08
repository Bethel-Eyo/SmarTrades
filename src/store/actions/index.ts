import {ActionType} from '../types';

export interface getEventsAction {
  type: ActionType.SET_EVENTS;
  payload: Array<object>;
}
