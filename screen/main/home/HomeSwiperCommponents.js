import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class HomeSwiperCommponents extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (<Swiper style={styles.wrapper}
                        horizontal={true}
                        showsButtons={false}
                        autoplay={true}>
            <Image
                source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1450603118,289237975&fm=27&gp=0.jpg'}}
                style={{flex: 1}}/>
            <Image
                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524716492018&di=6d737c919257c1c814bed9b521e57940&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012c1a57973a2d0000018c1be6f07f.jpg'}}
                style={{flex: 1}}/>
            <Image
                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524716492018&di=8b129b3725a17ab75651e30eacb9b9e0&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01420b5722af116ac725381249e7af.jpg'}}
                style={{flex: 1}}/>
            <Image
                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524716492017&di=537d74d95193627ac98e7aa4c80ace89&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a61458cf688ca801219c77efff99.jpg'}}
                style={{flex: 1}}/>
        </Swiper>)
    }

}


const styles = StyleSheet.create({
    wrapper: {
        height: ScreenHeight / 4,
        width: ScreenWidth
    }
})
