import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';
import CustomNavigationBar from "../../components/CustomNavigationBar";

let name = 'ANavigation';
export default class ANavigation extends Component {

    static navigationOptions = {
        title: name,
        header: null
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
        return (
            <View style={{flex: 1}}>
                <CustomNavigationBar title={'A界面'} navigation={this.props.navigation}
                                     rightTextArray={['xxx']}/>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                        this.props.navigation.navigate('BNavigation')
                    }}>跳入B界面</Text>

                    <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                        this.props.navigation.pop(2)
                    }}>跳入主界面,pop(n) 将您带到堆栈中的前一个屏幕。如果您提供一个数字“n”，它将指定在堆栈中返回多少个屏幕。</Text>

                </View>
            </View>)
    }

}
