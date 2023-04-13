import { addMonths } from './addMonths';
import { FormatOptions, format } from './format';
import { toYearStart } from './toYearStart';

type Month = {
  date: Date;
  index: number;
  label: string;
};

export function getMonths(options: {
  date: Date;
  format?: FormatOptions['month'];
  locale?: string;
}): Month[] {
  const startOfYear = toYearStart(options.date);
  const dates = [];

  for (
    let currentMonth = startOfYear;
    currentMonth.getFullYear() === startOfYear.getFullYear();
    currentMonth = addMonths(currentMonth, 1)
  ) {
    dates.push({
      date: currentMonth,
      index: currentMonth.getMonth(),
      label: format({
        date: currentMonth,
        locale: options.locale,
        options: { month: options.format || 'numeric' },
      }),
    });
  }

  return dates;
}
