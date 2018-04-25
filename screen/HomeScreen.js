import React from 'react';
import {Text, View, Image, NativeModules, NativeEventEmitter, TouchableHighlight} from 'react-native';
import Drawer from 'react-native-drawer';
import HomeRightGoodsSearch from './HomeRightGoodsSearch'
import F8Button from './components/common/F8Button'
// import CodePush from "react-native-code-push";
import StudyLayoutAnimation from "./study/StudyLayoutAnimation";

// let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};
// var AppModule = NativeModules.AppModule;
// const AppModuleEventEmitter = new NativeEventEmitter(AppModule);

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: ''
        }
    }

    //如果有更新的提示
    syncImmediate() {
        // CodePush.sync({
        //         //安装模式
        //         //ON_NEXT_RESUME 下次恢复到前台时
        //         //ON_NEXT_RESTART 下一次重启时
        //         //IMMEDIATE 马上更新
        //         installMode: CodePush.InstallMode.IMMEDIATE,
        //         //对话框
        //         updateDialog: {
        //             //是否显示更新描述
        //             appendReleaseDescription: true,
        //             //更新描述的前缀。 默认为"Description"
        //             descriptionPrefix: "更新内容：",
        //             //强制更新按钮文字，默认为continue
        //             mandatoryContinueButtonLabel: "立即更新",
        //             //强制更新时的信息. 默认为"An update is available that must be installed."
        //             mandatoryUpdateMessage: "必须更新后才能使用",
        //             //非强制更新时，按钮文字,默认为"ignore"
        //             optionalIgnoreButtonLabel: '稍后',
        //             //非强制更新时，确认按钮文字. 默认为"Install"
        //             optionalInstallButtonLabel: '后台更新',
        //             //非强制更新时，检查到更新的消息文本
        //             optionalUpdateMessage: '有新版本了，是否更新？',
        //             //Alert窗口的标题
        //             title: '更新提示'
        //         },
        //     },
        // );
    }

    componentWillMount() {
        // CodePush.disallowRestart();//页禁止重启
        // this.syncImmediate(); //开始检查更新
        // this.listener = AppModuleEventEmitter.addListener("nativeCallRn", this.jsCallNative.bind(this))
    }

    componentDidMount() {
        // CodePush.allowRestart();//在加载完了，允许重启
    }

    componentWillUnmount() {
        // this.listener && this.listener.remove(); //记得remove哦
        // this.listener = null;
    }

    jsCallNative(msg) {
        alert(msg)
    }


    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Drawer
                side="right" //抽屉方向 top／left／right／bottom
                open={false}//默认是否打开抽屉
                tapToClose={true}//点击内容处 会关闭抽屉
                type='overlay' //抽屉出现的方式：overlay：抽屉覆盖内容 static:抽屉一只在内容后面 打开的时内容会滑动，displace：不会覆盖的 进出
                openDrawerOffset={0.2} // 抽屉占整个屏幕的百分比（1-0.6=0.4）
                closedDrawerOffset={0}//关闭抽屉后 抽屉在屏幕中的显示比例
                styles={drawerStyles}//抽屉样式，背景色 透明度，阴影啥的
                ref={(ref) => this._drawer = ref}
                tweenHandler={(ratio) => ({main: {opacity: (2 - ratio) / 2}})}
                content={<HomeRightGoodsSearch closeControlPanel={this.closeControlPanel.bind(this)}/>}
            >

                <View style={{flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center'}}>

                    <Text onPress={() => {
                        this.openControlPanel()
                    }} style={{fontSize: 30,}}>打开抽屉</Text>

                    <Text onPress={() => {
                        this.props.navigation.navigate('GoodsSearchScreen')
                    }}>商品筛选</Text>

                    <View style={{flexDirection: 'column'}}>

                        <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
                                  caption="你好xxxxx" onPress={() => {
                            // AppModule.sendMeesageToRn();
                        }}>F8Button</F8Button>
                        <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
                                  caption="大家好啊!" onPress={() => {
                            // AppModule.rnCallNativeFromCallBack('来呀！快乐啊！', (result) => {
                            //     alert(result)
                            //     console.log('xxx', result);
                            // })
                        }}/>
                        <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
                                  caption="Promise" onPress={() => {
                            // AppModule.rnCallNativeFromPromise('来呀！快乐啊！').then((result) => {
                            //     alert(result)
                            // }).catch((error) => {
                            //     alert(error)
                            // })
                        }}/>

                        <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
                                  caption="跳转学习ReactNative" onPress={() => {
                            this.props.navigation.navigate('StudyReactNative')
                        }}/>

                        <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
                                  caption="跳转学习LayoutAnimation" onPress={() => {
                            this.props.navigation.navigate('StudyLayoutAnimation')
                        }}/>

                        <F8Button style={{width: 150, height: 30}} theme={'bordered-pink'}
                                  caption="学习navigation" onPress={() => {
                            this.props.navigation.navigate('StudyLayoutAnimation')
                        }}/>

                    </View>
                    <Text style={{fontSize: 40, color: 'red'}}>9cccccccccccccccc</Text>

                    <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate('StudyEs6')
                    }}>
                        <Image
                            source={{uri: 'http://c.hiphotos.baidu.com/image/pic/item/fc1f4134970a304e9fcf65dfddc8a786c9175c22.jpg'}}
                            style={{width: 100, height: 100}}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate('StudyNavigation')
                    }}>
                        <Image
                            source={require('../res/aaaa.png')}
                            style={{width: 100, height: 100}}></Image>
                    </TouchableHighlight>
                    <Image
                        source={require('../res/bbbbbb.png')}
                        style={{width: 100, height: 100}}></Image>

                </View>
            </Drawer>
        );
    }
}


const drawerStyles = {
    drawer: {flex: 1, backgroundColor: '#ffffff', shadowColor: '#000000', opacity: 1, shadowRadius: 3},
}

// HomeScreen = CodePush(codePushOptions)(HomeScreen);
