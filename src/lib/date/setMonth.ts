export function setMonth(date: Date, month: number) {
  const newDate = new Date(date);
  newDate.setMonth(month);

  return newDate;
}
