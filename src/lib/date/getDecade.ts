import { addYears } from './addYears';
import { FormatOptions, format } from './format';
import { setYear } from './setYear';

type Year = {
  date: Date;
  index: number;
  label: string;
};

export function getDecade(options: {
  date: Date;
  format?: FormatOptions['year'];
  locale?: string;
}): Year[] {
  const startOfDecade = setYear(
    options.date,
    Math.floor(options.date.getFullYear() / 10) * 10,
  );
  const dates = [];

  for (
    let currentYear = startOfDecade;
    currentYear.getFullYear() - startOfDecade.getFullYear() < 10;
    currentYear = addYears(currentYear, 1)
  ) {
    dates.push({
      date: currentYear,
      index: currentYear.getFullYear(),
      label: format({
        date: currentYear,
        locale: options.locale,
        options: { year: options.format || 'numeric' },
      }),
    });
  }

  return dates;
}
