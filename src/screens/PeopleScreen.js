import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ImageBackground, Image, TouchableOpacity} from "react-native";
import ActionButton from '../layout/actionButtons'
import { Container, Text } from 'native-base';
import {CheckBox, Icon, ListItem} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const avatar = require('../assets/images/avatar.png');
const list = [
    {
        name: 'Amy Farha',
        avatar_url: avatar,
        subtitle: 'Vice President',
        location: 'Drakes'
    },
    {
        name: 'Chris Jackson',
        avatar_url: avatar,
        subtitle: 'Vice Chairman',
        location: 'Drakes'
    },
    {
        name: 'James Kola',
        avatar_url: avatar,
        subtitle: 'Footballer',
        location: 'Drakes'
    },
    {
        name: 'Ekene Samuel',
        avatar_url: avatar,
        subtitle: 'Student',
        location: 'Drakes'
    },    {
        name: 'Amy Farha',
        avatar_url: avatar,
        subtitle: 'Vice President',
        location: 'Drakes'
    },
    {
        name: 'Chris Jackson',
        avatar_url: avatar,
        subtitle: 'Vice Chairman',
        location: 'Drakes'
    },
    {
        name: 'James Kola',
        avatar_url: avatar,
        subtitle: 'Footballer',
        location: 'Drakes'
    },
    {
        name: 'Ekene Samuel',
        avatar_url: avatar,
        subtitle: 'Student',
        location: 'Drakes'
    },    {
        name: 'Chris Jackson',
        avatar_url: avatar,
        subtitle: 'Vice Chairman',
        location: 'Drakes'
    },
    {
        name: 'James Kola',
        avatar_url: avatar,
        subtitle: 'Footballer',
        location: 'Drakes'
    },
    {
        name: 'Ekene Samuel',
        avatar_url: avatar,
        subtitle: 'Student',
        location: 'Drakes'
    }
]

const BG_IMAGE = require('../assets/images/bg_screen_reg.png');
const WIFI_IMAGE = require('../assets/images/wifi.png');

export default class PeopleScreen extends React.Component {
    static navigationOptions = {
        header: null

    }
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
    <View style={styles.friendsList}>
        <View style={styles.friendsListLeft}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Person', {name: item.name, description: item.subtitle})}
            >
        <Image
            source={item.avatar_url}
        />
            </TouchableOpacity>
        </View>
        <View style={styles.friendsListRight}>

        <View style={styles.friendsListName}>
            <View style={{flexDirection:'column'}}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Person', {name: item.name, description: item.subtitle})}
            >

        <Text>{item.name}</Text>
            </TouchableOpacity>
        <Text style={styles.desc}>{item.subtitle}</Text>
        </View>
            <CheckBox
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={true}
            />
        </View>
        <View style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems:'center',
            flex:1}}>
           <Image source={WIFI_IMAGE} style={styles.wifi}/>
            <View style={styles.checkProfile}>
                <Text>{item.location}</Text>

            </View>
        </View>
        </View>
    </View>
    )
    render() {
        const avatar = require('../assets/images/avatar.png');
        return (
            <Container style={{backgroundColor: 'transparent'}}>

                    <View style={styles.headerContainer}>
                        <View style={styles.logoContainer}><Text style={styles.logo}>Logo</Text></View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Context: Dating</Text>
                    </View>
                    <View style={styles.tableHead}>
                        <Text>Users nearby</Text>
                        {/*<Text>Prox</Text>*/}
                        {/*<Text>Location</Text>*/}
                    </View>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />

                    <View style={styles.bottomActions}>
                        <ActionButton imageLink={require('../assets/images/cancel.png')}/>
                        <ActionButton imageLink={require('../assets/images/consulting-message.png')}/>
                        <ActionButton imageLink={require('../assets/images/star.png')}/>
                    </View>

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
        padding:20,
        backgroundColor:'#004FFF'
    },
    headerContainer: {
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#004FFF'
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

    bottomActions: {
        flex:1,
        justifyContent: "space-around",
        alignItems: 'flex-end',
        flexDirection: "row",
        paddingTop:40,
        paddingBottom:10,
        backgroundColor: 'transparent'
    },
    friendsList: {
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: "row",
    paddingBottom:2
    },
    friendsListName: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:'center',
        flex:1
    },

    friendsListRight:{
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:'center',
        paddingRight: 15
    },
    tableHead: {
        backgroundColor:'#ececec',
        justifyContent: 'space-around',
        flexDirection:'row',
        padding:5
    },
    checkProfile:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center'
    },
    wifi:{
        height: 20,
        width:20,
        alignItems:'center'
    },
    desc:{
        color: '#333',
        fontSize:12
    }
});