import { getLocale } from './getLocale';

export type FormatOptions = {
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?:
    | 'short'
    | 'long'
    | 'shortOffset'
    | 'longOffset'
    | 'shortGeneric'
    | 'longGeneric';
  formatMatcher?: 'best fit' | 'basic';
  hour12?: boolean;
  timeZone?: string;
};

export function format({
  date,
  locale,
  options,
}: {
  date: Date;
  locale?: string;
  options?: FormatOptions;
}) {
  const resolvedLocale = locale || getLocale();
  const formatter = new Intl.DateTimeFormat(resolvedLocale, options);

  return formatter.format(date);
}
