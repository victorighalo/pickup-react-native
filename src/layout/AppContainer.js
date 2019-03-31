import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer,createSwitchNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from './actionButtons'
import {Footer, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ProfileScreen from '../screens/profile'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import PeopleScreen from "../screens/PeopleScreen";

class AboutScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>About Screen</Text>
        </View>
      );
    }
  }


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
        defaultNavigationOptions: ({ navigation }) => ({
            header: null
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
        })
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

  const root = createSwitchNavigator({
      Auth: {
          screen: AuthStack
      },
      Stack: FirstStack
  })

  
  export default AppContainer = createAppContainer(root);

