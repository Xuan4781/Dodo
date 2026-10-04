export type SleepRecord = {
  id: number;
  date: string;

  bedtimeHour: number;
  bedtimeMinute: number;

  wakeHour: number;
  wakeMinute: number;

  durationMinutes: number;
};