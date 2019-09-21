import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Record from './src/WhatsappRecordEntireAnimation/index';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Record />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
});