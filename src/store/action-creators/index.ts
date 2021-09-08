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
}

export const getEvents = () => (dispatch: Dispatch<getEventsAction>) => {
  axios
    .get('https://api.smarkets.com/v3/events/')
    .then(res => {
      console.log(res.data);
      Alert.alert('Data gotten successfully');
      dispatch({
        type: ActionType.SET_EVENTS,
        payload: res.data.events,
      });
    })
    .catch(error => {
      console.log(error);
      Alert.alert('An error occured');
    });
};
