import React from "react";
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {DrawerItems} from 'react-navigation';
import {Image} from "react-native-elements";
import { ActivityIndicator } from 'react-native';

const PROFILE_IMAGE = require('../assets/images/user-hp.png')
class CustomDrawer extends React.Component
{
    render()
    {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={
                    {
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }>
                    <Image
                        source={ PROFILE_IMAGE }
                        style={{ width: 90, height: 90, borderRadius:60 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default CustomDrawer;

