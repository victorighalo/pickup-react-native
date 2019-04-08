import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ImageBackground, TouchableOpacity, Switch, Animated, PanResponder} from "react-native";
import ActionButton from '../../layout/actionButtons'
import { Container, Thumbnail, Text, Button, Body } from 'native-base';
import {CheckBox, Icon} from "react-native-elements";
import CustomSwitch from "../../components/CustomSwitch";
import Header from "../../components/Header";
import styles from "./styles"


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../assets/images/bg.png');

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        header: null,
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

    componentWillMount() {
        this.buttomAnimation = new Animated.ValueXY({x:0, y: SCREEN_HEIGHT - 90});
        this.menuAnimation = new Animated.ValueXY({x:0, y: SCREEN_HEIGHT - 150}),


            this.PanResponder = PanResponder.create(
            {
                onMoveShouldSetPanResponder:()=> true,
                onPanResponderGrant: (evt, gestureState) =>{
                    this.menuAnimation.extractOffset()
                },
                onPanResponderMove: (evt, gestureState) => {
                    if(gestureState.moveY > 276 && gestureState.moveY < 555) {
                        this.menuAnimation.setValue({x: 0, y: gestureState.dy})
                    }
                    // this.setState({pos: SCREEN_HEIGHT + ' - ' + gestureState.moveY})

                },
                onPanResponderRelease: (evt, gestureState) => {
                    // if(gestureState.moveY > 383){
                    // Animated.spring(this.state.menuAnimation.y, {
                    //     toValue: 306,
                    //     tension:1
                    // }).start()
                    // }
                    // this.menuAnimation.flattenOffset()
                }
            }
        )
    }

    render() {
        //Get Parameters from people screen
        const { navigation } = this.props;
        const name = navigation.getParam('name', '');
        const description = navigation.getParam('description', '');
        const avatar = require('../../assets/images/avatar.png');
        const animatedHeight = {
            transformButtons: this.buttomAnimation.getTranslateTransform(),
            transformMenu: this.menuAnimation.getTranslateTransform(),
            profileSettingsHeight : this.menuAnimation.y.interpolate({
                inputRange: [0,SCREEN_HEIGHT - 110],
                outputRange: [SCREEN_HEIGHT - 410, -10],
                extrpolate: "clamp"
            }),
            profileSettingsOpacity : this.menuAnimation.y.interpolate({
                inputRange: [0,SCREEN_HEIGHT - 196],
                outputRange: [6, 0],
                extrpolate: "clamp"
            })
        }
      return (

        <Container style={styles.themeBg}>
            <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
   <Header/>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Dating:Profile Summary</Text>
        </View>
        <View style={styles.profileBioDataContainer}>
                <Thumbnail source={avatar} />
        
              <View>
                <Text style={styles.profileName}>{name} {this.state.pos}</Text>
                <Text note style={{color:"white"}}>
                    {description}</Text>
              </View>
      
                <Button rounded style={{backgroundColor:'#A5CD39'}}
                        onPress={()=>this.props.navigation.navigate('EditProfile', {name: name, description: description})}
                ><Text>Edit</Text></Button>
            
        </View>
        <View style={styles.profileDetailsContainer}>
            <Text style={styles.profileDetailsItemDark} >
                <Text style={styles.profile_key}>Status: </Text> <Text style={styles.profile_value}> Single</Text>
            </Text>
            <Text style={styles.profileDetailsItemLight} >
                <Text style={styles.profile_key}>Occupation: </Text> <Text style={styles.profile_value}> {description}</Text>
            </Text>
            <Text style={styles.profileDetailsItemDark} >
                <Text style={styles.profile_key}>Company: </Text> <Text style={styles.profile_value}> Dr. Green Eye Centre</Text>
            </Text>
            <Text style={styles.profileDetailsItemLight} >
                <Text style={styles.profile_key}>Age: </Text> <Text style={styles.profile_value}> 30</Text>
            </Text>
            <Text style={styles.profileDetailsItemDark} >
                <Text style={styles.profile_key}>Activities: </Text> <Text style={styles.profile_value}> Soccer, Reading, Movies</Text>
            </Text>
        </View>


                <Animated.View
                    {... this.PanResponder.panHandlers}
                    style={
                    [animatedHeight.transformMenu,{
                        position:'absolute',
                        left:0,
                        right:0,
                        zIndex:10,
                        backgroundColor:'white',
                    }]
                }>
                    <Animated.View
                        style={{
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'row',
                        }}>
                        <Button transparent rounded>
                            <Icon name="bars" type="font-awesome" color="#26247B" size={15}/><Text style={{fontSize:15, color:'#26247B'}}>Menu</Text>
                        </Button>
                    </Animated.View>
                    <Animated.View
                        style={[{
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'row',
                            backgroundColor:'transparent',
                            height: animatedHeight.profileSettingsHeight,
                            opacity: animatedHeight.profileSettingsOpacity,
                        }]}>
                        <View style={styles.modal}>
                            <TouchableOpacity style={{
                                justifyContent:'center',
                                alignItems:'center',
                                flexDirection:'row',
                                textAlign: 'center',
                                backgroundColor:'#A5CD39',
                                borderRadius:20,
                                padding:10
                            }}>
                                {/*<CheckBox checked={true} color="green"/>*/}
                                <Text style={{color:'#fff'}}>Clear Current Filter Settings</Text>
                            </TouchableOpacity>
                            <View style={{
                                justifyContent:'space-between',
                                alignItems:'center',
                                flexDirection:'row',
                                padding:10,
                            }}>

                                <View>
                                    <CustomSwitch name="Context"/>
                                    <CustomSwitch name="Attributes"/>
                                    <CustomSwitch name="Profile"/>
                                </View>

                                <View>
                                    <CustomSwitch name="Distance"/>
                                    <CustomSwitch name="Freq of Proximity"/>
                                    <CustomSwitch name="Saved Filters"/>
                                </View>

                            </View>

                        </View>
                    </Animated.View>
                </Animated.View>

                <Animated.View style={
                    [animatedHeight.transformButtons,{
                        position:'absolute',
                        left:0,
                        right:0,
                        zIndex:5,
                        backgroundColor:'transparent',
                    }]
                }>
                <View style={styles.bottomActions}>
                    <ActionButton imageLink={require('../../assets/images/cancel.png')} height={50} width={50}/>
                    <ActionButton imageLink={require('../../assets/images/message.png')} height={50} width={50}/>
                    <ActionButton imageLink={require('../../assets/images/star.png')} height={50} width={50}/>
                </View>
                </Animated.View>
            </ImageBackground>
</Container>
      );
    }
  }

