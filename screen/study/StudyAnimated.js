import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';

export default class StudyAnimated extends Component {

    static navigationOptions = {
        title: 'StudyAnimated'
    }

    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.fadeAnim, {toValue: 1}).start();
    }


    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'center',
        }}>

            <Animated.View style={{opacity: this.state.fadeAnim}}>

            </Animated.View>

        </View>)
    }

}
