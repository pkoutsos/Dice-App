import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './FirstScreen';
import Monopoly from './Monopoly';
import Tavla from './Tavla';
import Snake_and_ladders from './Snake_and_ladders';

const AppNavigator = createStackNavigator({
      First:{screen:FirstScreen},
      Monopoly:{screen:Monopoly},
      Tavla:{screen:Tavla},
      Snake:{screen:Snake_and_ladders}
});

export default createAppContainer(AppNavigator);