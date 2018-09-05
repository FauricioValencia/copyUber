import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";

//import {Map as map} from 'immutable';


import Splash from "../../Screen/Splash/";
import Login from "../../Screen/Login/";
import Registry from "../../Screen/Registry/";
import App from "../../../App";

export default class Rutes extends React.Component {
    render() {

        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="splash"
                        component={Splash}
                        hideNavBar />
                    <Scene
                        key="login"
                        component={Login}
                        hideNavBar />
                    <Scene key="registry"
                        component={Registry}
                        title="Registro" />
                    <Scene key="mapa"
                        component={App}
                        hideNavBar />
                </Scene>
            </Router>
        );
    }
}