import React from 'react';
import { View, Text } from 'react-native';
import Dash from 'react-native-dash';

export default class Search extends React.Component {
	render() {
		return (
			<View>
				<Text
					style={{
						fontSize: 20,
						fontWeight: '200',
						color: 'black',
						marginTop: 10
					}}
				>
					Xu Hướng cho bạn
				</Text>
				<Dash style={{ width: 400, height: 1, marginTop: 10 }} />
				<Text style={{ marginLeft: 20, marginTop: 10 }}>bloombetg.com</Text>
				<Dash style={{ width: 400, height: 1, marginTop: 10 }} />
				<Text style={{ marginLeft: 20, marginTop: 10 }}>
					Hanoi is the capital of Vietnam and the country's second largest city
					by population. The population in 2015 was estimated at 7.7 million
					people. The city lies on the right bank of the Red River. Hanoi is
					1,760 km (1,090 mi) north of Ho Chi Minh City and 120 km (75 mi) west
					of Hai Phong city.
				</Text>
				<Dash style={{ width: 400, height: 1, marginTop: 10 }} />
				<Text style={{ marginLeft: 20, marginTop: 10 }}>
					The Ho Chi Minh City Metropolitan Area, a metropolitan area covering
					most parts of the southeast region plus Tiền Giang Province and Long
					An Province under planning, will have an area of 30,000 square
					kilometres (12,000 sq mi) with a population of 20 million inhabitants
					by 2020
				</Text>
			</View>
		);
	}
}
