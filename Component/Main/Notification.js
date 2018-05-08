import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class Notification extends React.Component {
	render() {
		return (
			<View>
				<Text style={{ fontSize: 30, fontWeight: '400' }}>
					Không có gì để xem ở đây
				</Text>
				<Icon name="adn" size={30} color="red" />
				<Text style={{ fontSize: 30, fontWeight: '400' }}>
					Không có gì để xem ở đây
				</Text>
			</View>
		);
	}
}
