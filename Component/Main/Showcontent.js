import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Dimensions,
	Image
} from 'react-native';
import faker from 'faker';
import Icon from 'react-native-vector-icons/Ionicons';
const POSTS = [];

let n = 1;
while (n <= 50) {
	POSTS.push({
		id: faker.random.uuid(),
		author: faker.name.firstName(),
		avatar: faker.image.avatar(),
		comment: 194,
		view: 189,
		content: faker.lorem.paragraphs()
	});
	n++;
}

export default class Showcontent extends React.Component {
	handlePostPressed = post => {
		this.props.navigation.navigate('post', {
			post: post
		});
	};
	render() {
		return (
			<FlatList
				data={POSTS}
				keyExtractor={item => item.id}
				renderItem={this.renderItem}
				ItemSeparatorComponent={this.renderSeparator}
				style={{ flex: 1 }}
			/>
		);
	}
	renderItem = row => {
		const post = row.item;
		const shortContent = post.content
			.split(/\s+/)
			.slice(0, 80)
			.join(' ');
		return (
			<View style={styles.container}>
				<Image source={{ uri: post.avatar }} style={styles.imageStyle} />
				<Text style={styles.metaText}>{post.author}</Text>
				<Text style={styles.content}>{shortContent}...</Text>
				<View style={styles.meta}>
					<TouchableOpacity onPress={this.handlePostPressed.bind(this, post)}>
						<Text>
							{' '}
							<Icon
								name="ios-chatbubbles-outline"
								size={30}
								color="black"
							/>{' '}
							139
						</Text>
					</TouchableOpacity>
					<Text>
						{' '}
						<Icon name="ios-git-compare-outline" size={30} color="black" />
						154
					</Text>
					<Text>
						{' '}
						<Icon name="ios-heart-outline" size={30} color="black" />
						128
					</Text>
					<Icon name="ios-share-outline" size={30} color="black" />
				</View>
			</View>
		);
	};
	renderSeparator() {
		return <View style={styles.separator} />;
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	separator: {
		flex: 1,
		height: 16,
		backgroundColor: '#eee'
	},
	meta: {
		flexDirection: 'row',
		padding: 2,
		paddingBottom: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	metaText: {
		marginLeft: 5,
		fontSize: 14,
		padding: 8,
		fontWeight: 'bold'
	},
	content: {
		padding: 8,
		fontSize: 14,
		lineHeight: 18
	},
	imageStyle: {
		height: 60,
		width: 60
	}
};
