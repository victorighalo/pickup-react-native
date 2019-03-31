import React from "react";
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from "react-navigation";
import {Icon} from 'react-native-elements'
import ProfileScreen from '../screens/profile'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import PeopleScreen from "../screens/PeopleScreen";

const FirstStack = createStackNavigator({

        People: {
            screen: PeopleScreen
        },
        Profile: {
            screen: ProfileScreen
        },
    },
    {
        initialRouteName: 'People',
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                drawerLabel: 'Home',
                headerLeft: ({tintColor}) => (
                    <Icon name="menu" onPress={()=> navigation.openDrawer()} size={30} style={{paddingLeft: 20}}/>
                ),
                // header: null
                // tabBarIcon: ({ focused, horizontal, tintColor }) => {
                //   const { routeName } = navigation.state;
                // //   let IconComponent = Ionicons;
                //   let iconName;
                //   if (routeName === 'Home') {
                //     iconName = `home`;
                //     // Sometimes we want to add badges to some icons.
                //     // You can check the implementation below.
                //     // IconComponent = HomeIconWithBadge;
                //   } else if (routeName === 'About') {
                //     iconName = `info`;
                //   }

                //   // You can return any component that you like here!
                //   return <Icon name={iconName} size={25} color={tintColor} />;
                // }
            });
        }
    }
);

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
},
    {
        initialRouteName: 'Login', defaultNavigationOptions: ({navigation}) => ({
            header: null
        })
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: FirstStack,
    }
});

  const root = createSwitchNavigator({
      Auth: {
          screen: AuthStack
      },
      Stack: AppDrawerNavigator
  })

  
  export default AppContainer = createAppContainer(root);

