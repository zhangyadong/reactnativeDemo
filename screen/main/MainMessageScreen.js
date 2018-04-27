import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';


export default class MainMessageScreen extends Component {

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
