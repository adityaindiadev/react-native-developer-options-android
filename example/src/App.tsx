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
