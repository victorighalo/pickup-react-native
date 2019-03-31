import {Switch, View} from "react-native";
import {Text} from "native-base";
import React from "react";


const CustomSwitch = (props) => {
    return (<View
            style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
            }}
        ><Switch/><Text>{props.name}</Text>
        </View>
    )
}

export default CustomSwitch;