import { setMonth } from './setMonth';
import { toDayStart } from './toDayStart';

export function toYearStart(date: Date) {
  const startOfDay = toDayStart(date);
  return setMonth(startOfDay, 0);
}
