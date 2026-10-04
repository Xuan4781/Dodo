export type Challenge = {
  id: number;
  name: string;
  description: string;
  weeks: number;
  entryFee: number;
  players: number;
  pot: number;
  nightsRequired: number;
};

export const challenges: Challenge[] = [
  {
    id: 1,
    name: "Consistency Club",
    description:
      "Build a consistent sleep routine and stay on track for four weeks.",
    weeks: 4,
    entryFee: 500,
    players: 49,
    pot: 24500,
    nightsRequired: 5,
  },

  {
    id: 2,
    name: "Early Birds",
    description:
      "Keep a consistent bedtime and start your mornings strong.",
    weeks: 3,
    entryFee: 300,
    players: 32,
    pot: 9600,
    nightsRequired: 5,
  },

  {
    id: 3,
    name: "Perfect Week",
    description:
      "A one-week challenge for Dodos who want to go seven for seven.",
    weeks: 1,
    entryFee: 200,
    players: 18,
    pot: 3600,
    nightsRequired: 7,
  },
];