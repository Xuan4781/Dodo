import AppNavigator from "./src/navigation/AppNavigator";
import { OnboardingProvider } from "./src/context/OnboardingContext";
import { DodoProvider } from "./src/context/DodoContext";

export default function App(){
  return (
    <OnboardingProvider>
      <DodoProvider>
        <AppNavigator/>
      </DodoProvider>
    </OnboardingProvider>
  )
}