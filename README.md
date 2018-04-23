## React Native boilerplate

react-native init mobileapp
cd mobileapp
create directory android/app/src/main/java/in/ajaymore/mobileapp

```
android/app/src/main/java/com/reactNativeSampleApp/MainActivity.java
android/app/src/main/java/com/reactNativeSampleApp/MainApplication.java
android/app/src/main/AndroidManifest.xml
android/app/build.gradle
```

* react-native run-android
* change the ip adddress and port in dev settings eg. 192.168.0.102:8081
* downgrade babel-preset-react-native to 4.0.0
* upgrade buildToolsVersion to 27.0.3
* once it starts working install the following

```
sudo lsof -i :8081
sudo kill -9 pid
```

```
yarn add react-navigation react-native-typography formik yup lodash date-fns redux react-redux redux-persist redux-thunk

yarn add react-native-elements@1.0.0-beta4 react-native-vector-icons && react-native link react-native-vector-icons
```

* go to firebase project settings, add app and download google-services.json

```
# debug sha1
keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
# production sha1

keytool -genkey -v -keystore ~/keys/mobileapp/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias mobileapp

keytool -exportcert -list -v -alias mobileapp -keystore ~/keys/mobileapp/key.jks
```

* preparing for signing app

  * create file <app dir>/android/key.properties

  ```
  storePassword=
  keyPassword=
  keyAlias=mobileapp
  storeFile=/home/amore/keys/mobileapp/key.jks
  ```

  * [follow steps at](https://flutter.io/android-release/)
  * cd android && ./gradlew assembleRelease
  * update <app dir>/android/gradle.properties `android.enableAapt2=false`

* `yarn add react-native-firebase && react-native link react-native-firebase`
* [React-Native-Firebase Setup](https://rnfirebase.io/docs/v4.0.x/installation/android)

yarn add react-native-google-signin && react-native link react-native-google-signin

* Setting up firebase and google-sign-in
  * [google-sign-in](https://github.com/devfd/react-native-google-signin/blob/master/android-guide.md)
  * [firebase]()

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
