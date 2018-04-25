#!/usr/bin/python
import os

print("打包bundles文件夹")

os.system(
    "react-native bundle --platform android --entry-file index.js --bundle-output ./bundles/index.android.bundle --assets-dest ./bundles --dev false")

print("上传文件夹")

desscription = input("输入更新详情：")

os.system(
    "code-push release AwesomeProject-android ./bundles 1.0.0  --description '" + desscription + "' --mandatory false")
