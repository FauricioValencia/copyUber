import React, { Component } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth
} from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';

// importacion de componentes
import Input from "../../Components/Input/";
import Boton from '../../Components/Button/';
export default class Registry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastName: '',
            tel: '',
            direction: '',
            id: '',
            email: '',
            pass: ''
        }
    }
    handleSubmit = () => {
        // let { name, lastName, tel, direction, id, email, pass } = this.state
        // console.warn('Registrando')

        // if (name && lastName && tel && direction && id && email && pass) {

        //     Helpers.handleSubmitRegistry(this.state);
        // } else {
        //     ToastAndroid.showWithGravityAndOffset(
        //         'debes llenar todos los campos',
        //         ToastAndroid.LONG,
        //         ToastAndroid.BOTTOM,
        //         25,
        //         50
        //     );
        // }
        // console.log(this.state)
        Actions.login();
    }

    handleInputChange = input => (ev) => {

        this.setState({
            [input]: ev
        })
    }

    render() {
        //   let {user,pass}=this.state;
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.containerForm}>
                        <Input
                            tipo="Nombre"
                            value={this.state.name}
                            handleChange={this.handleInputChange('name')}
                            icon="user"

                        />

                        <Input
                            tipo="Apellido"
                            value={this.state.lastName}
                            handleChange={this.handleInputChange('lastName')}
                            icon="user"

                        />


                        <Input
                            tipo="Telefono"
                            value={this.state.tel}
                            handleChange={this.handleInputChange('tel')}
                            typeKeyBoard="numeric"
                            icon="mobile"

                        />

                        <Input
                            tipo="Direccion"
                            value={this.state.direction}
                            handleChange={this.handleInputChange('direction')}
                            icon="home"

                        />

                        <Input
                            tipo="Identificacion"
                            value={this.state.id}
                            handleChange={this.handleInputChange('id')}
                            typeKeyBoard="numeric"
                            icon="id-card"

                        />

                        <Input
                            tipo="Correo"
                            value={this.state.email}
                            handleChange={this.handleInputChange('email')}
                            typeKeyBoard="email-address"
                            icon="envelope"


                        />

                        <Input
                            tipo="Contraseña"
                            value={this.state.pass}
                            handleChange={this.handleInputChange('pass')}
                            secureText={true}          
                            icon="key"

                        />

                        <Boton
                            handleSubmit={this.handleSubmit}
                        >Registrar</Boton>
                    </View>
                </View>
            </KeyboardAwareScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerForm: {
        height: responsiveHeight(80),
        width: responsiveWidth(90),
        backgroundColor: '#F5FCFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    inputContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    }

});