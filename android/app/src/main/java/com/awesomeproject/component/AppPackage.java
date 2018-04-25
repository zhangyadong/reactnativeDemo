package com.awesomeproject.component;

import com.awesomeproject.module.AppModule;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by zhangyadong on 2018/4/4.
 */

public class AppPackage implements ReactPackage {

    public AppModule mModule;
    private ArrayList<NativeModule> modules;

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        modules = new ArrayList<>();
        modules.add(new AppModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
