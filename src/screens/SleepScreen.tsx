import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  useOnboarding,
} from "../context/OnboardingContext";

import {
  sleepRecords,
} from "../data/sleepRecords";

import {
  formatSleepDuration,
  qualifiesForSleepGoal,
} from "../utils/sleepQualification";

export default function SleepScreen() {
  const { sleepGoal } = useOnboarding();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Sleep
        </Text>

        <Text style={styles.subtitle}>
          Your recent sleep activity
        </Text>

        <View style={styles.goalCard}>
          <Text style={styles.goalLabel}>
            YOUR SLEEP GOAL
          </Text>

          <Text style={styles.goalValue}>
            {sleepGoal} hours
          </Text>

          <Text style={styles.goalDescription}>
            Sleep at least {sleepGoal} hours for
            the night to qualify.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>
          RECENT NIGHTS
        </Text>

        {sleepRecords.map((record) => {
          const qualified =
            qualifiesForSleepGoal(
              record.durationMinutes,
              sleepGoal
            );

          return (
            <View
              style={styles.sleepCard}
              key={record.id}
            >
              <View>
                <Text style={styles.date}>
                  {record.date}
                </Text>

                <Text style={styles.duration}>
                  {formatSleepDuration(
                    record.durationMinutes
                  )}
                </Text>

                <Text style={styles.timeRange}>
                  {record.bedtime} →{" "}
                  {record.wakeTime}
                </Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  qualified
                    ? styles.qualifiedBadge
                    : styles.missedBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    qualified
                      ? styles.qualifiedText
                      : styles.missedText,
                  ]}
                >
                  {qualified
                    ? "✓ Qualified"
                    : "Missed"}
                </Text>
              </View>
            </View>
          );
        })}
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
    paddingBottom: 35,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },

  subtitle: {
    color: "#858DAA",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 28,
  },

  goalCard: {
    backgroundColor: "#181D35",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },

  goalLabel: {
    color: "#8FA5FF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  goalValue: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
    marginTop: 8,
  },

  goalDescription: {
    color: "#858DAA",
    fontSize: 14,
    marginTop: 6,
  },

  sectionLabel: {
    color: "#858DAA",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 12,
  },

  sleepCard: {
    backgroundColor: "#181D35",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    color: "#858DAA",
    fontSize: 12,
    marginBottom: 5,
  },

  duration: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  timeRange: {
    color: "#858DAA",
    fontSize: 13,
    marginTop: 5,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },

  qualifiedBadge: {
    backgroundColor: "#213B37",
  },

  missedBadge: {
    backgroundColor: "#3B252E",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },

  qualifiedText: {
    color: "#8FC9A3",
  },

  missedText: {
    color: "#E18B9A",
  },
});