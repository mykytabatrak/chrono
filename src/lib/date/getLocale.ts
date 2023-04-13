export function getLocale() {
  return new Intl.DateTimeFormat().resolvedOptions().locale;
}
