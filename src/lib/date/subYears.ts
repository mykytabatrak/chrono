import { setYear } from "./setYear";

export function subYears(date: Date, amount: number) {
  return setYear(date, date.getFullYear() - amount);
}
