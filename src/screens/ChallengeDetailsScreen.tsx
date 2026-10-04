import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/navigation";
import { challenges } from "../data/challenges";
import { useDodo } from "../context/DodoContext";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ChallengeDetails"
>;

export default function ChallengeDetailsScreen({
  navigation,
  route,
}: Props) {
  const { challengeId } = route.params;

  const challenge = challenges.find(
    (item) => item.id === challengeId
  );

  const {
    sleepCoins,
    activeChallenge,
    joinChallenge,
  } = useDodo();

  if (!challenge) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Challenge not found.
        </Text>
      </SafeAreaView>
    );
  }

  function handleJoin() {
    if (!challenge) {
        return;
    }

    if (activeChallenge) {
        Alert.alert(
            "Challenge already active",
            "Finish your current challenge before joining another one."
        );

        return;
    }

    if (sleepCoins < challenge.entryFee) {
        Alert.alert(
            "Not enough SleepCoins",
            "You don't have enough SleepCoins to join this challenge."
        );

        return;
    }

    const joined = joinChallenge(challenge);

    if (joined) {
        Alert.alert(
            "Challenge joined!",
            `You joined ${challenge.name}.`,
            [
                {
                text: "Go to Home",
                onPress: () =>
                    navigation.navigate("Main"),
                },
            ]
        );
    }
}
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ‹ Back
          </Text>
        </TouchableOpacity>

        <Text style={styles.smallLabel}>
          DODO CHALLENGE
        </Text>

        <Text style={styles.title}>
          {challenge.name}
        </Text>

        <Text style={styles.description}>
          {challenge.description}
        </Text>

        <View style={styles.mainCard}>
          <Text style={styles.cardLabel}>
            ENTRY
          </Text>

          <Text style={styles.entryAmount}>
            {challenge.entryFee}
          </Text>

          <Text style={styles.coinLabel}>
            SleepCoins
          </Text>

          <View style={styles.divider} />

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>
                LENGTH
              </Text>

              <Text style={styles.statValue}>
                {challenge.weeks}{" "}
                {challenge.weeks === 1
                  ? "week"
                  : "weeks"}
              </Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>
                PLAYERS
              </Text>

              <Text style={styles.statValue}>
                {challenge.players}
              </Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>
                POT
              </Text>

              <Text style={styles.statValue}>
                {challenge.pot.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          HOW TO WIN
        </Text>

        <View style={styles.ruleCard}>
          <View style={styles.rule}>
            <View style={styles.number}>
              <Text style={styles.numberText}>1</Text>
            </View>

            <View style={styles.ruleContent}>
              <Text style={styles.ruleTitle}>
                Hit your weekly goal
              </Text>

              <Text style={styles.ruleDescription}>
                Complete at least{" "}
                {challenge.nightsRequired} qualifying
                nights each week.
              </Text>
            </View>
          </View>

          <View style={styles.rule}>
            <View style={styles.number}>
              <Text style={styles.numberText}>2</Text>
            </View>

            <View style={styles.ruleContent}>
              <Text style={styles.ruleTitle}>
                Stay consistent
              </Text>

              <Text style={styles.ruleDescription}>
                Keep meeting the requirement throughout
                the entire challenge.
              </Text>
            </View>
          </View>

          <View style={styles.rule}>
            <View style={styles.number}>
              <Text style={styles.numberText}>3</Text>
            </View>

            <View style={styles.ruleContent}>
              <Text style={styles.ruleTitle}>
                Share the reward
              </Text>

              <Text style={styles.ruleDescription}>
                Finish the challenge and split the pot
                with the other successful Dodos.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.joinArea}>
          <View>
            <Text style={styles.joinLabel}>
              ENTRY FEE
            </Text>

            <Text style={styles.joinPrice}>
              {challenge.entryFee} SleepCoins
            </Text>
          </View>

          <View style={styles.balance}>
            <Text style={styles.balanceLabel}>
                YOUR BALANCE
            </Text>

            <Text style={styles.balanceValue}>
                {sleepCoins.toLocaleString()} SleepCoins
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.joinButton}
            onPress={handleJoin}
          >
            <Text style={styles.joinButtonText}>
              Join for {challenge.entryFee} SleepCoins
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101426",
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 28,
  },

  backText: {
    color: "#A9B8FF",
    fontSize: 17,
    fontWeight: "600",
  },

  smallLabel: {
    color: "#8FA5FF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
  },

  description: {
    color: "#9CA5C2",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 28,
  },

  mainCard: {
    backgroundColor: "#181D35",
    borderRadius: 22,
    padding: 22,
    marginBottom: 30,
  },

  cardLabel: {
    color: "#666F8D",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  entryAmount: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "700",
    marginTop: 6,
  },

  coinLabel: {
    color: "#A9B8FF",
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#292F48",
    marginVertical: 20,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stat: {
    flex: 1,
  },

  statLabel: {
    color: "#666F8D",
    fontSize: 9,
    fontWeight: "700",
    marginBottom: 5,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  sectionTitle: {
    color: "#858DAA",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 12,
  },

  ruleCard: {
    backgroundColor: "#181D35",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },

  rule: {
    flexDirection: "row",
    marginBottom: 22,
  },

  number: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#252D50",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  numberText: {
    color: "#A9B8FF",
    fontWeight: "700",
  },

  ruleContent: {
    flex: 1,
  },

  ruleTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  ruleDescription: {
    color: "#858DAA",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },

  joinArea: {
    backgroundColor: "#181D35",
    borderRadius: 20,
    padding: 18,
  },

  joinLabel: {
    color: "#666F8D",
    fontSize: 10,
    fontWeight: "700",
  },

  joinPrice: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 16,
  },

  joinButton: {
    backgroundColor: "#8FA5FF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  joinButtonText: {
    color: "#101426",
    fontSize: 16,
    fontWeight: "700",
  },

  balance: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 15,
},

balanceLabel: {
  color: "#666F8D",
  fontSize: 11,
  fontWeight: "700",
},

balanceValue: {
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "600",
},
});