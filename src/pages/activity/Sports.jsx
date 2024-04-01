import { useEffect, useRef, useState } from "react";
import { sportStyle } from "../../utils/sports";
import axios from "axios";

const Sports = () => {
  const username = localStorage.getItem("username");

  const sportStlyeRef = useRef();
  const dateRef = useRef();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI + `/activity/getActivity/${username}`
        );

        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    fetchActivities();
  }, [username]);

  const addSport = async () => {
    const enteredDate = new Date(dateRef.current.value);
    const selectedSportIndex = parseInt(sportStlyeRef.current.value, 10);
    const selectedSport = sportStyle[selectedSportIndex];

    const newActivity = {
      username,
      date: enteredDate.toLocaleDateString("en-il", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      activityType: selectedSport,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URI + "/activity/addActivity",
        newActivity
      );
      setActivities([...activities, newActivity]);

      console.log("Activity added:", response.data);
    } catch (error) {
      console.error("Error adding activity:", error);
    }

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
            <span>{activity.activityType}</span>
            <span>
              {new Date(activity.date).toLocaleDateString("en-il", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
