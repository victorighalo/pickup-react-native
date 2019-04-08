import {Image, StyleSheet, View} from "react-native";
import {Container, Text} from "native-base";
import React from "react";
const scanning = require('../assets/images/scanning.png');

class Header extends React.Component {
    render() {
        return (
            <View style={{
                paddingTop:20,
                paddingBottom:10,
                paddingLeft:10,
                paddingRight:10,
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                backgroundColor: this.props.bgColor ? this.props.bgColor : 'transparent'
            }}>
                <View style={styles.logoContainer}>
                    <Text>LOGO</Text>
                </View>
                <View>
                    <Image source={scanning} style={styles.scanning}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer:{
        backgroundColor: 'white',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:5,
        justifyContent: 'flex-start',
    },
    logo: {
        textAlign: 'center',
        fontSize:24
    },
    scanning: {flex: 1, width: 200, height: 80, resizeMode: 'contain'}



});

export default Header;