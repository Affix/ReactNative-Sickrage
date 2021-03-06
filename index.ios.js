'use strict';
import React, {
  StyleSheet,
  View
} from 'react-native';

import RootNavigator from 'sickrage/Views/RootNavigator';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

class sickrage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="rootNavigator" />
      </View>
    );
  }
}

React.AppRegistry.registerComponent('sickrage', () => sickrage);
