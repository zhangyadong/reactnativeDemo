import React, {Component} from 'react';
import {Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import MainHomeScreen from "./MainHomeScreen";
import MainMineScreen from "./MainMineScreen";
import MainFindScreen from "./MainFindScreen";
import MainMessageScreen from "./MainMessageScreen";

export default MainTabNavigator = TabNavigator({
    MainHomeScreen: {
        screen: MainHomeScreen,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/tab_icon1.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>)
        }
    },
    MainFindScreen: {
        screen: MainFindScreen,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/tab_icon2.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>)
        }
    },
    MainMessageScreen: {
        screen: MainMessageScreen,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/tab_icon3.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>)
        }
    },
    MainMineScreen: {
        screen: MainMineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/tab_icon4.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>)
        }
    }
},{
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否允许在标签之间进行滑动
    swipeEnabled: false,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 48,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 3,
        }
    },
})
