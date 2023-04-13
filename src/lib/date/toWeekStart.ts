import { setDay } from './setDay';
import { toDayStart } from './toDayStart';

export function toWeekStart(date: Date) {
  const startOfDay = toDayStart(date);
  return setDay(startOfDay, 0);
}
