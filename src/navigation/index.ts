import {createStackNavigator} from 'react-navigation-stack';
import Events from '../screens/Events/Events';
import {createAppContainer} from 'react-navigation';

const navigationOptions = {
  headerShown: false,
};

const MainNavigator = createStackNavigator({
  Events: {
    screen: Events,
    navigationOptions,
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
