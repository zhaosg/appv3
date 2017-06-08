#!/usr/bin/env bash
cp release-signing.properties ./platforms/android
ionic cordova build android --prod --release
