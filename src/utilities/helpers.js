const getTodayDate = () => {
  const now = new Date();
  console.log(now.toISOString().slice(0, 10));
  return now.toISOString().slice(0, 10);
};

const getPastDates = num => {
  const now = new Date();
  const getTodayDate = now.getDate();

  let getDayBefore = now.setDate(getTodayDate - num);
  let convertNewDate = new Date(getDayBefore).toISOString().slice(0, 10);

  return convertNewDate;
};

export { getPastDates, getTodayDate };
