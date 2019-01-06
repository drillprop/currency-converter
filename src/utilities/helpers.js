const getDates = num => {
  let datesArray = [];
  const now = new Date();
  const getTodayDate = now.getDate();
  for (let i = 0; i <= num; i++) {
    console.log(i);
    let getDayBefore = now.setDate(getTodayDate - i);
    let convertNewDate = new Date(getDayBefore).toISOString().slice(0, 10);
    datesArray.push(convertNewDate);
  }
  return datesArray;
};

export { getDates };
