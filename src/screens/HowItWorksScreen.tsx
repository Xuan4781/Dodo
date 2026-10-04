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
import { useOnboarding } from "../context/OnboardingContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<
        RootStackParamList,
        "HowItWorks"
    >;

export default function HowItWorksScreen({navigation,}: Props) {
    const {
        bedtime,
        wakeTime,
        sleepGoal,
        nightsPerWeek,
    } = useOnboarding();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>

            <View style={styles.content}>
                <View>
                    <Text style={styles.step}>STEP 3 OF 3</Text>

                    <Text style={styles.title}>
                        You're ready{"\n"}to Dodo.
                    </Text>

                    <Text style={styles.description}>
                        Build dodo habits and compete challenges.
                    </Text>

                    <Text style={{color: "white", marginBottom: 25}}>
                        Goal: {sleepGoal}h * {nightsPerWeek} nights/week
                    </Text>

                    <View style={styles.rule}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>1</Text>
                        </View>

                        <View style={styles.ruleText}>
                            <Text style={styles.ruleTitle}>
                                Join a challenge
                            </Text>

                            <Text style={styles.ruleDescription}>
                                Put SleepCoins into the challenge pot.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.rule}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>2</Text>
                        </View>

                        <View style={styles.ruleText}>
                            <Text style={styles.ruleTitle}>
                                Hit your sleep goals.
                            </Text>
                        
                            <Text style={styles.ruleDescription}>
                                Compete enough qualifying nights each week.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.rule}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>3</Text>
                        </View>

                        <View style={styles.ruleText}>
                            <Text style={styles.ruleTitle}>
                                Stay in the game.
                            </Text>
                        
                            <Text style={styles.ruleDescription}>
                                Meet the weekly requirement to keep competing.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.rule}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>4</Text>
                        </View>

                        <View style={styles.ruleText}>
                            <Text style={styles.ruleTitle}>
                                Split the pot
                            </Text>

                            <Text style={styles.ruleDescription}>
                                Finish the challenge and share the reward.
                            </Text>
                        </View>
                    </View>
                </View>
                    
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Main")}
                >
                    <Text style={styles.buttonText}>
                        Start Dodo
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

    rule: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 25,
    },

    number: {
        width: 38,
        height: 38,
        borderRadius: 10,
        backgroundColor: "#252D50",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },

    numberText: {
        color: "#A9B8FF",
        fontSize: 16,
        fontWeight: "700",
    },

    ruleText: {
        flex: 1,
    },

    ruleTitle: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 5,
    },

    ruleDescription: {
        color: "#858DAA",
        fontSize: 14,
        lineHeight: 20,
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