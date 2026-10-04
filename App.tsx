import {
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

import AppNavigator from "./src/navigation/AppNavigator";
import { OnboardingProvider } from "./src/context/OnboardingContext";
import { DodoProvider, useDodo } from "./src/context/DodoContext";

function AppContent() {
  const { isLoading } = useDodo();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color="#8FA5FF"
        />
      </View>
    );
  }

  return <AppNavigator />;
}

export default function App(){
  return (
    <OnboardingProvider>
      <DodoProvider>
        <AppContent/>
      </DodoProvider>
    </OnboardingProvider>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#101426",
    alignItems: "center",
    justifyContent: "center",
  },
});