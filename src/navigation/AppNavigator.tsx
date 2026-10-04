import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/Welcomescreen";
import SleepSetupScreen from "../screens/SleepSetupScreen";
import GoalSetupScreen from "../screens/GoalSetupScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Welcome" 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name = "Welcome"
                    component = {WelcomeScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name = "SleepSetup"
                    component = {SleepSetupScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name="GoalSetup"
                    component={GoalSetupScreen}
                ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}