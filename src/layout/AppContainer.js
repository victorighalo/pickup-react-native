import React from "react";
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from "react-navigation";
import {Icon} from 'react-native-elements'
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import PeopleScreen from "../screens/People/PeopleScreen";
import AboutScreen from "../screens/AboutScreen";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import PersonScreen from "../screens/Person/PersonScreen";
import EditProfile from "../screens/EditProfile/EditProfile";


const FirstStack = createStackNavigator({
        People: {
            screen: PeopleScreen
        },
        Person: {
            screen: PersonScreen
        },
        EditProfile: {
            screen: EditProfile
        },
    },
    {
        initialRouteName: 'People',
        tabBarIcon: ({tintColor}) => (
            <Icon name="users" type='font-awesome' color="white" />
        ),
        tabBarOptions: {
            showLabel: false
        },
        defaultNavigationOptions: ({ navigation }) => {
            return ({
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

// const AppTabNavigator = createMaterialBottomTabNavigator(
//     {
//         People: {
//             screen: FirstStack,
//             navigationOptions : {
//                 tabBarIcon: ({tintColor}) => (
//                     <Icon name="users" type='font-awesome' color="white" />
//                 ),
//                 tabBarOptions: {
//                     showLabel: false
//                 }
//             }
//         },
//     Profile: {
//         screen: ProfileScreen,
//     },
//         About: {
//         screen: AboutScreen,
//     }
//     },
//     {
//         activeColor: '#fff',
//         inactiveColor: '#3e2465',
//         barStyle: { backgroundColor: '#3800BF' },
//         labeled:false
//     }
//     );

  const root = createSwitchNavigator({
      Auth: {
          screen: AuthStack
      },
      Tabs: FirstStack
  })

  
  export default AppContainer = createAppContainer(root);

