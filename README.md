# react-native-developer-options-android

Check if the Android device has the developer options enabled.

## Installation

```sh
npm install @adityaindiadev/react-native-developer-options-android
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { isDeveloperOptionsEnabled } from '@adityaindiadev/react-native-developer-options-android';

export default function App() {
  const [isDeveloperOptionsOn, setIsDeveloperOptionsOn] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    isDeveloperOptionsEnabled(handleResult)
  }, []);

  const handleResult = (isEnabled: boolean) => {
    console.log('Developer Options Enabled', isEnabled);
    setIsDeveloperOptionsOn(isEnabled)
  };

  return (
    <View style={styles.container}>
      <Text>isDeveloperOptionsEnabled: {String(isDeveloperOptionsOn)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

```

<!-- ## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow. -->

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
