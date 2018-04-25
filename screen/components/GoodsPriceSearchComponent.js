import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

export default class GoodsPriceSearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSortPrice: false,
            minimumPrice: '',
            highestPrice: ''
        }
    }


    render() {

        var colorValue = this.state.isSortPrice ? '#181818' : '#E67F11';
        var colorValue1 = this.state.isSortPrice ? '#E67F11' : '#181818';

        return (
            <View style={styles.container}>

                <View style={styles.childContainer}>

                    <Text style={styles.textItem}>筛选</Text>

                    <TextInput style={[styles.inputItem, {marginRight: 6, color: '#E67F11'}]}
                               underlineColorAndroid='transparent' textAlignVertical={'center'}
                               keyboardType='numeric' maxLength={8} textAlign={'center'}
                               placeholder='最低价' value={this.state.minimumPrice}
                               onChangeText={(text) => this.setState({minimumPrice: text})}/>

                    <Text style={{backgroundColor: '#181818', width: 12, height: 0.5}}></Text>

                    <TextInput style={[styles.inputItem, {marginLeft: 6, color: '#E67F11'}]}
                               underlineColorAndroid='transparent' textAlignVertical={'center'}
                               keyboardType='numeric' maxLength={8} textAlign={'center'}
                               placeholder='最高价' value={this.state.highestPrice}
                               onChangeText={(text) => this.setState({highestPrice: text})}/>

                </View>

                <View style={[styles.childContainer, {marginTop: 30}]}>
                    <Text style={styles.textItem}>排序</Text>

                    <TouchableOpacity
                        style={[styles.sortItem, {borderColor: colorValue}]} onPress={() => {
                        if (!this.state.isSortPrice) {
                            return
                        }
                        this.setState({
                            isSortPrice: false
                        })
                        //这个值怎么传给父组件
                        //用传过来的changePrice属性(props)，是个函数，呼叫它把price交给父组件中的函数去处理
                        this.props.priceCallBack(this.state.isSortPrice)
                    }}>
                        <Text style={{color: colorValue}}>从低到高</Text>
                        <Image style={styles.image}
                               source={this.state.isSortPrice ? require('../../res/up2.png') : require('../../res/up1.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.sortItem, {borderColor: colorValue1}]} onPress={() => {
                        if (this.state.isSortPrice) {
                            return
                        }
                        this.setState({
                            isSortPrice: true
                        })
                        this.props.priceCallBack(this.state.isSortPrice)
                    }}>
                        <Text style={{color: colorValue1}}>从高到低</Text>
                        <Image style={styles.image}
                               source={this.state.isSortPrice ? require('../../res/down2.png') : require('../../res/down1.png')}></Image>
                    </TouchableOpacity>

                </View>

                <View style={[styles.splitLine, {marginTop: 25}]}/>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            this.setState({
                                minimumPrice: '',
                                highestPrice: ''
                            })
                        }}>
                        <Text textAlign={'center'} style={{fontSize: 16}}>清空</Text>
                    </TouchableOpacity>

                    <Text style={{height: 50, width: 0.5, backgroundColor: '#999999'}}/>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            this.props.submit();
                        }}>
                        <Text textAlign={'center'} style={{fontSize: 16, color: '#E67F11'}}>确定</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.splitLine}/>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: '#ffffff'
    },
    childContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    containerTab: {
        flex: 1,
        height: 50
    },
    containerButton: {
        height: 50,
        flexDirection: 'row'
    },
    viewItem: {
        flex: 1,
        height: 50,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textItem: {
        color: '#181818',
        fontSize: 16,
        marginRight: 18,
    },
    inputItem: {
        width: 105,
        borderWidth: 0.5,
        borderColor: '#181818',
        paddingTop: 3,
        paddingBottom: 3
    },
    sortItem: {
        width: 105,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        flexDirection: 'row'
    },
    image: {
        width: 8,
        height: 5,
        marginLeft: 2
    },
    splitLine: {
        height: 0.5,
        backgroundColor: '#999999'
    },
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
