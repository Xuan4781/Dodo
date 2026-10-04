import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

type OnboardingContextType = {
    bedtime: Date;
    wakeTime: Date;
    sleepGoal: number;
    nightsPerWeek: number;

    setBedtime: (value: Date) => void;
    setWakeTime: (value: Date) => void;
    setSleepGoal: (value: number) => void;
    setNightsPerWeek: (value: number) => void;
};

const OnboardingContext =
    createContext<OnboardingContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
};

export function OnboardingProvider({ children } : Props) {
    const [bedtime, setBedtime] = useState(
        new Date(2026, 0, 1, 23, 30)
    );
    const [wakeTime, setWakeTime] = useState(
        new Date(2026, 0, 1, 7, 30)
    );

    const [sleepGoal, setSleepGoal] = useState(8);
    const [nightsPerWeek, setNightsPerWeek] = useState(5);

    return (
        <OnboardingContext.Provider
            value={{
                bedtime,
                wakeTime,
                sleepGoal,
                nightsPerWeek,
                setBedtime,
                setWakeTime,
                setSleepGoal,
                setNightsPerWeek,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    )
}

export function useOnboarding(){
    const context = useContext(OnboardingContext);

    if(!context){
        throw new Error(
            "UseOnboarding must be used inside OnboardingProvider"
        );
    }

    return context;
}