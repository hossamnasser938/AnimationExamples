import React, {Component} from 'react';
import {StyleSheet, View, LayoutAnimation, Dimensions, TouchableHighlight, UIManager} from 'react-native';

const { width } = Dimensions.get( 'window' );
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental( true );

export default class WhatsappRecordPartialAnimation extends Component {
  state = {
    rightW: width * 0.2,
    leftW: width * 0.8
  };

  clickHandler = () => {
    LayoutAnimation.spring();

    this.setState( {
      leftW: width * 0.2,
      rightW: width * 0.8
    } );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style = { styles.wrapper }>
            <View style = { [styles.left, {width: this.state.leftW}] }/>
            <TouchableHighlight onPress = { this.clickHandler }>
              <View style = { [styles.right, {width: this.state.rightW}] }/>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  left: {
    backgroundColor: 'red',
    padding: 5,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    height: 50
  },
  right: {
    backgroundColor: 'green',
    padding: 5,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    height: 50
  },
  wrapper: {
      flexDirection: 'row'
  }
});