package com.awesomeproject.module;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by zhangyadong on 2018/4/8.
 */

public class AppModule extends ReactContextBaseJavaModule {

    private static final String MODULE_NAME = "AppModule";
    private ReactContext mContext;

    public AppModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }


    /**
     * RN调用Native的方法
     *
     * @param phone
     */
    @ReactMethod
    public void rnCallNative(String phone) {

        // 跳转到打电话界面
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_CALL);
        intent.setData(Uri.parse("tel:" + phone));
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK); // 跳转需要添加flag, 否则报错
        mContext.startActivity(intent);
    }

    public void nativeCallRn(String msg) {
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("nativeCallRn", msg);
    }


    @ReactMethod
    public void sendMeesageToRn() {
        nativeCallRn("我是来自Native消息---CallJs");
    }


    @ReactMethod
    public void rnCallNativeFromCallBack(String msg, Callback callback) {
        callback.invoke(msg + "我是来自Native消息---CallBack");
    }


    @ReactMethod
    public void rnCallNativeFromPromise(String msg, Promise promise) {
        promise.resolve(msg + "我是来自Native消息---Promise");
    }

}
