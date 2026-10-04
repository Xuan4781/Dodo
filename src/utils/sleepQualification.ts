import { SleepRecord } from "../types/sleep";

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

export function formatTime(
  hour: number,
  minute: number
) {
  const date = new Date();

  date.setHours(hour);
  date.setMinutes(minute);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getTimeDifference(
  hour1: number,
  minute1: number,
  hour2: number,
  minute2: number
) {
  const time1 =
    hour1 * 60 + minute1;

  const time2 =
    hour2 * 60 + minute2;

  let difference =
    Math.abs(time1 - time2);

  if (difference > 720) {
    difference =
      1440 - difference;
  }

  return difference;
}

export function qualifiesForSleepGoal(
  record: SleepRecord,
  targetBedtime: Date,
  targetWakeTime: Date,
  sleepGoalHours: number
) {
  const bedtimeDifference =
    getTimeDifference(
      record.bedtimeHour,
      record.bedtimeMinute,
      targetBedtime.getHours(),
      targetBedtime.getMinutes()
    );

  const wakeDifference =
    getTimeDifference(
      record.wakeHour,
      record.wakeMinute,
      targetWakeTime.getHours(),
      targetWakeTime.getMinutes()
    );

  const requiredMinutes =
    sleepGoalHours * 60;

  const bedtimeQualified =
    bedtimeDifference <= 30;

  const wakeQualified =
    wakeDifference <= 30;

  const durationQualified =
    record.durationMinutes >=
    requiredMinutes;

  return (
    bedtimeQualified &&
    wakeQualified &&
    durationQualified
  );
}