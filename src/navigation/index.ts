import {createStackNavigator} from 'react-navigation-stack';
import Events from '../screens/Events/Events';
import {createAppContainer} from 'react-navigation';
import EventDetails from '../screens/EventDetails/EventDetails';
import {background, primary} from '../config/color';

const navigationOptions = {
  headerShown: false,
};

const MainNavigator = createStackNavigator({
  Events: {
    screen: Events,
    navigationOptions,
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      title: 'Event Details',
      headerStyle: {
        backgroundColor: background.light,
      },
      headerTintColor: primary.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
