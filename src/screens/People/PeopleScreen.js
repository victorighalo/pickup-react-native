import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ImageBackground, Image, TouchableOpacity} from "react-native";
import ActionButton from '../../layout/actionButtons'
import { Container, Text, CheckBox } from 'native-base';
import Header from "../../components/Header";
import styles from "./styles"
import list from "./list"

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const avatar1 = require('../../assets/images/avatar1.png');
const avatar2 = require('../../assets/images/avatar2.png');
const avatar3 = require('../../assets/images/avatar3.png');
const prox1 = require('../../assets/images/prox1.png');
const prox2 = require('../../assets/images/prox2.png');
const prox3 = require('../../assets/images/prox3.png');
const BG_IMAGE = require('../../assets/images/bg_screen_reg.png');
const WIFI_IMAGE = require('../../assets/images/wifi.png');

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
            style={styles.avatar}
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
                checked={item.checked}
                color='#A5CD39'
            />
        </View>
        <View style={{
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems:'center',
            flex:1}}>
           <Image source={item.prox} style={styles.wifi}/>
            <View style={styles.checkProfile}>
                <Text>{item.location}</Text>

            </View>
        </View>
        </View>
    </View>
    )
    render() {
        const avatar = require('../../assets/images/avatar.png');
        return (
            <Container style={{backgroundColor: 'transparent'}}>
                <Header bgColor="#26247B"/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Context: Dating</Text>
                    </View>
                    <View style={styles.tableHead}>
                        <Text style={{flex:3, textAlign: 'center', borderRightColor:'#fff', borderRightWidth:1, padding:5}}>Users nearby</Text>
                        <Text style={{flex:1, textAlign: 'center', borderRightColor:'#fff', borderRightWidth:1, padding:5}}>Prox</Text>
                        <Text style={{flex:1, textAlign: 'center', borderRightColor:'#fff', borderRightWidth:1, padding:5}}>Location</Text>
                    </View>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />

                    <View style={styles.bottomActions}>
                        <ActionButton imageLink={require('../../assets/images/cancel.png')} height={50} width={50}/>
                        <ActionButton imageLink={require('../../assets/images/message.png')} height={50} width={50}/>
                        <ActionButton imageLink={require('../../assets/images/star.png')} height={50} width={50}/>
                    </View>

            </Container>
        );
    }
}

