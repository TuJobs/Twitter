import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Welcome extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.setFace}>
					<Text style={styles.textWc}>
						Xem chuyện gì đang xảy ra trên thế giới ngay lúc này.
					</Text>

					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('login')}
						style={styles.buttonWc}
					>
						<Text
							style={{
								color: '#FFFFFF',
								fontSize: 20,
								fontWeight: '300',
								marginTop: 5
							}}
						>
							Bắt đầu
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonEnd}>
					<Text style={{ color: 'black' }}>Đã có một tài khoản?</Text>
					<TouchableOpacity>
						<Text style={{ color: '#0000FF', fontSize: 15 }}>Đăng nhập</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	setFace: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textWc: {
		marginLeft: 40,
		fontSize: 30,
		color: 'black',
		fontWeight: '800'
	},
	buttonWc: {
		width: 300,
		height: 40,
		backgroundColor: '#0000CC',
		alignItems: 'center',
		marginTop: 50,
		borderRadius: 20
	},
	buttonEnd: {
		marginLeft: 40,
		marginBottom: 20,
		flexDirection: 'row'
	}
});
