// useCurrentWeekBounds.jsx

import { useState, useEffect } from "react";

const useCurrentWeekBounds = () => {
  const [weekBounds, setWeekBounds] = useState({
    sunday: null,
    saturday: null,
  });

  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDay();
    const sunday = new Date(today);
    const saturday = new Date(today);

    // Calculate the difference between current day and Sunday (0: Sunday, 1: Monday, ..., 6: Saturday)
    const diff = currentDay === 0 ? 0 : 7 - currentDay;

    sunday.setDate(sunday.getDate() - currentDay); // Set to Sunday of current week
    saturday.setDate(saturday.getDate() + diff - 1); // Set to Saturday of current week

    setWeekBounds({ sunday, saturday });
  }, []);

  return weekBounds;
};

export default useCurrentWeekBounds;
