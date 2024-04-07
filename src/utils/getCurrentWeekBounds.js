const getCurrentWeekBounds = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const sunday = new Date(today);
  const saturday = new Date(today);

  const diff = currentDay === 0 ? 0 : 7 - currentDay;

  sunday.setDate(sunday.getDate() - currentDay); // Set to Sunday of current week
  saturday.setDate(sunday.getDate() + 6); // Set to Saturday of current week

  return { sunday, saturday };
};

export default getCurrentWeekBounds;
