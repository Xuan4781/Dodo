import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { Challenge } from "../data/challenges";

type DodoContextType = {
  sleepCoins: number;
  activeChallenge: Challenge | null;
  completedNights: number;

  joinChallenge: (challenge: Challenge) => boolean;
};

const DodoContext =
  createContext<DodoContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function DodoProvider({ children }: Props) {
  const [sleepCoins, setSleepCoins] = useState(1000);

  const [activeChallenge, setActiveChallenge] =
    useState<Challenge | null>(null);

  const [completedNights, setCompletedNights] =
    useState(0);

  function joinChallenge(challenge: Challenge) {
    if (activeChallenge) {
      return false;
    }

    if (sleepCoins < challenge.entryFee) {
      return false;
    }

    setSleepCoins(
      (currentCoins) =>
        currentCoins - challenge.entryFee
    );

    setActiveChallenge(challenge);
    setCompletedNights(0);

    return true;
  }

  return (
    <DodoContext.Provider
      value={{
        sleepCoins,
        activeChallenge,
        completedNights,
        joinChallenge,
      }}
    >
      {children}
    </DodoContext.Provider>
  );
}

export function useDodo() {
  const context = useContext(DodoContext);

  if (!context) {
    throw new Error(
      "useDodo must be used inside DodoProvider"
    );
  }

  return context;
}