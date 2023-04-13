import { addDays } from './addDays';

export function setDay(date: Date, day: number) {
  const newDate = new Date(date);
  const currentDay = newDate.getDay();
  const diff = day - currentDay;

  return addDays(newDate, diff);
}
