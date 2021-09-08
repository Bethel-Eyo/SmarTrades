import {Event} from '../store/action-creators';

type EventList = Array<Event>;

export const myEvents: EventList = [
  {
    id: '1',
    name: 'Cycling',
    description: 'Some description',
    dateCreated: '2010-05-08T16:31:52.714438Z',
    startTime: '2030-01-01T00:00:00Z',
    type: 'generic',
  },
  {
    id: '2',
    name: 'Football',
    description: 'La liga, Premiership',
    dateCreated: '2010-05-08T16:31:52.714438Z',
    startTime: '2030-01-01T00:00:00Z',
    type: 'top_level_event',
  },
  {
    id: '3',
    name: 'Cricket',
    description: 'No description',
    dateCreated: '2010-05-08T16:31:52.714438Z',
    startTime: '2030-01-01T00:00:00Z',
    type: 'generic',
  },
  {
    id: '4',
    name: 'Badminton',
    description: 'Some sport',
    dateCreated: '2010-05-08T16:31:52.714438Z',
    startTime: '2030-01-01T00:00:00Z',
    type: 'top_level_event',
  },
  {
    id: '5',
    name: 'Championship',
    description: 'NFA',
    dateCreated: '2010-05-08T16:31:52.714438Z',
    startTime: '2030-01-01T00:00:00Z',
    type: 'generic',
  },
];
