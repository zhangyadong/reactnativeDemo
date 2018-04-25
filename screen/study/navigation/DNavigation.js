import React, {Component} from 'react';
import {Button, View} from 'react-native';
import StudyNavigation from "./StudyNavigation";

let name = 'DNavigation'
export default class DNavigation extends Component {

    static navigationOptions = {
        title: name
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
        const {goBack} = this.props.navigation;

        this.props.navigation.addListener('willFocus', payload => {
            console.log(name, '订阅导航生命周期更新----willFocus---------' + payload)
        });

        this.props.navigation.addListener('didBlur', payload => {
            console.log(name, '订阅导航生命周期更新----didBlur---------' + payload)
        });

        this.props.navigation.addListener('willBlur', payload => {
            console.log(name, '订阅导航生命周期更新----willBlur---------' + payload)
        });

        this.props.navigation.addListener('didFocus', payload => {
            console.log(name, '订阅导航生命周期更新----didFocus---------' + payload)
        });


        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Button style={{fontSize: 20, color: 'red'}} onPress={() => {
                console.log(name, "StudyNavigation------Button")
                goBack()
            }} title="跳转主页面"/>

            <Button style={{fontSize: 20, color: 'red'}} onPress={() => {
                console.log(name, "StudyNavigation------Button")
                goBack()
            }} title="跳转C页面"/>

            {/*<Button style={{fontSize: 20, color: 'red'}} onPress={() => {*/}
            {/*// this.props.navigation.replace('B')*/}
            {/*}}></Button>*/}


        </View>)
    }

}
