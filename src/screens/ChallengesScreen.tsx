import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { challenges } from "../data/challenges";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function ChallengesScreen() {

  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Challenges</Text>

        <Text style={styles.description}>
          Put your SleepCoins on the line.
        </Text>

        <Text style={styles.sectionTitle}>
          OPEN CHALLENGES
        </Text>

        {challenges.map((challenge) => (
          <TouchableOpacity
            key={challenge.id}
            style={styles.card}
            onPress={() => {
                navigation.navigate("ChallengeDetails", {
                    challengeId: challenge.id,
                })
            }}
          >
            <View style={styles.cardTop}>
              <View style={styles.nameArea}>
                <Text style={styles.challengeName}>
                  {challenge.name}
                </Text>

                <Text style={styles.duration}>
                  {challenge.weeks}{" "}
                  {challenge.weeks === 1
                    ? "week"
                    : "weeks"}
                </Text>
              </View>

              <View style={styles.entryBadge}>
                <Text style={styles.entryText}>
                  {challenge.entryFee}
                </Text>

                <Text style={styles.coinText}>
                  SleepCoins
                </Text>
              </View>
            </View>

            <Text style={styles.challengeDescription}>
              {challenge.description}
            </Text>

            <View style={styles.divider} />

            <View style={styles.stats}>
              <View>
                <Text style={styles.statLabel}>
                  PLAYERS
                </Text>

                <Text style={styles.statValue}>
                  {challenge.players}
                </Text>
              </View>

              <View>
                <Text style={styles.statLabel}>
                  POT
                </Text>

                <Text style={styles.statValue}>
                  {challenge.pot.toLocaleString()}
                </Text>
              </View>

              <View>
                <Text style={styles.statLabel}>
                  WEEKLY GOAL
                </Text>

                <Text style={styles.statValue}>
                  {challenge.nightsRequired} nights
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
    paddingTop: 20,
    paddingBottom: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },

  description: {
    color: "#858DAA",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 35,
  },

  sectionTitle: {
    color: "#858DAA",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#181D35",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  nameArea: {
    flex: 1,
    marginRight: 10,
  },

  challengeName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  duration: {
    color: "#858DAA",
    fontSize: 13,
    marginTop: 5,
  },

  entryBadge: {
    backgroundColor: "#252D50",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
  },

  entryText: {
    color: "#A9B8FF",
    fontSize: 16,
    fontWeight: "700",
  },

  coinText: {
    color: "#858DAA",
    fontSize: 9,
    marginTop: 2,
  },

  challengeDescription: {
    color: "#9CA5C2",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#292F48",
    marginVertical: 18,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statLabel: {
    color: "#666F8D",
    fontSize: 9,
    fontWeight: "700",
    marginBottom: 5,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});