import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

let name = 'TestB';
export default class TestB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: this.props.info,
            content: this.props.content
        }
    }

    componentWillMount() {
        console.log(name + this.state.info, 'componentWillMount');
    }

    componentWillUnmount() {
        console.log(name + this.state.info, 'componentWillUnmount');
    }

    componentDidMount() {
        console.log(name + this.state.info, 'componentDidMount');
    }


    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image source={require('../../../res/ccc.png')} style={{flex:1}}/>
        </View>)
    }

}
