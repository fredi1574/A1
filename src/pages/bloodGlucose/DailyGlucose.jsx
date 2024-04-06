import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { hours } from "../../utils/timeArrays";

const DailyGlucose = () => {
  const username = localStorage.getItem("username");

  const [bloodGlucose, setBloodGlucose] = useState(
    hours.map((hour) => ({ hour, glucose: 0 }))
  );
  const hourRef = useRef();
  const bloodGlucoseRef = useRef();

  useEffect(() => {
    const fetchGlucose = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI + `/bloodGlucose/getGlucose/${username}`
        );
        const data = response.data;

        // Update the state using the function provided by useState
        setBloodGlucose((prevState) => {
          const newGlucose = [...prevState];

          data.forEach((item) => {
            const hourIndex = item.hour;
            newGlucose[hourIndex] = item;
          });

          return newGlucose;
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchGlucose();
  }, [username]);

  const handleAddBloodGlucose = () => {
    const enteredBloodGlucose = parseInt(bloodGlucoseRef.current.value, 10);
    const enteredHour = parseInt(hourRef.current.value, 10);

    try {
      axios.post(import.meta.env.VITE_API_URI + `/bloodGlucose/addGlucose`, {
        username,
        hour: enteredHour,
        date: new Date().getTime(),
        glucose: enteredBloodGlucose,
      });
      console.log(username, enteredHour, enteredBloodGlucose);
    } catch (error) {
      console.error(error);
    }

    const updatedBloodGlucose = [...bloodGlucose];
    updatedBloodGlucose[enteredHour] = {
      hours: enteredHour,
      glucose: enteredBloodGlucose,
    };

    setBloodGlucose(updatedBloodGlucose);

    bloodGlucoseRef.current.value = "";
    hourRef.current.value = new Date().getHours();
  };

  return (
    <div>
      <div className="flex justify-center">
        <LineChart
          width={window.innerWidth * 0.75}
          height={window.innerHeight * 0.5}
          data={bloodGlucose}
          margin={{ top: 0, right: 5, bottom: 10, left: 0 }}
        >
          <Line
            type="Linear"
            dataKey="glucose"
            stroke="#FF0A0A"
            strokeWidth="2"
          />
          <CartesianGrid stroke="#C03535" opacity={0.5} strokeDasharray="10" />
          <XAxis
            dataKey="hour"
            stroke="#FF0A0A"
            label={{
              value: "hours",
              position: "insideBottom",
              dy: 10,
            }}
          />
          <YAxis
            stroke="#FF0A0A"
            label={{
              value: "mg/dL",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
        </LineChart>
      </div>
      <h1 className="text-xl text-bloodGlucose-primary dark:text-bloodGlucoseDark-primary text-center border-b-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary mt-6 mb-4 pb-2">
        Add Blood Glucose
      </h1>
      <div className="flex justify-center gap-4 text-md">
        <div className="flex-col">
          <div className="mt-2 text-bloodGlucose-primary dark:text-bloodGlucoseDark-primary">
            Hour
          </div>
          <input
            type="number"
            min={0}
            max={24}
            ref={hourRef}
            defaultValue={new Date().getHours()}
            className="text-bloodGlucose-text dark:text-white border-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary rounded-lg bg-bloodGlucose-background dark:bg-bloodGlucoseDark-button outline-none p-1"
          />
        </div>
        <input
          type="number"
          placeholder="mg/dL"
          min={0}
          ref={bloodGlucoseRef}
          className="w-1/6 text-bloodGlucose-text dark:text-white border-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary rounded-lg bg-bloodGlucose-background dark:bg-bloodGlucoseDark-button outline-none p-1 mt-8"
        ></input>
        <button
          onClick={handleAddBloodGlucose}
          className="bg-bloodGlucose-primary dark:bg-bloodGlucoseDark-primary w-1/6 mt-8 rounded-md p-1 text-white dark:text-bloodGlucoseDark-button
                   duration-200 hover:bg-bloodGlucose-hover active:bg-bloodGlucose-active active:scale-90 active:duration-75 drop-shadow-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DailyGlucose;
