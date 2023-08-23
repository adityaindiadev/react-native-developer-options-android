import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR = `The package 'react-native-developer-options-android' doesn't seem to be linked. Make sure: if automatic linking not working then try manual linking`;

const DeveloperOptionsAndroid = NativeModules.DeveloperOptionsAndroid
  ? NativeModules.DeveloperOptionsAndroid
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

function ifIOS(handleResult: CallableFunction) {
  handleResult(false);
}

export async function isDeveloperOptionsEnabled(
  handleResult: CallableFunction
) {
  if (Platform.OS === 'android') {
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
