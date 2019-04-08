import React from "react";
import {View, StyleSheet, FlatList, Dimensions, ScrollView} from "react-native";
import ActionButton from '../../layout/actionButtons'
import { Container, Thumbnail, Text, Button, Body, Form, Item, Input, Label, Picker,Content  } from 'native-base';
import {CheckBox, Icon} from "react-native-elements";
import Header from "../../components/Header";
import styles from "./styles"

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class EditProfile extends React.Component {
    state = {
        selected2: undefined
    };

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    static navigationOptions = {
        headerBackImage: ({tintColor}) => (
            <Icon name="remove" type='font-awesome' color="white" />
        ),
        tabBarOptions: {
            showLabel: false
        },
        headerTintColor: '#333',
        headerStyle:{
            backgroundColor: "#3800BF"
        }
    }

    render() {
        //Get Parameters from people screen
        const { navigation } = this.props;
        const name = navigation.getParam('name', '');
        const description = navigation.getParam('description', '');
        const avatar = require('../../assets/images/avatar.png');

        return (

            <Container style={styles.themeBg}>
                    <Header/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Dating:Profile Summary</Text>
                    </View>
                    <View style={styles.profileBioDataContainer}>
                        <Thumbnail source={avatar} />
                        <View>
                            <Text style={styles.profileName}>{name} {this.state.pos}</Text>
                            <Text note style={{color:"#333"}}>
                                {description}</Text>
                        </View>

                        <Button rounded
                                style={{backgroundColor:'#A5CD39'}}
                                onPress={()=>this.props.navigation.navigate('Person', {name: name, description: description})}
                        ><Text>Save</Text></Button>

                    </View>
                    <Container style={styles.profileDetailsContainer}>
                        <Content>
                        <Form>

                             <Text>Profile Privacy</Text>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Private" value="key0" />
                                    <Picker.Item label="Public" value="key1" />
                                </Picker>
                            </Item>
                            <Item stackedLabel>
                                <Label>Occupation</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel >
                                <Label>Company</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Age</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Activities</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Summary</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Music Preferences</Label>
                                <Input />
                            </Item>
                        </Form>
                        </Content>
                    </Container>
            </Container>
        );
    }
}

