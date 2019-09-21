import React, { Component } from 'react';
import { View, TextInput, FlatList, StyleSheet, Animated } from 'react-native';

export default class PostHome extends Component {
    state = {
        inputHeight: new Animated.Value( 50 )
    };

    focusHandler = () => {
        Animated.spring( this.state.inputHeight, { toValue: 200 } ).start();
    };

    renderPostInput = () => {
        return(
            <Animated.View style = { [styles.input, { height: this.state.inputHeight }] }>
            <TextInput
              placeholder = "What's your Post?"
              onFocus = { this.focusHandler }  
            />
            </Animated.View>
        );
    };

    renderPost = () => (
        <View style = { styles.post }/>
    );

    renderPostList = () => {
        return(
            <FlatList
              data = { [1, 2, 3] }
              renderItem = { this.renderPost }
            />
        );
    };

    render() {
        return(
            <View style = { styles.container }>
                { this.renderPostInput() }
                { this.renderPostList() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1
    },
    post: {
        backgroundColor: 'blue',
        height: 200,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue'
    }
});