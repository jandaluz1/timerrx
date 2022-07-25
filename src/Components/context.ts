import { createContext, Dispatch, SetStateAction } from "react";
import { MedState } from "./interface";

interface MedsContextInterface {
  meds: MedState[];
  setMeds: Dispatch<SetStateAction<MedState[]>>;
}

export const MedsContext = createContext<MedsContextInterface>(
  {} as MedsContextInterface
);
