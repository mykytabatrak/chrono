import { addDays } from './addDays';
import { differenceInCalendarDays } from './differenceInCalendarDays';
import { FormatOptions, format } from './format';
import { getLocale } from './getLocale';
import { toWeekStart } from './toWeekStart';

type Weekday = {
  date: Date;
  index: number;
  label: string;
};

export function getWeek(options: {
  date: Date;
  format?: FormatOptions['weekday'];
  locale?: string;
}): Weekday[] {
  const startOfWeek = toWeekStart(options.date);
  const dates = [];

  for (
    let currentDay = startOfWeek;
    differenceInCalendarDays(currentDay, startOfWeek) < 7;
    currentDay = addDays(currentDay, 1)
  ) {
    dates.push({
      date: currentDay,
      index: currentDay.getDay(),
      label: format({
        date: currentDay,
        locale: options.locale,
        options: { weekday: options.format || 'long' },
      }),
    });
  }

  return dates;
}
