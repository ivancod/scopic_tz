import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import List from '../containers/List';


export default class ListScreen extends React.Component {
  render() {
    return (
        <View style={ styles.container }>
            <List />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
});
