"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDeveloperOptionsEnabled = isDeveloperOptionsEnabled;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-developer-options-android' doesn't seem to be linked. Make sure: if automatic linking not working then try manual linking`;
const DeveloperOptionsAndroid = _reactNative.NativeModules.DeveloperOptionsAndroid ? _reactNative.NativeModules.DeveloperOptionsAndroid : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function ifIOS(handleResult) {
  handleResult(false);
}
async function isDeveloperOptionsEnabled(handleResult) {
  if (_reactNative.Platform.OS === 'android') {
    try {
      await DeveloperOptionsAndroid.isDeveloperOptionsEnabled(handleResult);
    } catch (error) {
      console.error(error);
      handleResult(false);
    }
  } else {
    ifIOS(handleResult);
  }
}
//# sourceMappingURL=index.js.map