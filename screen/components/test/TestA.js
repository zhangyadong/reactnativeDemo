import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';

let name = 'TestA';
export default class TestA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: this.props.info
    }
    }

    componentWillMount() {
        console.log(name+this.state.info, 'componentWillMount');
    }

    componentWillUnmount() {
        console.log(name+this.state.info, 'componentWillUnmount');
    }

    componentDidMount() {
        console.log(name+this.state.info, 'componentDidMount');
    }


    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>我是测试A{this.state.info}界面</Text>
        </View>)
    }

}
