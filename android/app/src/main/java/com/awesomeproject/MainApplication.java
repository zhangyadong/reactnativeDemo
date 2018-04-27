package com.awesomeproject;

import android.app.Application;
import android.util.Log;
import android.widget.Toast;

import com.awesomeproject.component.AppPackage;
import com.awesomeproject.utils.ChannelUtil;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.meituan.android.walle.WalleChannelReader;
import com.microsoft.codepush.react.CodePush;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
//            String deploymentKey = BuildConfig.DEBUG ? "1k7gez329bE3ctfAKcSBSWjguslo4ksvOXqog" : "vpja1T2KqUg1h4InC0FzgM00VQ9d4ksvOXqog";
            String deploymentKey = BuildConfig.DEBUG ? "ecrUGYCdxIrflNuVbxiKCkrCzHao4ksvOXqog" : "nfgh7Enh35AvsROGjM5caXx4hUm84ksvOXqog";

//            String serverUrl="http://192.168.200.245:3000";
            String serverUrl = "http://codepush.phi-go.com";

            Log.i("xxxxxxxxxxxxxx", deploymentKey);
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new SplashScreenReactPackage(),
                    new CodePush(deploymentKey, MainApplication.this, BuildConfig.DEBUG, serverUrl),
                    new AppPackage()
            );
        }

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }

    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);

        String channel = ChannelUtil.getChannel(this);
        Toast.makeText(this, String.format("渠道名称为:%s", channel), Toast.LENGTH_LONG).show();
    }

}
