import { EmptyGlass, GlassWithWater } from "./Glasses";
import WaterDescription from "./waterDescription";
import Header from "../../components/Header";

import { useState, useRef } from "react";

const WaterIntake = () => {
  // Initialize the current date
  const currentDate = new Date().toLocaleDateString();

  // Retrieve the previous day's date and count from localStorage
  const prevDate = localStorage.getItem("waterDate");
  const prevCount =
    prevDate === currentDate
      ? parseInt(localStorage.getItem("waterIntake"))
      : 0;

  const [numberOfGlassesDrank, setNumberOfGlassesDrank] = useState(prevCount);
  const [goal, setGoal] = useState(8);
  const goalRef = useRef(null);

  const glasses = Array(goal).fill(null);

  const addGlass = () => {
    if (numberOfGlassesDrank < goal) {
      const newCount = numberOfGlassesDrank + 1;
      setNumberOfGlassesDrank(newCount);
      localStorage.setItem("waterIntake", newCount);
      localStorage.setItem("waterDate", currentDate); // Update the date in localStorage
    }
  };

  const removeGlass = () => {
    if (numberOfGlassesDrank > 0) {
      const newCount = numberOfGlassesDrank - 1;
      setNumberOfGlassesDrank(newCount);
      localStorage.setItem("waterIntake", newCount);
      localStorage.setItem("waterDate", currentDate); // Update the date in localStorage
    }
  };

  const handleGoalChange = () => {
    const newGoal = parseInt(goalRef.current.value);
    if (newGoal === 0 || newGoal > 50) {
      return;
    }
    setGoal(newGoal);
    localStorage.setItem("waterGoal", newGoal);
  };

  return (
    <div>
      <Header
        backgroundColor="bg-[#2686BA]"
        darkBackgroundColor="dark:bg-[#2e6c8d]"
        hoverColor="hover:bg-[#45A5D9]"
      />
      <div className="lg:w-5/6 md:w-full lg:px-10 md:px-5 h-full m-[0_auto]">
        <h1 className="text-3xl text-center m-[0_auto] my-8 pb-2 text-waterIntake-primary border-b-2 border-waterIntake-primary">
          Water intake
        </h1>
        <div className="bg-waterIntake-background text-waterIntake-primary text-center my-5 w-1/2 m-[0_auto] rounded-xl"></div>
        <div className="flex m-[0_auto] justify-center size-7/8 py-6 rounded-3xl">
          {glasses.map((_, index) =>
            index >= numberOfGlassesDrank ? (
              <EmptyGlass key={index} />
            ) : (
              <GlassWithWater key={index} />
            )
          )}
        </div>
        <div className="flex justify-center gap-7">
          <button
            onClick={addGlass}
            className="bg-waterIntake-primary mt-4 rounded-md p-2 text-white duration-200 hover:bg-waterIntake-hover active:bg-waterIntake-active active:scale-90 active:duration-75 drop-shadow-lg"
          >
            Add a glass
          </button>
          <button
            onClick={removeGlass}
            className="bg-waterIntake-primary mt-4 rounded-md p-2 text-white duration-200 hover:bg-waterIntake-hover active:bg-waterIntake-active active:scale-90 active:duration-75 drop-shadow-lg"
          >
            Remove a glass
          </button>
        </div>
        <div className="flex w-2/3 justify-center gap-3 m-[0_auto]">
          <h2 className="pl-2 mt-6 ml-6 text-waterIntake-primary">
            Enter a new goal:
          </h2>
          <input
            type="number"
            min={0}
            defaultValue={goal}
            ref={goalRef}
            className="w-12 bg-waterIntake-background mt-4 rounded-md p-2 text-waterIntake-primary placeholder:text-waterIntake-primary"
          />
          <button
            onClick={handleGoalChange}
            className="bg-waterIntake-primary mt-4 rounded-md p-2 text-white duration-200 hover:bg-waterIntake-hover active:bg-waterIntake-active active:scale-90 active:duration-75 drop-shadow-lg"
          >
            Set a new goal
          </button>
        </div>
        <WaterDescription />
      </div>
    </div>
  );
};

export default WaterIntake;
