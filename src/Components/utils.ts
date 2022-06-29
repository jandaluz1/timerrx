import { MedState } from "./interface";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const findNextDose = (drug: MedState): number => {
  const hours = Math.floor(24 / drug.frequency!);
  return Date.now() + HOUR * hours;
};

export const formatTime = (epochTime: number): string => {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(epochTime);
  const month = date.getMonth();
  const day = date.getDate();

  return `${date.toLocaleTimeString()} ${MONTHS[month]} ${day}`;
};
