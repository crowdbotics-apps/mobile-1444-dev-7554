import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen98912Navigator from '../features/BlankScreen98912/navigator';
import CalendarView88908Navigator from '../features/CalendarView88908/navigator';
import EmailAuth68907Navigator from '../features/EmailAuth68907/navigator';
import Messaging78906Navigator from '../features/Messaging78906/navigator';
import UserProfile58905Navigator from '../features/UserProfile58905/navigator';
import BlankScreen48902Navigator from '../features/BlankScreen48902/navigator';
import BlankScreen38901Navigator from '../features/BlankScreen38901/navigator';
import BlankScreen18900Navigator from '../features/BlankScreen18900/navigator';
import BlankScreen28899Navigator from '../features/BlankScreen28899/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen98912: { screen: BlankScreen98912Navigator },
CalendarView88908: { screen: CalendarView88908Navigator },
EmailAuth68907: { screen: EmailAuth68907Navigator },
Messaging78906: { screen: Messaging78906Navigator },
UserProfile58905: { screen: UserProfile58905Navigator },
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
