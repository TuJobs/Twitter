import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from './Component/User/Welcome';
import Login from './Component/User/Login';
import Notification from './Component/Main/Notification';
import Message from './Component/Main/Message';
import Search from './Component/Main/Search';
import Showcontent from './Component/Main/Showcontent';
import PostScreen from './Component/Main/PostScreen';
import CommentList from './Component/Main/CommentScreen';
import HoSo from './Component/Drawer/Hoso';
import DanhSach from './Component/Drawer/DanhSach';
import DauTrang from './Component/Drawer/DauTrang';
import KhoanhKhac from './Component/Drawer/KhoanhKhac';
import CaiDat from './Component/Drawer/CaiDat';
import TroGiup from './Component/Drawer/TroGiup';

import {
	StackNavigator,
	TabNavigator,
	TabBarBottom,
	DrawerNavigator
} from 'react-navigation';

export const MenuHome = TabNavigator(
	{
		home: {
			screen: Showcontent,
			navigationOptions: {
				title: 'Trang chủ',
				headerLeft: (
					<TouchableOpacity>	
						<Icon
							name="ios-contact-outline"
							size={30}
							style={{ marginLeft: 20 }}
							color="blue"
						/>
					</TouchableOpacity>
				)
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
					return <Icon name="ios-home-outline" size={30} color="black" />;
				case 'search':
					return <Icon name="ios-search-outline" size={30} color="black" />;
				case 'notification':
					return (
						<Icon name="ios-notifications-outline" size={30} color="red" />
					);
				case 'message':
					return <Icon name="ios-mail-outline" size={30} color="blue" />;
				}
			}
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'top',
		tabBarOptions: {
			upperCaseLabel: false,
			showIcon: true,
			showLabel: false,

			indicatorStyle: {
				backgroundColor: 'white'
			},
			labelStyle: {
				fontSize: 14,
				color: 'white',
				fontFamily: 'kohinoor'
			}
		},
		animationEnabled: true,
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
		Hoso: { screen: HoSo },
		DanhSach: { screen: DanhSach },
		DauTrang: { screen: DauTrang },
		KhoanhKhac: { screen: KhoanhKhac },
		CaiDat: { screen: CaiDat },
		Trogiup: { screen: TroGiup },
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

export const SideMenu = DrawerNavigator(
	{
		Stack: {
			screen: RootStack,
			navigationOptions: {
				title: ' Tu Jobs'
			}
		},
		Tabbar: {
			screen: MenuHome
		},
		Hoso: { screen: HoSo },
		DanhSach: { screen: DanhSach },
		DauTrang: { screen: DauTrang },
		KhoanhKhac: { screen: KhoanhKhac },
		CaiDat: { screen: CaiDat },
		Trogiup: { screen: TroGiup }
	},
	{
		drawerWidth: 300,
		drawerPosition: 'left'
	}
);
