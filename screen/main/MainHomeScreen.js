import React from 'react';
import {NativeEventEmitter, NativeModules, FlatList, View} from 'react-native';
import CodePush from "react-native-code-push";
import NetWorkUtils from "../utils/NetWorkUtils";
import HomeSwiperCommponents from "./home/HomeSwiperCommponents";
import CustomNavigationBar from "../components/CustomNavigationBar";
import HomeGoodsItemCommponents from "./home/HomeGoodsItemCommponents";
import RefreshListView, {RefreshState} from "react-native-refresh-list-view";

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};
var AppModule = NativeModules.AppModule;
const AppModuleEventEmitter = new NativeEventEmitter(AppModule);

export default class MainHomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state: {
        dataList: Array<any>,
        refreshState: number,
        pageSize: number
    }

    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
            pageSize: 1
        }
    }

    //如果有更新的提示
    syncImmediate() {
        CodePush.sync({
                //安装模式
                //ON_NEXT_RESUME 下次恢复到前台时
                //ON_NEXT_RESTART 下一次重启时
                //IMMEDIATE 马上更新
                installMode: CodePush.InstallMode.IMMEDIATE,
                //对话框
                updateDialog: {
                    //是否显示更新描述
                    appendReleaseDescription: true,
                    //更新描述的前缀。 默认为"Description"
                    descriptionPrefix: "更新内容：",
                    //强制更新按钮文字，默认为continue
                    mandatoryContinueButtonLabel: "立即更新",
                    //强制更新时的信息. 默认为"An update is available that must be installed."
                    mandatoryUpdateMessage: "必须更新后才能使用",
                    //非强制更新时，按钮文字,默认为"ignore"
                    optionalIgnoreButtonLabel: '稍后',
                    //非强制更新时，确认按钮文字. 默认为"Install"
                    optionalInstallButtonLabel: '后台更新',
                    //非强制更新时，检查到更新的消息文本
                    optionalUpdateMessage: '有新版本了，是否更新？',
                    //Alert窗口的标题
                    title: '更新提示'
                },
            },
        );
    }

    componentWillMount() {
        CodePush.disallowRestart();//页禁止重启
        this.syncImmediate(); //开始检查更新
        // this.listener = AppModuleEventEmitter.addListener("nativeCallRn", this.jsCallNative.bind(this))
    }

    componentDidMount() {
        CodePush.allowRestart();//在加载完了，允许重启
        this._onHeaderRefresh()
    }

    componentWillUnmount() {
        // this.listener && this.listener.remove(); //记得remove哦
        // this.listener = null;
    }

    _onHeaderRefresh = () => {

        this.setState({refreshState: RefreshState.HeaderRefreshing})

        NetWorkUtils.fetchRequest('system/getHomeConfig', 'GET').then(res => {
            this.setState({
                dataList: res.goodsList,
                refreshState: res.goodsList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
                pageSize: 1
            })
        }).catch((error) => {
            console.error(error)
        })
    }

    _renderGoodsList = () => {
        if (this.state.dataList.length != 0) {
            return (<RefreshListView
                numColumns={2}
                ListHeaderComponent={this._renderHeader()}
                keyExtractor={this._keyExtractor}
                separator={this._separator}
                data={this.state.dataList}
                renderItem={(item, index) => this._renderItem(item, index)}

                refreshState={this.state.refreshState}
                onHeaderRefresh={this._onHeaderRefresh}
                onFooterRefresh={this._onFooterRefresh}

                // 可选
                footerRefreshingText='玩命加载中 >.<'
                footerFailureText='我擦嘞，居然失败了 =.=!'
                footerNoMoreDataText='-我是有底线的-'
                footerEmptyDataText='-好像什么东西都没有-'
            />)
        }
    }

    _separator = (item) => {
        return <View style={{width: 10, height: 10}}></View>
    }

    _renderItem = (item, index) => {
        return (<HomeGoodsItemCommponents data={item.item} key={index}/>)
    }

    _renderHeader = () => {
        return (<HomeSwiperCommponents/>)
    }

    _keyExtractor = (item: any, index: number) => {
        return index
    };//根据服务端实际修改key

    _onFooterRefresh = () => {
        // 上拉翻页
        this.setState({refreshState: RefreshState.FooterRefreshing, page: this.state.pageSize++})
        console.log("xxxxx", this.state.pageSize);

        NetWorkUtils.fetchRequest('goods/getGoodsList?size=10&page=' + this.state.pageSize, 'GET').then(res => {
            this.setState({
                dataList: this.state.dataList.concat(res),
                refreshState: res.length < 1 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        }).catch((error) => {
            console.error(error)
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <CustomNavigationBar title={'首页'} isShowBack={false}/>
                {this._renderGoodsList(this.state.dataList)}
            </View>
        )
    }
}


const drawerStyles = {
    drawer: {flex: 1, backgroundColor: '#ffffff', shadowColor: '#000000', opacity: 1, shadowRadius: 3},
}

MainHomeScreen = CodePush(codePushOptions)(MainHomeScreen);
