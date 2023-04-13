export function setDate(date: Date, dayOfMonth: number) {
  const newDate = new Date(date);
  newDate.setDate(dayOfMonth);

  return newDate;
}
