import { useRef, useState } from "react";

const Sports = () => {
  const sportStyle = [
    "Running",
    "Cycling",
    "Swimming",
    "Dancing",
    "Jumping Rope",
    "Weight Lifting",
  ];

  const sportStlyeRef = useRef();
  const dateRef = useRef();
  const [activities, setActivities] = useState([]);

  const addSport = () => {
    const enteredDate = new Date(dateRef.current.value);

    // Check if entered date is valid
    if (isNaN(enteredDate)) {
      alert("Please enter a valid date.");
      return;
    }

    // Get the selected sport from the dropdown
    const selectedSportIndex = parseInt(sportStlyeRef.current.value, 10);
    const selectedSport = sportStyle[selectedSportIndex];

    const newActivity = {
      sport: selectedSport,
      date: enteredDate.toLocaleDateString("en-il", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setActivities([...activities, newActivity]);

    dateRef.current.value = new Date().toISOString().slice(0, 10);
  };

  return (
    <div className="m-[0_auto]">
      <div className="flex flex-col justify-center">
        <h1 className="text-xl text-activity-primary border-b-2 border-activity-primary text-center pb-6 my-6">
          Add your activities
        </h1>
        <div className="flex justify-center">
          <input
            ref={dateRef}
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            className="w-1/3 px-2 border-2 text-activity-text dark:text-white border-activity-primary dark:bg-activityDark-background rounded-lg bg-activity-background outline-none"
          />
          <select
            ref={sportStlyeRef}
            className="p-2 border-2 border-activity-primary dark:text-white dark:bg-activityDark-background rounded-lg bg-activity-background outline-none mx-4 text-activity-text"
          >
            {sportStyle.map((style, index) => (
              <option key={style} value={index}>
                {style}
              </option>
            ))}
          </select>
          <button
            className="bg-activity-primary dark:bg-activityDark-button p-2 rounded-lg text-activity-text hover:bg-activity-hover active:bg-activity-active"
            onClick={addSport}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`text-activity-text p-4 rounded-lg my-2 flex justify-between ${
              index % 2 === 0
                ? "bg-activity-background"
                : "bg-activity-hover dark:bg-activityDark-background dark:text-white"
            }`}
          >
            <span>{activity.sport}</span>
            <span>{activity.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
