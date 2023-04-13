import { MILLISECONDS_IN_MINUTE } from './constants';

export function getTimezoneOffsetInMilliseconds(date: Date) {
  return date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
}
