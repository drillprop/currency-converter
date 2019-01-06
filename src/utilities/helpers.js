const getDates = num => {
  const now = new Date();
  const getTodayDate = now.getDate();

  let getDayBefore = now.setDate(getTodayDate - num);
  let convertNewDate = new Date(getDayBefore).toISOString().slice(0, 10);

  return convertNewDate;
};

export { getDates };
