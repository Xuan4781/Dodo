import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ChallengesScreen from "../screens/ChallengesScreen";
import SleepScreen from "../screens/SleepScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { MainTabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#181D35",
          borderTopColor: "#252B43",
          height: 80,
          paddingTop: 8,
        },

        tabBarActiveTintColor: "#A9B8FF",
        tabBarInactiveTintColor: "#666F8D",

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Challenges"
        component={ChallengesScreen}
      />

      <Tab.Screen
        name="Sleep"
        component={SleepScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}