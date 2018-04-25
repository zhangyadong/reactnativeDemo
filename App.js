/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import GoodsSearchScreen from "./screen/GoodsSearchScreen";
import TestFlex from "./screen/TestFlex";
import StudyReactNative from "./screen/study/StudyReactNative";
import StudyScrollView from "./screen/study/StudyScrollView";
import StudyEs6 from "./screen/es6/StudyEs6";
import StudyLayoutAnimation from "./screen/study/StudyLayoutAnimation";
import StudyNavigation from "./screen/study/navigation/StudyNavigation";
import ANavigation from "./screen/study/navigation/ANavigation";
import BNavigation from "./screen/study/navigation/BNavigation";
import CNavigation from "./screen/study/navigation/CNavigation";
import DNavigation from "./screen/study/navigation/DNavigation";

const Navigator = StackNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        GoodsSearchScreen: {screen: GoodsSearchScreen},
        TestFlex: {screen: TestFlex},
        StudyReactNative: {screen: StudyReactNative},
        StudyScrollView: {screen: StudyScrollView},
        StudyEs6: {screen: StudyEs6},
        StudyLayoutAnimation: {screen: StudyLayoutAnimation},
        StudyNavigation: {screen: StudyNavigation},
        ANavigation: {screen: ANavigation},
        BNavigation: {screen: BNavigation},
        CNavigation: {screen: CNavigation},
        DNavigation: {screen: DNavigation}
    }, {
        initialRouteName: 'HomeScreen'
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
        },

        mode: 'card',
    });


export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            name: 'zhangyadong'
        }
    }

    render() {
        return (
            <Navigator></Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
