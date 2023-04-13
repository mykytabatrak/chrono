import { setMonth } from './setMonth';

export function addMonths(date: Date, amount: number) {
  return setMonth(date, date.getMonth() + amount);
}
