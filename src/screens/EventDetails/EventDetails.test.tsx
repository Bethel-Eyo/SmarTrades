import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';
import EventDetails from './EventDetails';

let container: any = null;

const mockedEvent = {
  id: '1',
  name: 'Cycling',
  description: 'Some description',
  dateCreated: '2010-05-08T16:31:52.714438Z',
  startTime: '2030-01-01T00:00:00Z',
  type: 'generic',
};

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    state: {
      params: {
        item: mockedEvent,
      },
    },
  },
  ...props,
});

describe('<EventDetails />', () => {
  let props: any;

  beforeEach(() => {
    props = createTestProps({});
    container = render(<EventDetails {...props} />);
  });

  test('Should display event name', () => {
    let name = container.getByTestId('event-name');
    expect(name).toBeTruthy();
    expect(name).toHaveTextContent('Cycling');
  });

  test('Should display date added for event', () => {
    let dateAdded = container.getByTestId('date-added');
    expect(dateAdded).toBeTruthy();
  });

  test('Should display start time of event', () => {
    let startTime = container.getByTestId('start-time');
    expect(startTime).toBeTruthy();
  });

  test('Should display description of event', () => {
    let description = container.getByTestId('description');
    expect(description).toBeTruthy();
    expect(description).toHaveTextContent('Some description');
  });

  test('Should display event type', () => {
    let type = container.getByTestId('event-type');
    expect(type).toBeTruthy();
    expect(type).toHaveTextContent('generic');
  });
});
