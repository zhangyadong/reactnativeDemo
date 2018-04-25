import React, {Component} from 'react';
import {Text, View, NativeModules, TouchableOpacity, LayoutAnimation} from 'react-native';


const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


export default class StudyLayoutAnimation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            w: 100,
            h: 100
        }
    }

    _onpress = () => {
        LayoutAnimation.spring();
            this.setState({
                w: this.state.w + 15,
                h: this.state.h + 15
            })
    }


    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center'
        }}>
            <TouchableOpacity onPress={this._onpress}>
            <View style={{width: this.state.w, height: this.state.h, backgroundColor: 'red'}}/>
            </TouchableOpacity>

        </View>)
    }

}
