function minDate(dates) {
  // Use the Math.min function with a comparison using the dates array
  return dates.reduce((min, current) => (current < min ? current : min));
}
