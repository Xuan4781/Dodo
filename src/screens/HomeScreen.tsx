import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useOnboarding } from "../context/OnboardingContext";

export default function HomeScreen() {
  const {
    sleepGoal,
    nightsPerWeek,
  } = useOnboarding();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Good morning
            </Text>

            <Text style={styles.title}>
              Ready to Dodo?
            </Text>
          </View>

          <View style={styles.coinBox}>
            <Text style={styles.coin}>◐</Text>
            <Text style={styles.coinAmount}>1,000</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>
          ACTIVE CHALLENGE
        </Text>

        <View style={styles.challengeCard}>
          <View style={styles.challengeTop}>
            <View>
              <Text style={styles.challengeName}>
                Consistency Club
              </Text>

              <Text style={styles.week}>
                Week 1 of 4
              </Text>
            </View>

            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>
                ACTIVE
              </Text>
            </View>
          </View>

          <View style={styles.progressArea}>
            <Text style={styles.progressNumber}>
              3
              <Text style={styles.progressGoal}>
                {" "}/ {nightsPerWeek}
              </Text>
            </Text>

            <Text style={styles.progressLabel}>
              qualifying nights
            </Text>
          </View>

          <View style={styles.days}>
            {["M", "T", "W", "T", "F", "S", "S"].map(
              (day, index) => (
                <View
                  style={styles.day}
                  key={index}
                >
                  <View
                    style={[
                      styles.dayCircle,
                      index < 3 &&
                        styles.completedDay,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayCheck,
                        index < 3 &&
                          styles.completedDayText,
                      ]}
                    >
                      {index < 3 ? "✓" : ""}
                    </Text>
                  </View>

                  <Text style={styles.dayLabel}>
                    {day}
                  </Text>
                </View>
              )
            )}
          </View>

          <View style={styles.divider} />

          <View style={styles.challengeStats}>
            <View>
              <Text style={styles.statLabel}>
                POT
              </Text>

              <Text style={styles.statValue}>
                24,500
              </Text>
            </View>

            <View>
              <Text style={styles.statLabel}>
                PLAYERS
              </Text>

              <Text style={styles.statValue}>
                49
              </Text>
            </View>

            <View>
              <Text style={styles.statLabel}>
                YOUR ENTRY
              </Text>

              <Text style={styles.statValue}>
                500
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionLabel}>
          LAST NIGHT
        </Text>

        <View style={styles.sleepCard}>
          <View>
            <Text style={styles.sleepTime}>
              7h 42m
            </Text>

            <Text style={styles.sleepRange}>
              11:38 PM → 7:31 AM
            </Text>
          </View>

          <View style={styles.successBadge}>
            <Text style={styles.successText}>
              ✓ Qualified
            </Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalLabel}>
            YOUR SLEEP GOAL
          </Text>

          <Text style={styles.goalValue}>
            {sleepGoal} hours
          </Text>

          <Text style={styles.goalDescription}>
            Complete {nightsPerWeek} qualifying nights
            this week.
          </Text>
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
    paddingTop: 20,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },

  greeting: {
    color: "#858DAA",
    fontSize: 14,
    marginBottom: 5,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "700",
  },

  coinBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#181D35",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 20,
  },

  coin: {
    color: "#F1D879",
    marginRight: 7,
  },

  coinAmount: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  sectionLabel: {
    color: "#858DAA",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 12,
  },

  challengeCard: {
    backgroundColor: "#181D35",
    borderRadius: 22,
    padding: 20,
    marginBottom: 30,
  },

  challengeTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  challengeName: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "700",
  },

  week: {
    color: "#858DAA",
    fontSize: 14,
    marginTop: 5,
  },

  activeBadge: {
    backgroundColor: "#253652",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    height: 28,
  },

  activeText: {
    color: "#8FC9A3",
    fontSize: 10,
    fontWeight: "700",
  },

  progressArea: {
    alignItems: "center",
    marginVertical: 25,
  },

  progressNumber: {
    color: "#FFFFFF",
    fontSize: 44,
    fontWeight: "700",
  },

  progressGoal: {
    color: "#858DAA",
    fontSize: 23,
  },

  progressLabel: {
    color: "#858DAA",
    fontSize: 13,
    marginTop: 3,
  },

  days: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  day: {
    alignItems: "center",
  },

  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#252B43",
    alignItems: "center",
    justifyContent: "center",
  },

  completedDay: {
    backgroundColor: "#8FA5FF",
  },

  dayCheck: {
    color: "#858DAA",
  },

  completedDayText: {
    color: "#101426",
    fontWeight: "700",
  },

  dayLabel: {
    color: "#858DAA",
    fontSize: 11,
    marginTop: 7,
  },

  divider: {
    height: 1,
    backgroundColor: "#292F48",
    marginVertical: 20,
  },

  challengeStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statLabel: {
    color: "#666F8D",
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 5,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  sleepCard: {
    backgroundColor: "#181D35",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  sleepTime: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
  },

  sleepRange: {
    color: "#858DAA",
    fontSize: 13,
    marginTop: 5,
  },

  successBadge: {
    backgroundColor: "#213B37",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },

  successText: {
    color: "#8FC9A3",
    fontSize: 12,
    fontWeight: "600",
  },

  goalCard: {
    backgroundColor: "#181D35",
    borderRadius: 18,
    padding: 20,
  },

  goalLabel: {
    color: "#8FA5FF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  goalValue: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "700",
    marginTop: 8,
  },

  goalDescription: {
    color: "#858DAA",
    fontSize: 14,
    marginTop: 5,
  },
});