import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';
import CustomNavigationBar from "../../components/CustomNavigationBar";

let name = 'BNavigation';
export default class BNavigation extends Component {

    static navigationOptions = {
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
                <CustomNavigationBar title={'B界面'} navigation={this.props.navigation} />
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                        this.props.navigation.navigate('ANavigation')
                    }}>跳入A界面</Text>

                    <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                        this.props.navigation.popToTop()//把它叫回到堆栈顶部的路径，排除所有其他屏幕。
                    }}>返回主界面(popToTop:把它叫回到堆栈顶部的路径，排除所有其他屏幕。)</Text>

                </View>
            </View>)
    }

}
