import React, {Component} from 'react';
import {Text, View, Platform, StyleSheet, Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import pxToDp from "../pxToDp";

let name = 'CustomSwiperComponent';
var Dimensions = require('Dimensions');
export default class CustomSwiperComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        console.log(name, 'componentWillMount');
    }

    componentWillUnmount() {
        console.log(name, 'componentWillUnmount');
        this.timer && clearTimeout(this.timer);
    }

    componentDidMount() {
        console.log(name, 'componentDidMount');
        setTimeout(() => {
            this.timer = this.setState({
                data: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=214132984,1434336132&fm=27&gp=0.jpg',
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340228536,58319053&fm=27&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=214132984,1434336132&fm=27&gp=0.jpg']
            })
        }, 3000);
    }


    _renderList(list) {
        return list.map(item => this._renderItem(item));
    }

    _renderItem(item) {
        return (
            <Text style={{backgroundColor: 'blue'}}>sdfsdf</Text>
        );
    }


    render() {
        return (
            <ScrollView style={{flex: 1}}>

                <Swiper
                    style={styles.wrapper}
                    horizontal={true}
                    showsButtons={false}
                    autoplay={true}>
                    <Image resizeMode='contain' source={require('../../res/bbbbbb.png')} style={styles.img}/>
                    <Image resizeMode='contain' source={require('../../res/bbbbbb.png')} style={styles.img}/>
                    <Image resizeMode='contain' source={require('../../res/bbbbbb.png')} style={styles.img}/>
                </Swiper>
            </ScrollView>
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
        width:Dimensions.get('window').width,
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
    },img:{
        width:Dimensions.get('window').width,
    }

});
