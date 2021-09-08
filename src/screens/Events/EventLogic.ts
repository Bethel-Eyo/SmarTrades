import {useSelector, useDispatch} from 'react-redux';
import {getEvents} from '../../store/action-creators';
import {RootState} from '../../store/reducers';

export const EventLogic = () => {
  const dispatch = useDispatch();
  const {events} = useSelector((state: RootState) => state.event);

  const getData = () => {
    dispatch(getEvents());
  };

  return {getData, events};
};
