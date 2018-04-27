import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

let value = 'zhangyadong';

export default class TestFlex extends Component {

    studyLet() {
        var b = 9;
        console.log(value)
    }

    // vsoi(){
    //    return(<Drawer
    //         side="right" //抽屉方向 top／left／right／bottom
    //         open={false}//默认是否打开抽屉
    //         tapToClose={true}//点击内容处 会关闭抽屉
    //         type='overlay' //抽屉出现的方式：overlay：抽屉覆盖内容 static:抽屉一只在内容后面 打开的时内容会滑动，displace：不会覆盖的 进出
    //         openDrawerOffset={0.2} // 抽屉占整个屏幕的百分比（1-0.6=0.4）
    //         closedDrawerOffset={0}//关闭抽屉后 抽屉在屏幕中的显示比例
    //         styles={drawerStyles}//抽屉样式，背景色 透明度，阴影啥的
    //         ref={(ref) => this._drawer = ref}
    //         tweenHandler={(ratio) => ({main: {opacity: (2 - ratio) / 2}})}
    //         content={<HomeRightGoodsSearch closeControlPanel={this.closeControlPanel.bind(this)}/>}
    //     >
    //
    //         <View style={{flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>
    //
    //             <Text onPress={() => {
    //                 this.openControlPanel()
    //             }} style={{fontSize: 30,}}>打开抽屉</Text>
    //
    //             <Text onPress={() => {
    //                 this.props.navigation.navigate('GoodsSearchScreen')
    //             }}>商品筛选</Text>
    //
    //             <View style={{flexDirection: 'column'}}>
    //
    //                 <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
    //                           caption="你好xxxxx" onPress={() => {
    //                     // AppModule.sendMeesageToRn();
    //                 }}>F8Button</F8Button>
    //                 <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
    //                           caption="大家好啊!" onPress={() => {
    //                     // AppModule.rnCallNativeFromCallBack('来呀！快乐啊！', (result) => {
    //                     //     alert(result)
    //                     //     console.log('xxx', result);
    //                     // })
    //                 }}/>
    //                 <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
    //                           caption="Promise" onPress={() => {
    //                     // AppModule.rnCallNativeFromPromise('来呀！快乐啊！').then((result) => {
    //                     //     alert(result)
    //                     // }).catch((error) => {
    //                     //     alert(error)
    //                     // })
    //                 }}/>
    //
    //                 <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
    //                           caption="跳转学习ReactNative" onPress={() => {
    //                     this.props.navigation.navigate('StudyReactNative')
    //                 }}/>
    //
    //                 <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
    //                           caption="跳转学习LayoutAnimation" onPress={() => {
    //                     this.props.navigation.navigate('StudyLayoutAnimation')
    //                 }}/>
    //
    //                 <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
    //                           caption="学习navigation" onPress={() => {
    //                     this.props.navigation.navigate('StudyLayoutAnimation')
    //                 }}/>
    //
    //             </View>
    //             <Text style={{fontSize: 40, color: 'red'}}>9cccccccccccccccc</Text>
    //
    //             <TouchableHighlight onPress={() => {
    //                 this.props.navigation.navigate('StudyEs6')
    //             }}>
    //                 <Image
    //                     source={{uri: 'http://c.hiphotos.baidu.com/image/pic/item/fc1f4134970a304e9fcf65dfddc8a786c9175c22.jpg'}}
    //                     style={{width: 100, height: 100}}></Image>
    //             </TouchableHighlight>
    //             <TouchableHighlight onPress={() => {
    //                 this.props.navigation.navigate('StudyNavigation')
    //             }}>
    //                 <Image
    //                     source={require('../../res/aaaa.png')}
    //                     style={{width: 100, height: 100}}></Image>
    //             </TouchableHighlight>
    //             <Image
    //                 source={require('../../res/bbbbbb.png')}
    //                 style={{width: 100, height: 100}}></Image>
    //
    //         </View>
    //     </Drawer>)
    // }

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'red'
        }}>

            <View style={{width:234,height:234, marginTop: 30,backgroundColor:'blue'}}/>
            <View style={{width:234,height:234, marginTop: 30,backgroundColor:'black'}}/>
            <Image source={require('../res/back.png')} style={{width: 20, height: 20}}/>
        </View>)
    }

}
