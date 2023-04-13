export function toDayStart(date: Date) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);

  return newDate;
}
