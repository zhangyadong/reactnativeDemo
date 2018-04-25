import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

let value = 'zhangyadong';

export default class TestFlex extends Component {

    studyLet() {
        var b = 9;
        console.log(value)
    }


    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'red'
        }}>

            <View style={{width:234,height:234, marginTop: 30,backgroundColor:'blue'}}/>
            <View style={{width:234,height:234, marginTop: 30,backgroundColor:'black'}}/>
            <Image source={require('../res/back.png')} style={{width: 20, height: 20}}/>
        </View>)
    }

}
