import React, {Component} from 'react';
import {Text, View, Platform, StyleSheet, Image} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import pxToDp from "../pxToDp";
import TestA from "./test/TestA";
import TestB from "./test/TestB";

var Dimensions = require('Dimensions');

let name = 'CustomSwiperComponent';
export default class CustomScrollableTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            position: 0,
            data: [{
                "name": "Google",
                "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
            },
                {
                    "name": "苹果",
                    "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
                },
                {
                    "name": "阿里巴巴",
                    "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
                },
                {
                    "name": "腾讯",
                    "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
                },
                {
                    "name": "京东",
                    "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
                },
                {
                    "name": "百度",
                    "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
                },
                {
                    "name": "张亚东",
                    "content": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5975ff04f41986185e47e9847aec2e69/7acb0a46f21fbe09810db97167600c338744ad00.jpg"
                }]
        }
    }

    render() {
        return (<ScrollableTabView
                style={{height: 0.5, backgroundColor: '#ffffff'}}
                tabBarPosition='top'
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarActiveTextColor='#E67F11'
                tabBarInactiveTextColor='#333'
                tabBarTextStyle={{
                    fontSize: pxToDp(30), fontFamily: 'PingFangSC-Light',
                    fontWeight: '300'
                }}
                tabBarUnderlineStyle={{backgroundColor: '#E67F11', height: 0}}
                onChangeTab={(obj) => {
                    this.setState({
                        position: obj.i
                    })
                }}>

                {this.state.data.length > 0 && this.state.data.map((item, index) => {
                    if (index % 2 == 0) {
                        return (<TestA tabLabel={item.name} key={index} info={index + 1}/>)
                    } else {
                        return (<TestB tabLabel={item.name} key={index} info={index + 1} content={item.content}/>)
                    }

                })}

            </ScrollableTabView>
        )
    }


}

const styles = StyleSheet.create({

    wrapper: {height: 300},
    slide1: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        width: Dimensions.get('window').width,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }, img: {
        width: Dimensions.get('window').width,
    }

});
