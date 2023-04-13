export function setYear(date: Date, year: number) {
  const newDate = new Date(date);
  newDate.setFullYear(year);

  return newDate;
}
