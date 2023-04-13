import { MILLISECONDS_IN_DAY } from './constants';
import { getTimezoneOffsetInMilliseconds } from './getTimezoneOffsetInMilliseconds';
import { toDayStart } from './toDayStart';

export function differenceInCalendarDays(leftDate: Date, rightDate: Date) {
  const startOfDayLeft = toDayStart(leftDate);
  const startOfDayRight = toDayStart(rightDate);

  const timestampLeft =
    startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  const timestampRight =
    startOfDayRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfDayRight);

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
