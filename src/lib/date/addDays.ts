import { setDate } from './setDate';

export function addDays(date: Date, amount: number) {
  return setDate(date, date.getDate() + amount);
}
