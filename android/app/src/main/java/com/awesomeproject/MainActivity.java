package com.awesomeproject;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;

import org.devio.rn.splashscreen.SplashScreen;

import okhttp3.OkHttpClient;

public class MainActivity extends ReactActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this); // 2. 显示启动方法
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

}
