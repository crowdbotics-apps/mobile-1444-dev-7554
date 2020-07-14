import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48902Navigator from '../features/BlankScreen48902/navigator';
import BlankScreen38901Navigator from '../features/BlankScreen38901/navigator';
import BlankScreen18900Navigator from '../features/BlankScreen18900/navigator';
import BlankScreen28899Navigator from '../features/BlankScreen28899/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen48902: { screen: BlankScreen48902Navigator },
BlankScreen38901: { screen: BlankScreen38901Navigator },
BlankScreen18900: { screen: BlankScreen18900Navigator },
BlankScreen28899: { screen: BlankScreen28899Navigator },

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
