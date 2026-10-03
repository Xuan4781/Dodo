import { 
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View, 
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<
    RootStackParamList,
    "Welcome"    
>;


export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <View style={styles.content}>
        <View style={styles.logoArea}>
          <Text style={styles.moon}>C</Text>

          <Text style={styles.logo}>Dodo</Text>

          <Text style={styles.tagline}>
            Sleep Consistent.{"\n"}
            Win.
          </Text>
        </View>

        <View style={styles.bottomArea}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("SleepSetup")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <Text style={styles.memberText}>Already a member?</Text>

          <TouchableOpacity>
            <Text style={styles.signIn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101426',
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingTop:80,
    paddingBottom: 45,
  },

  logoArea: {
    alignItems: "center",
    marginTop: 80,
  },

  moon: {
    fontSize: 70,
    color: "#a9b7ff",
    marginBottom: 15,
  }, 

  logo: {
    fontSize: 52,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 2,
  },

  tagline: {
    marginTop: 18,
    fontSize: 18,
    lineHeight: 27,
    color: "#b7bed7",
    textAlign: "center",
  },

  bottomArea: {
    alignItems: "center",
  },

  button: {
    backgroundColor: "#8FA5FF",
    width: "100%",
    paddingVertical: 17,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 24,
  },

  buttonText: {
    color: "#101426",
    fontSize: 17,
    fontWeight: "700",
  },

  memberText: {
    color: "#858DAA",
    fontSize: 14,
  },

  signIn: {
    color: "#A9B8FF",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  }
});
