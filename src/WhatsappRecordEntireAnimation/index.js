import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Animated} from 'react-native';
import FontIcon from 'react-native-vector-icons/Ionicons';

export default class WhatsappRecordEntireAnimation extends Component {
	state = {
		redCircleBackColor: new Animated.Value( 0 ),
		micScale: new Animated.Value( 1 ),
		translateY: new Animated.Value( 300 )
	};

	micPressHandler = () => {
		Animated.sequence([
			Animated.spring( this.state.micScale, { toValue: 2 } ),
			Animated.spring( this.state.micScale, { toValue: 1 } )
		]).start( () => {
			Animated.spring( this.state.translateY, { toValue: 0 } ).start();
		} );
	};	

	constructor( props ) {
		super( props );

		this.animateRedCircle();
	}

	animateRedCircle = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing( this.state.redCircleBackColor, { toValue: 1, duration: 800 } ),
				Animated.timing( this.state.redCircleBackColor, { toValue: 0, duration: 800 } )
			])
		).start();
	};

	renderOkIcon = () => {
		return(
			<FontIcon 
				name = 'md-checkmark-circle'
				style = { styles.icon }
				color = 'green'
			/>
		);
	};

	renderRedCircle = () => {
		const interpolatedColor = this.state.redCircleBackColor.interpolate({
			inputRange: [0, 1],
			outputRange: ['rgb(255,0,0)', 'rgb(255,255,255)']
		});

		return(
			<Animated.View 
			  style = { [styles.redCircle, { backgroundColor: interpolatedColor, borderColor: interpolatedColor }] }
			/>
		);
	};

	renderCancelIcon = () => {
		return(
			<FontIcon 
				name = 'md-trash'
				style = { styles.icon }
				color = 'red'
			/>
		);
	};

	renderRecording = () => {
		return(
			<Animated.View style = { [styles.recording, {transform: [{translateY: this.state.translateY}]}] }>
				{ this.renderOkIcon() }
				{ this.renderRedCircle() }
				{ this.renderCancelIcon() }
			</Animated.View>
		);
	};

	renderInput = () => {
		return(
			<View style = { styles.input }>
				<TextInput 
					placeholder = 'type here'
				/>
			</View>
		);
	};

	renderMicIcon = () => {
		return(
			<Animated.View style = {{ transform: [{scale: this.state.micScale}] }}>
				<FontIcon 
					name = 'md-mic'
					style = { styles.icon }
					onPress = { this.micPressHandler }
				/>
			</Animated.View>
		);
	};

	renderInputWrapper = () => {
		return(
			<View style = { styles.inputWrapper }>
				{ this.renderInput() }
				{ this.renderMicIcon() }
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				{ this.renderInputWrapper() }
				{ this.renderRecording() }
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
		flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
    padding: 5
	},
	inputWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	icon: {
		fontSize: 32,
		padding: 5
	},
	recording: {
		height: 200,
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		bottom: 100,
		right: 0
	},
	redCircle: {
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 1
	}
});