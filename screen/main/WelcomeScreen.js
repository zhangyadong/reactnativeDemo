import React, {Component} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            isJump: false,
            initTime: 5
        }
    }

    componentDidMount() {
        SplashScreen.hide();
        this.timer = setInterval(() => {
            var time = this.state.initTime - 1;
            if (this.state.initTime == 1) {
                this.props.navigation.replace('MainTabNavigator')
                return
            }
            this.setState({
                initTime: time
            })
        }, 1000)
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearInterval(this.timer);
    }

    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center'
        }}>
            <ImageBackground
                source={require('../../res/icon_welcome.png')}
                style={{width: ScreenWidth, height: ScreenHeight, flexDirection: 'row-reverse'}}>
                <Text style={{fontSize: 14, color: '#ffffff', padding: 15}} onPress={() => {
                    this.props.navigation.replace('MainTabNavigator')
                }}>点击跳转 {this.state.initTime}</Text>
            </ImageBackground>

        </View>)
    }

}
