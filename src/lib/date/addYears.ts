import { setYear } from './setYear';

export function addYears(date: Date, amount: number) {
  return setYear(date, date.getFullYear() + amount);
}
