import React, {PureComponent} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var itemWidth = ScreenWidth / 2 - 10;
var itemHeight = itemWidth * 1.3;

export default class HomeGoodsItemCommponents extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }


    render() {
        return (<View style={{marginLeft: 5, marginRight: 5, marginTop: 5}}>
            <Image style={styles.wrapper}
                   source={{uri: this.state.data.url == null || this.state.data.url.length == 0 ? "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3728719661,2416398292&fm=27&gp=0.jpg" : this.state.data.url[0]}}/>
            <View style={{flexDirection: 'row'}}>
                <Text style={{flex: 1}}>{this.state.data.name}</Text>
                <Text style={{color: 'red', fontSize: 12}}>￥{this.state.data.price}</Text>
            </View>
        </View>)
    }

}


const styles = StyleSheet.create({
    wrapper: {
        width: itemWidth,
        height: itemHeight
    }
})
