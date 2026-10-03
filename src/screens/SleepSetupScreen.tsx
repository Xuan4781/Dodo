import { 
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View, 
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function SleepSetupScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.content}>
                <View>
                    <Text style={styles.step}>STEP 1 OF 3</Text>

                    <Text style={styles.title}>
                        Let's learn your {"\n"}sleep schedule.
                    </Text>

                    <Text style={styles.description}>
                        Dodo uses your normal sleep schedule to create goals that work for you duh.
                    </Text>

                    <View style={styles.card}>
                        <Text style={styles.label}>Typical bedtime</Text>
                        <Text style={styles.time}>11:30 PM</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.label}>Typical wake time</Text>
                        <Text style={styles.time}>7:30 AM</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.label}>Sleep Goal</Text>
                        <Text style={styles.time}>8 Hours</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
            
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101426",
    },

    content: {
        flex: 1, 
        justifyContent: "space-between",
        paddingHorizontal: 28,
        paddingTop: 40,
        paddingBottom: 45,
    },

    step: {
        color: "#8FA5FF",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginBottom: 20,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 36,
        fontWeight: "700",
        lineHeight: 44,
    },

    description: {
        color: "#9CA5C2",
        fontSize: 16,
        lineHeight: 24,
        marginTop: 18,
        marginBottom: 35,
    },

    card: {
        backgroundColor: "181D35",
        borderRadius: 18,
        padding: 20,
        marginBottom: 14,
    },

    label: {
        color: "#858DAA",
        fontSize: 14,
        marginBottom: 7,
    },

    time: {
        color: "FFFFFF",
        fontSize: 21,
        fontWeight: "600",
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
        color: "101426",
        fontSize: 17,
        fontWeight: "700",
    }
})