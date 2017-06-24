
ionic升级后，mac上ionic cordova build android,报错，“Error: spawn EACCES”，

chmod 777 /Applications/Android\ Studio\ 3.0\ Preview.app/Contents/gradle/gradle-4.0-milestone-1/bin/gradle

ionic cordova run ios,报错undefined replace，可以这样解决
cd platforms/ios/cordova,然后更新npm install ios-sim@latest

参考 
https://stackoverflow.com/questions/44281422/error-spawn-eacces-showing-on-cordova-build-android-project
