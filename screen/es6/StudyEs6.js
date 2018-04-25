import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const value = 'zhangyadong';

export default class StudyEs6 extends Component {

    render() {
        //str.charAt
        console.log('xxxxxxx', value + "charAt-----" + value.charAt(2))

        //for .. of ..
        // for (let codePoint of 'sfsdfad') {
        //     console.log(codePoint);
        // }

        console.log('startsWith-----',value.startsWith('zhang')) //startsWith
        console.log('endsWith-----',value.endsWith('zhang'))//endsWith
        console.log('includes-----',value.includes('zhangsdfd'))//includes

        const page = []
        for (let i = 0; i < 10; i++) {
            var styleValue = styles.textStyle;
            if (i % 2 == 1) {
                styleValue = styles.textStyle1;
            }
            page.push(<Text style={styleValue} key={i}>这是{i}个界面</Text>)
        }

        return (<View style={styles.content}>
            {page}
        </View>)
    }

}

var styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'red'
    },
    textStyle1: {
        fontSize: 20,
        color: 'blue'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
