import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from './Component/User/Welcome';
import Login from './Component/User/Login';
import Notification from './Component/Main/Notification';
import Message from './Component/Main/Message';
import Search from './Component/Main/Search';
import Showcontent from './Component/Main/Showcontent';
import PostScreen from './Component/Main/PostScreen';
import CommentList from './Component/Main/CommentScreen';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

export const MenuHome = TabNavigator(
	{
		home: {
			screen: Showcontent,
			navigationOptions: {
				title: 'Trang chủ'
			}
		},
		search: {
			screen: Search
		},
		notification: {
			screen: Notification
		},
		message: {
			screen: Message
		}
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: () => {
				const { routeName } = navigation.state;
				switch (routeName) {
				case 'home':
					return (
						<Image
							style={{ width: 35, height: 35 }}
							source={require('./Component/img/home.png')}
						/>
					);
				case 'search':
					return (
						<Image
							style={{ width: 35, height: 35 }}
							source={require('./Component/img/search.png')}
						/>
					);
				case 'notification':
					return (
						<Image
							style={{ width: 35, height: 35 }}
							source={require('./Component/img/noti.png')}
						/>
					);
				case 'message':
					return (
						<Image
							style={{ width: 35, height: 35 }}
							source={require('./Component/img/message.jpg')}
						/>
					);
				}
			}
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'top',
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		},
		animationEnabled: false,
		swipeEnabled: false
	}
);

export const RootStack = StackNavigator(
	{
		welcome: {
			screen: Welcome,
			navigationOptions: {
				headerTitle: (
					<Image
						style={{ width: 50, height: 50, marginLeft: 40, marginTop: 20 }}
						source={require('./Component/img/logo.png')}
					/>
				)
			}
		},
		login: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		main: {
			screen: MenuHome
		},
		post: {
			screen: PostScreen
		},
		comment: {
			screen: CommentList
		}
	},
	{
		initialRouteName: 'welcome'
	}
);

// export const SideMenu = DrawerNavigator(
// 	{
// 		Tabbar: {
// 			screen: MenuHome
// 		}
// 	},
// 	{
// 		drawerWidth: 300,
// 		drawerPosition: 'left',
// 		contentComponent: props => <Info {...props} />
// 	}
// );
