import React from 'react';
import {
	TouchableOpacity,
	View,
	Text,
	TextInput,
	Image,
	StyleSheet
} from 'react-native';

export default class Welcome extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require('../img/logo1.jpg')} />
				<View style={styles.input}>
					<TextInput value="" placeholder="User" placeholderTextColor="#fff" />
					<TextInput
						value=""
						placeholder="Password"
						placeholderTextColor="#fff"
					/>
				</View>
				<View style={{ width: 400, height: 50, alignItems: 'center' }}>
					<TouchableOpacity
						style={styles.buttonLogin}
						onPress={() => this.props.navigation.navigate('main')}
					>
						<Text style={{ color: '#FBEFEF' }}>Log in </Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingTop: 5 }}>
						<Text>Forgot your password?</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.textLogin}>
					By logging in you agree to our Terms of Use and Privacy Policy.
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E9AFE',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 170,
		height: 170,
		marginBottom: 10,
		color: '#3333CC'
	},
	input: {
		width: '80%',
		height: 100,
		marginTop: 40,
		marginBottom: 10,
		borderRadius: 10
	},
	buttonLogin: {
		backgroundColor: '#3333CC',
		paddingTop: 5,
		marginTop: 10,
		width: '80%',
		marginLeft: 20,
		height: 30,
		alignItems: 'center',
		borderRadius: 5
	},
	textLogin: {
		marginTop: 180
	}
});
