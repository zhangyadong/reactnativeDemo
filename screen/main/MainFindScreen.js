import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import CustomNavigationBar from "../components/CustomNavigationBar";
import CustomScrollableTab from "../components/CustomScrollableTab";


export default class MainFindScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (<View style={{
            flex: 1
        }}>
            <CustomNavigationBar title={'发现'} isShowBack={false}/>
            <CustomScrollableTab/>
        </View>)
    }

}
