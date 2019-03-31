import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ImageBackground} from "react-native";
import ActionButton from '../layout/actionButtons'
import { Container, Thumbnail, Text, Button } from 'native-base';
import {Icon} from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/bg_screen_reg.png');

export default class AboutScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="info-circle" type='font-awesome' color="white" />
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
                        <Text style={styles.title}>About App</Text>
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