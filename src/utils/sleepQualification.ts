export function qualifiesForSleepGoal(
  durationMinutes: number,
  sleepGoalHours: number
) {
  const requiredMinutes =
    sleepGoalHours * 60;

  return durationMinutes >= requiredMinutes;
}

export function formatSleepDuration(
  durationMinutes: number
) {
  const hours = Math.floor(
    durationMinutes / 60
  );

  const minutes =
    durationMinutes % 60;

  return `${hours}h ${minutes}m`;
}