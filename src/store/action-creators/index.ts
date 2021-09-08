import axios from 'axios';
import {Alert} from 'react-native';
import {Dispatch} from 'redux';
import {getEventsAction} from '../actions';
import {ActionType} from '../types';

export interface Event {
  id: string;
  name: string;
  description: string;
  dateCreated: string;
  startTime: string;
  type: string;
}

export const getEvents = () => (dispatch: Dispatch<getEventsAction>) => {
  axios
    .get('https://api.smarkets.com/v3/events/')
    .then(res => {
      Alert.alert('Events gotten successfully');
      setEvents(res.data.events, dispatch);
    })
    .catch(error => {
      console.log(error);
      Alert.alert('An error occured');
      setEvents([], dispatch);
    });
};

const setEvents = (
  data: Array<object>,
  dispatch: Dispatch<getEventsAction>,
) => {
  dispatch({
    type: ActionType.SET_EVENTS,
    payload: data,
  });
};
