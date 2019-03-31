import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ImageBackground} from "react-native";
import ActionButton from '../layout/actionButtons'
import { Container, Thumbnail, Text, Button } from 'native-base';
import {Icon} from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/bg_screen_reg.png');

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="user" type='font-awesome' color="white" />
        ),
        tabBarOptions: {
            showLabel: false
        }
    }
    render() {
    const avatar = require('../assets/images/avatar.png');
      return (
        <Container style={styles.themeBg}>
            <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
            <View style={styles.headerContainer}>
        <View style={styles.logoContainer}><Text style={styles.logo}>Logo</Text></View>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Dating:Profile Summary</Text>
        </View>
        <View style={styles.profileBioDataContainer}>
                <Thumbnail source={avatar} />
        
              <View>
                <Text style={styles.profileName}>Karen Calay</Text>
                <Text note style={{color:"white"}}>
                    Optometrist</Text>
              </View>
      
                <Button rounded><Text>Save</Text></Button>
            
        </View>
        <View style={styles.profileDetailsContainer}>
            <FlatList
                data={[
                    {key: 'Satus', value: 'Single'},
                    {key: 'Occupation', value: 'Optometrist'},
                    {key: 'Company', value: 'Dr. Green Eye Centre'},
                    {key: 'Age', value: '30'},
                    {key: 'Activities', value: 'Soccer, Reading, Movies'},
                ]}
                renderItem={({item}) =>
                    <Text style={styles.profileDetailsItem}>
                    <Text style={styles.profile_key}>{item.key}</Text> <Text style={styles.profile_value}>{item.value}</Text>
                    </Text>
                        }
            />
        </View>

            </ImageBackground>
</Container>
      );
    }
  }

  const styles = StyleSheet.create({
    themeBg : {
        backgroundColor:'#004FFF'
    },
      bgImage: {
          flex: 1,
          top: 0,
          left: 0,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
      },
    title: {
      textAlign: 'center',
      fontSize:18,
      color:'white'
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:20
    },
    headerContainer: {
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:10,
      paddingRight:10,
    },
    logoContainer:{
    backgroundColor: 'white',
    padding:2,
    borderRadius:5,
    width:80,
    justifyContent: 'flex-start',
    },
    logo: {
      textAlign: 'center',
      fontSize:24
    },
    profileBioDataContainer: {
        justifyContent: "space-around", 
        padding:30,
        flexDirection: "row",
        alignItems: 'center'
    },
      profileDetailsContainer:{
          justifyContent: "flex-start",
          padding:30,
          flexDirection: "column",
          alignItems: 'flex-start'
      },
      profileDetailsItem:{
          padding:5,

      },
    profileName: {
        fontSize:26,
        color: 'white'
    },
      profile_key: {
        color: 'white',
          fontWeight: 'bold'
      },
      profile_value: {
        color: 'white'
      },
      bottomActions: {
        flex:1,
          justifyContent: "space-around",
          alignItems: 'flex-end',
          padding:30,
          flexDirection: "row"
      }
    });