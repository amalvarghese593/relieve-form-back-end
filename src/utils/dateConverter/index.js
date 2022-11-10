exports.dateConverter = (date) => {
  const currentDate = date || new Date();
  const yr = currentDate.getFullYear();
  let day = currentDate.getDay();
  if (day < 10) day = `0${day}`;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  return { day, month, yr };
};
