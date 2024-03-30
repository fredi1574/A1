import { useEffect } from "react";

import { Tabs, Tab } from "../../components/Tabs";

import PressureDescription from "./PressureDescription";
import DailyChart from "./DailyChart";
import MonthlyPressure from "./MonthlyPressure";
import Header from "../../components/Header";

const BloodPressure = () => {
  useEffect(() => {
    alert("This component is still under construction");
  });
  return (
    <div>
      <Header
        backgroundColor="bg-[#FF5CB6]"
        darkBackgroundColor="dark:bg-[#CC0074]"
        hoverColor="hover:bg-[#FF99D3]"
      />
      <div className="lg:w-5/6 md:w-full lg:px-10 md:px-5 h-full m-[0_auto]">
        <h1 className="text-3xl text-pressure-primary border-b-2 border-pressure-primary text-center pb-6 my-6">
          Blood Pressure
        </h1>
        <Tabs borderColor="border-b-[#FF5CB6]" color="text-[#FF5CB6]">
          <Tab label="Daily" backgroundColor="bg-[#FF5CB6]">
            <DailyChart />
          </Tab>
          <Tab label="Monthly">
            <MonthlyPressure />
          </Tab>
        </Tabs>
        <PressureDescription />
      </div>
    </div>
  );
};

export default BloodPressure;
