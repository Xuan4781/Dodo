import { useState } from "react";

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
    "GoalSetup"
>;

export default function GoalSetupScreen({navigation,} : Props) {
    const [sleepGoal, setSleepGoal] = useState(8);
    const [nightsPerWeek, setNightsPerWeek] = useState(5);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>

            <View style={styles.content}>
                <View>
                    <Text style={styles.step}>STEP 2 OF 3</Text>

                    <Text style={styles.title}>
                        Set your{"\n"}sleep goal.
                    </Text>

                    <Text style={styles.description}>
                        Choose a realistic goal that you can reach/
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Sleep per night
                    </Text>

                    <View style={styles.options}>
                        {[7, 7.5, 8, 8.5].map((hours)=> (
                            <TouchableOpacity
                                key={hours}
                                style={[
                                    styles.option,
                                    sleepGoal === hours && styles.selectedOption,
                                ]}
                                onPress={() => setSleepGoal(hours)}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        sleepGoal === hours && styles.selectedOptionText,
                                    ]}
                                >
                                    {hours}h
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.sectionTitle}>
                        Successful nights per week
                    </Text>

                    <View style={styles.nightOptions}>
                        {[4, 5, 6, 7].map((nights) => (
                            <TouchableOpacity
                                key={nights}
                                style={[
                                    styles.nightOption,
                                    nightsPerWeek === nights && styles.selectedOption,
                                ]}
                                onPress={() => setNightsPerWeek(nights)}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        nightsPerWeek === nights && styles.selectedOptionText,
                                    ]}
                                >
                                    {nights}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.summary}>
                        <Text style={styles.summaryLabel}>
                            Your Goal
                        </Text>

                        <Text style={styles.summaryText}>
                            {sleepGoal} hours of sleep
                        </Text>

                        <Text style={styles.summarySubtext}>
                            {nightsPerWeek} nights each week
                        </Text>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate("HowItWorks")}
                >
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
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

    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 14,
        marginTop: 8,
    },

    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 28,
    },

    option: {
        width: "48%",
        backgroundColor: "#181d35",
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "transparent",
    },

    nightOptions: {
        flexDirection: "row",
        gap: 10,
    },

    nightOption: {
        flex: 1,
        backgroundColor: "#181d35",
        paddingVertical: 17,
        borderRadius: 16,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "transparent",
    },

    selectedOption: {
        backgroundColor: "#252D50",
        borderColor: "#8FA5FF",
    },

    optionText: {
        color: "#9CA5C2",
        fontSize: 17,
        fontWeight: "600",
    },

    selectedOptionText: {
        color: "#FFFFFF",
    },

    summary: {
        backgroundColor: "#181D35",
        borderRadius: 18,
        padding: 20,
        marginTop: 30,
    },

    summaryLabel: {
        color: "#8FA5FF",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1.3,
        marginBottom: 9,
    },

    summaryText: {
        color:"#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
    },

    summarySubtext: {
        color: "#9CA5C2",
        fontSize: 15,
        marginTop: 5,
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

})