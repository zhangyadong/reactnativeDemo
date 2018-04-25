import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import StudyScrollView from "./StudyScrollView";


export default class StudyReactNative extends Component {

    static navigationOptions = {
        title:'React Native 学习目录'
    }

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <TouchableHighlight underlayColor={'transparent'} onPress={() => {
                this.props.navigation.navigate('StudyScrollView')
            }}>
                <Text style={{fontSize: 20}}>进入ScrollView</Text>
            </TouchableHighlight>
        </View>)
    }

}
