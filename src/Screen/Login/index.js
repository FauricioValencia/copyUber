import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, ActivityIndicator } from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


// importacion de componentes
import Input from "../../Components/Input/";
import Boton from "../../Components/Button/";
import Texto from "../../Components/Text/";
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'Julian@hotmail.com',
            pass: '123',
            isShow: false,
        }
    }

    handleInputChange = input => (ev) => {
        console.log(input)
        console.log(ev);
        this.setState({
            [input]: ev
        })
        console.log(this.state.user, this.state.pass)
    }

    handleSubmit = () => {
        Actions.mapa();
    }

    toRegistro = () => {
        try {
            console.warn('enviando a registro');
            Actions.registry();
        } catch (e) {
            console.log(e)
        }

    }


    render() {
        return (
            <KeyboardAwareScrollView>
                {this.state.isShow ? 
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="red" />
                    <Text>Consultando la base de datos</Text>
                </View> :

                    <View style={styles.container}>
                        <View style={styles.containerForm}>
                            <View style={styles.imageContainer}>
                                {/* imagen */}
                                {/* <Image
                                    source={require("../../Assets/logo.png")}
                                    style={{ width: 130, height: 130, risizeMode: 'contain' }}
                                /> */}
                            </View>
                            <View style={styles.inputContainer}>
                                {/* Usuario y Login */}
                                <Input
                                    handleChange={this.handleInputChange('user')}
                                    value={this.state.user}
                                    tipo="usuario"
                                    typeKeyBoard="email-address"
                                    icon="envelope"
                                />
                                <Input
                                    handleChange={this.handleInputChange('pass')}
                                    value={this.state.pass}
                                    tipo="contraseña"
                                    secureText={true}
                                    icon="key"
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Boton
                                    handleSubmit={this.handleSubmit}
                                >Login</Boton>
                                <Texto
                                    handleTextRegistro={this.toRegistro}
                                >No tienes cuenta, registrate</Texto>

                            </View>

                        </View>
                    </View>
                }
            </KeyboardAwareScrollView>

        );
    }
}
//https://github.com/edupooch/simple-crna-routing
const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerForm: {
        height: responsiveHeight(70),
        width: responsiveWidth(90),
        backgroundColor: '#F5FCFF',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});