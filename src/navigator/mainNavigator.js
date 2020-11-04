import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213871Navigator from '../features/BlankScreen213871/navigator';
import BlankScreen113870Navigator from '../features/BlankScreen113870/navigator';
import BlankScreen013869Navigator from '../features/BlankScreen013869/navigator';
import BlankScreen113868Navigator from '../features/BlankScreen113868/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213871: { screen: BlankScreen213871Navigator },
BlankScreen113870: { screen: BlankScreen113870Navigator },
BlankScreen013869: { screen: BlankScreen013869Navigator },
BlankScreen113868: { screen: BlankScreen113868Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
