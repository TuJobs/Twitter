import React from 'react';
import {
	View,
	Text,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PostScreen extends React.Component {
	handleCommentPress = () => {
		this.props.navigation.navigate('comment');
	};
	render() {
		const { post } = this.props.navigation.state.params;
		const imageWidth = Dimensions.get('window').width;

		return (
			<View style={styles.container}>
				<ScrollView>
					<Image
						source={{ uri: post.imageUrl }}
						style={{ width: imageWidth, height: imageWidth }}
						resizeMode="cover"
					/>
					<Image
						source={{ uri: post.avatar }}
						style={{ width: 60, height: 60 }}
					/>
					<Text style={styles.content}>{post.content}</Text>
				</ScrollView>
				<View style={styles.meta}>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('search')}
					>
						<Icon name="ios-search-outline" size={30} color="black" />
					</TouchableOpacity>
					<Icon name="ios-create-outline" size={30} color="black" />
					<TouchableOpacity onPress={this.handleCommentPress}>
						<Icon name="ios-chatbubbles-outline" size={30} color="black" />
					</TouchableOpacity>
					<Icon name="ios-crop-outline" size={30} color="black" />
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	content: {
		padding: 16,
		fontSize: 16,
		lineHeight: 16 * 1.5,
		textAlign: 'justify'
	},
	meta: {
		flexDirection: 'row',
		padding: 16,
		paddingTop: 8,
		paddingBottom: 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff'
	},
	metaText: {
		color: '#f8f8f8',
		fontWeight: 'bold'
	}
};
