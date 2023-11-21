import { Text, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Settings, Notification } from "./screen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
	tabBarShowLabel: false,

	tabBarStyle: {
		position: "absolute",
		bottom: 20,
		right: 0,
		left: 0,
		elevation: 0,
		height: 75,
		width: "90%",
		backgroundColor: "#1D1F24",
		borderRadius: 100,
	},
};
export default function App() {
	return (
		<NavigationContainer
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{
										alignItems: "center",
										justifyContent: "center",
									}}>
									<Entypo
										name="home"
										size={28}
										color={focused ? "#78531E" : "#676D75"}
									/>
								</View>
							);
						},
						tabBarActiveBackgroundColor: "#EFB875",
						tabBarItemStyle: {
							borderRadius: 50,
						},
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Search}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<FontAwesome
										name="search"
										size={28}
										color={focused ? "#78531E" : "#676D75"}
									/>
								</View>
							);
						},
						tabBarActiveBackgroundColor: "#EFB875",
						tabBarItemStyle: {
							borderRadius: 50,
						},
					}}
				/>
				<Tab.Screen
					name="Notification"
					component={Notification}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<Ionicons
										name="notifications"
										size={28}
										color={focused ? "#78531E" : "#676D75"}
									/>
								</View>
							);
						},
						tabBarActiveBackgroundColor: "#EFB875",
						tabBarItemStyle: {
							borderRadius: 50,
						},
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={Settings}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View
									style={{ alignItems: "center", justifyContent: "center" }}>
									<Feather
										name="settings"
										size={28}
										color={focused ? "#78531E" : "#676D75"}
									/>
								</View>
							);
						},
						tabBarActiveBackgroundColor: "#EFB875",
						tabBarItemStyle: {
							borderRadius: 50,
						},
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
