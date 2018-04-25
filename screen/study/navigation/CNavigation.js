import React, {Component} from 'react';
import {Text, View} from 'react-native';

let name = 'CNavigation'
export default class CNavigation extends Component {

    static navigationOptions = {
        title: name
    }

    componentWillMount() {
        console.log(name, 'componentWillMount');
    }

    componentWillUnmount() {
        console.log(name, 'componentWillUnmount');
    }

    componentDidMount() {
        console.log(name, 'componentDidMount');
    }


    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                this.props.navigation.navigate('DNavigation')
            }}>跳入D界面</Text>

            <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                this.props.navigation.replace('DNavigation')
            }}>DNavigation替换当前界面</Text>


        </View>)
    }

}
