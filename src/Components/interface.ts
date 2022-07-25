export interface MedState {
  name: string;
  dosage: number | undefined;
  frequency: number | undefined;
  lastDose: number;
  nextDose: number | null;
}
