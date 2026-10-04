import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Challenge } from "../data/challenges";

type DodoContextType = {
  sleepCoins: number;
  activeChallenge: Challenge | null;
  completedNights: number;
  isLoading: boolean;

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDodoData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveDodoData();
    }
  }, [
    sleepCoins,
    activeChallenge,
    completedNights,
    isLoading,
  ]);

  async function loadDodoData() {
    try {
      const savedData =
        await AsyncStorage.getItem("dodoData");

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        setSleepCoins(parsedData.sleepCoins ?? 1000);

        setActiveChallenge(
          parsedData.activeChallenge ?? null
        );

        setCompletedNights(
          parsedData.completedNights ?? 0
        );
      }
    } catch (error) {
      console.log(
        "Error loading Dodo data:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function saveDodoData() {
    try {
      const data = {
        sleepCoins,
        activeChallenge,
        completedNights,
      };

      await AsyncStorage.setItem(
        "dodoData",
        JSON.stringify(data)
      );
    } catch (error) {
      console.log(
        "Error saving Dodo data:",
        error
      );
    }
  }

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
        isLoading,
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