import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Animated} from 'react-native';

export default class WhatsappUserMention extends Component {
  state = {
    translateY: new Animated.Value( 200 )
  };

  textChangeHandler = val => {
    const lastChar = val.charAt( val.length - 1 );

    console.log( 'last char', lastChar );
    if ( lastChar === '@' ) {
      Animated.spring( this.state.translateY, { toValue: 0 } ).start();
    }
  };

  renderInput = () => {
    return(
      <View style = { styles.input }>
        <TextInput 
          placeholder = 'type here'
          onChangeText = { this.textChangeHandler }
        />
      </View>
    );
  };

  renderList = () => {
    return(
      <Animated.View style = { [styles.list, { transform: [{translateY: this.state.translateY}] }] }>
        <Text style = { styles.name }>Reda Awad</Text>
        <Text style = { styles.name }>Fahad Saud</Text>
      </Animated.View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        { this.renderList() }
        { this.renderInput() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
    padding: 5
  },
  name: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 2,
    margin: 5
  },
  list: {
    alignItems: 'flex-start',
    margin: 5,
    padding: 5 
  }
});
