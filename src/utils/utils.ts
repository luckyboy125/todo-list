export const getDateByTimeStamp = (timestamp: number) => {
  const dateObj = new Date(timestamp);
  const dateString = dateObj.toLocaleDateString();
  const timeString = dateObj.toLocaleTimeString();

  return `${dateString} ${timeString}`;
};
