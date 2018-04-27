import React, {Component} from 'react';
import {Text, View} from 'react-native';


export default class MainMineScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Text> MainFind </Text>
        </View>)
    }

}
