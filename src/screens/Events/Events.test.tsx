import 'react-native';
import React from 'react';
import {myEvents} from '../../config/constants';
import store from '../../store';
import {ActionType} from '../../store/types';
import {render, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import Events from './Events';

let container: any = null;

const mockedEventState = {
  events: myEvents,
};

describe('<Events />', () => {
  // Render component before each test
  beforeEach(async () => {
    store.dispatch({
      type: ActionType.SET_EVENTS,
      payload: mockedEventState,
    });

    container = render(
      <Provider store={store}>
        <Events />
      </Provider>,
    );
    await act(async () => {});
  });

  test('Events screen renders correctly', () => {
    expect(container.getByTestId('root')).toBeTruthy();
  });

  test('should show Header', () => {
    expect(container.getByTestId('home-header')).toBeTruthy();
  });

  test('flatlist should be populated with mocked data', () => {
    let flatlist = container.getByTestId('myFlatlist');
    expect(flatlist).toBeTruthy();
    expect(flatlist.props.data).toEqual(mockedEventState);
  });
});
