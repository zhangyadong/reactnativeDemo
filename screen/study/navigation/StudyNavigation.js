import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CustomNavigationBar from "../../components/CustomNavigationBar";

var Dimensions = require('Dimensions');
let name = 'StudyNavigation';
export default class StudyNavigation extends Component {

    static navigationOptions = {
        title: name,
        header: null
    }

    constructor(props) {
        super(props)
    }

    rightOneClick() {
    }

    rightTwoClick(){
    }

    render() {
        return (<View style={{flex: 1}}>

            <CustomNavigationBar title={'学习navigation'}
                                 navigation={this.props.navigation}
                                 rightTextArray={['设置', '添加']}
                                 rightOneClick={this.rightOneClick}
                                 rightTwoClick={this.rightTwoClick}/>

            <View style={{
                flex: 1,
                width: Dimensions.get('window').width,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Text style={{fontSize: 20, color: 'red'}} onPress={() => {
                    this.props.navigation.navigate('ANavigation')
                }}>跳入A界面</Text>

                <Text style={{fontSize: 20, color: 'red', margin: 20}} onPress={() => {
                    this.props.navigation.navigate('BNavigation')
                }}>跳入B界面</Text>

                <Text style={{fontSize: 20, color: 'red', margin: 20}} onPress={() => {
                    this.props.navigation.navigate('CNavigation')
                }}>跳入C界面</Text>

            </View>

        </View>)
    }

}
