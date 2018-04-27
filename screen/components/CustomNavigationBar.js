import React, {Component} from 'react';
import {Text, View, Platform, StyleSheet, Image, TouchableOpacity} from 'react-native';

var Dimensions = require('Dimensions');
export default class CustomNavigationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            rightTextArray: props.rightTextArray,
            navigation: props.navigation,
            isShowBack: props.isShowBack
        }
    }

    _isShowRightOne(rightTexts) {
        if (rightTexts == null || rightTexts.length == 0) {
            return null;
        }

        return (<TouchableOpacity onPress={() => {
            this.props.rightOneClick()
        }}><Text style={styles.rightTextOne}>{rightTexts[0]}</Text></TouchableOpacity>)
    }

    _isShowRightTwo(rightTexts) {
        if (rightTexts == null || rightTexts.length < 2) {
            return null;
        }

        return (<TouchableOpacity onPress={() => {
            this.props.rightTwoClick()
        }}><Text style={styles.rightTextTwo}>{rightTexts[1]}</Text></TouchableOpacity>)
    }

    _isShowBack() {
        if (this.state.isShowBack != null && !this.state.isShowBack) {
            return null;
        } else {
            return (<TouchableOpacity style={styles.leftText} onPress={() => {
                this.state.navigation.goBack()
            }}>
                <Image source={require('../../res/back.png')} style={styles.leftImage}/>
            </TouchableOpacity>)
        }
    }

    render() {
        return (
            <View>
                <View style={styles.navigationLayout}>
                    {this._isShowBack()}

                    <Text style={styles.contentText}>{this.state.title}</Text>

                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                        {this._isShowRightOne(this.state.rightTextArray)}
                        {this._isShowRightTwo(this.state.rightTextArray)}
                    </View>

                </View>
                <View style={{width: Dimensions.get('window').width, height: 0.5, backgroundColor: '#999999'}}/>
            </View>)
    }

}


const styles = StyleSheet.create({
    navigationLayout: {
        width: Dimensions.get('window').width,
        height: 48,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS == 'ios' ? 20 : 0
    },
    leftText: {
        paddingLeft: 15,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    leftImage: {
        width: 20,
        height: 20
    },
    contentText: {
        fontSize: 17,
        color: 'black',
        position: 'absolute',
        fontWeight: 'bold',
        zIndex: 2
    },
    rightTextOne: {
        fontSize: 16,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    rightTextTwo: {
        fontSize: 16,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10
    }
})


