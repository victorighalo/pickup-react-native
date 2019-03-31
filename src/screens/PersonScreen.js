import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ImageBackground, TouchableOpacity, Switch} from "react-native";
import ActionButton from '../layout/actionButtons'
import { Container, Thumbnail, Text, Button } from 'native-base';
import {Icon} from "react-native-elements";
import Modal from "react-native-modal";
import CustomSwitch from "../components/CustomSwitch";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/bg_screen_reg.png');

export default class ProfileScreen extends React.Component {
    state = {
        isModalVisible: false,
    };
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="user" type='font-awesome' color="white" />
        ),
        tabBarOptions: {
            showLabel: false
        },
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: "#3800BF"
        }
    }
    render() {
        //Get Parameters from people screen
        const { navigation } = this.props;
        const name = navigation.getParam('name', '');
        const description = navigation.getParam('description', '');
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
                <Text style={styles.profileName}>{name}</Text>
                <Text note style={{color:"white"}}>
                    {description}</Text>
              </View>
      
                <Button rounded><Text>Save</Text></Button>
            
        </View>
        <View style={styles.profileDetailsContainer}>
            <FlatList
                data={[
                    {key: 'Satus', value: 'Single'},
                    {key: 'Occupation', value: description},
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
                <View style={styles.menuBtnContainer}>
                    <View><Button transparent rounded onPress={this._toggleModal}><Text style={{color:'#fff'}}>Menu</Text></Button></View>
                </View>

                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={()=>this.setState({ isModalVisible: false })}
                    onBackButtonPress={()=>this.setState({ isModalVisible: false })}

                >
                    <View style={styles.modal}>
                        <View style={{
                            justifyContent:'flex-start',
                            alignItems:'center',
                            padding:30,
                            flexDirection:'row'
                        }}>

                               <Icon name="bars" type="font-awesome" color="#3800BF"/>
                               <Text style={{fontSize:25, color:'#3800BF'}}> Menu</Text>

                        </View>

                        <View style={{
                            justifyContent:'space-between',
                            flexDirection:'row',
                            padding:30
                        }}>

                        <View>
                       <CustomSwitch name="Context"/>
                       <CustomSwitch name="Profile"/>
                       <CustomSwitch name="Bites"/>
                        </View>

                        <View>
                            <CustomSwitch name="Distance"/>
                            <CustomSwitch name="Freq of Proximity"/>
                            <CustomSwitch name="Saved Filters"/>
                        </View>

                        </View>

                        <View style={{
                            justifyContent:'center',
                            padding:30
                        }}>
                                <Button rounded danger onPress={this._toggleModal}><Text>Close</Text></Button>
                        </View>

                    </View>
                </Modal>
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
      },
      modal:{
        flex:1,
          backgroundColor: "#fff",
          justifyContent:'flex-start',
      },
      menuBtnContainer: {
        justifyContent:'center',
          alignItems:'center',
          flex:1
      },
      row:{
        flexDirection: "row",
          justifyContent:'center',
          alignItems:'center',
      } ,
      column:{
        flexDirection: "column",
      }
    });