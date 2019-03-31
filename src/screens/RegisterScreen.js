import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/bg_screen_reg.png');

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            email: '',
            email_valid: true,
            password: '',
            login_failed: false,
            showLoading: false,
        };


    }

    async componentDidMount() {


        this.setState({ fontLoaded: true });
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    submitLoginCredentials= () => {
        const { showLoading } = this.state;

        this.setState({
            showLoading: !showLoading,
        });

        setTimeout( () => {
            this.props.navigation.navigate('Profile')
        }, 2000)
    }

    render() {
        const { email, password, email_valid, showLoading } = this.state;

        return (
            <View style={styles.container}>
                <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
                    {this.state.fontLoaded ? (
                        <View style={styles.loginView}>
                            <View style={styles.loginTitle}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.travelText}>REGISTER</Text>
                                </View>
                            </View>
                            <View >
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="user-o"
                                            type="font-awesome"
                                            color="rgba(171, 189, 219, 1)"
                                            size={25}
                                        />
                                    }
                                    containerStyle={{ marginVertical: 10 }}
                                    inputContainerStyle={{ borderColor: 'white' }}
                                    onChangeText={email => this.setState({ email })}
                                    value={email}
                                    inputStyle={{ marginLeft: 10, color: 'white' }}
                                    keyboardAppearance="light"
                                    placeholder="First name"
                                    autoFocus={false}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    ref={input => (this.emailInput = input)}
                                    onSubmitEditing={() => {
                                        this.setState({ email_valid: this.validateEmail(email) });
                                        this.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    placeholderTextColor="white"
                                    errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                    errorMessage={
                                        email_valid ? null : 'Please enter a valid email address'
                                    }
                                />
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="user-o"
                                            type="font-awesome"
                                            color="rgba(171, 189, 219, 1)"
                                            size={25}
                                        />
                                    }
                                    containerStyle={{ marginVertical: 10 }}
                                    inputContainerStyle={{ borderColor: 'white' }}
                                    onChangeText={email => this.setState({ email })}
                                    value={email}
                                    inputStyle={{ marginLeft: 10, color: 'white' }}
                                    keyboardAppearance="light"
                                    placeholder="Last name"
                                    autoFocus={false}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    ref={input => (this.emailInput = input)}
                                    onSubmitEditing={() => {
                                        this.setState({ email_valid: this.validateEmail(email) });
                                        this.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    placeholderTextColor="white"
                                    errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                    errorMessage={
                                        email_valid ? null : 'Please enter a valid email address'
                                    }
                                />
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="user-o"
                                            type="font-awesome"
                                            color="rgba(171, 189, 219, 1)"
                                            size={25}
                                        />
                                    }
                                    containerStyle={{ marginVertical: 10 }}
                                    inputContainerStyle={{ borderColor: 'white' }}
                                    onChangeText={email => this.setState({ email })}
                                    value={email}
                                    inputStyle={{ marginLeft: 10, color: 'white' }}
                                    keyboardAppearance="light"
                                    placeholder="Email"
                                    autoFocus={false}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    ref={input => (this.emailInput = input)}
                                    onSubmitEditing={() => {
                                        this.setState({ email_valid: this.validateEmail(email) });
                                        this.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    placeholderTextColor="white"
                                    errorStyle={{ textAlign: 'center', fontSize: 12 }}
                                    errorMessage={
                                        email_valid ? null : 'Please enter a valid email address'
                                    }
                                />
                                <Input
                                    leftIcon={
                                        <Icon
                                            name="lock"
                                            type="font-awesome"
                                            color="rgba(171, 189, 219, 1)"
                                            size={25}
                                        />
                                    }
                                    containerStyle={{ marginVertical: 10 }}
                                    inputContainerStyle={{ borderColor: 'white' }}
                                    onChangeText={password => this.setState({ password })}
                                    value={password}
                                    inputStyle={{ marginLeft: 10, color: 'white' }}
                                    secureTextEntry={true}
                                    keyboardAppearance="light"
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                    returnKeyType="done"
                                    ref={input => (this.passwordInput = input)}
                                    blurOnSubmit={true}
                                    placeholderTextColor="white"
                                />
                            </View>
                            <Button
                                title="REGISTER"
                                activeOpacity={1}
                                underlayColor="transparent"
                                onPress={this.submitLoginCredentials.bind(this)}
                                loading={showLoading}
                                loadingProps={{ size: 'small', color: 'white' }}
                                disabled={!email_valid && password.length < 8}
                                buttonStyle={{
                                    height: 50,
                                    width: 250,
                                    backgroundColor: 'transparent',
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    borderRadius: 30,
                                }}
                                containerStyle={{ marginVertical: 10 }}
                                titleStyle={{ fontWeight: 'bold', color: 'white' }}
                            />
                            <View style={styles.footerView}>
                                <Text style={{ color: '#ccc' }}>Have an account?</Text>
                                <Button
                                    title="Login"
                                    type="clear"
                                    activeOpacity={0.5}
                                    titleStyle={{ color: 'white', fontSize: 15 }}
                                    containerStyle={{ marginTop: -10 }}
                                    onPress={() => this.props.navigation.navigate('Login')}
                                />
                            </View>
                        </View>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginView: {
        marginTop: 10,
        backgroundColor: 'transparent',
        width: 250,
        height: SCREEN_HEIGHT,
    },
    loginTitle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    travelText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'bold',
    },
    plusText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'regular',
    },
    loginInput: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    footerView: {
        marginTop: 20,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});