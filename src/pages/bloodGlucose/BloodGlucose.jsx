import Header from "../../components/Header";

import DailyGlucose from "./DailyGlucose";
import MonthlyGlucose from "./MonthlyGlucose";
import BloodGlucoseDescription from "./BloodGlucoseDescription";

import { Tab, Tabs } from "../../components/Tabs";

const BloodGlucose = () => {
  const isDarkMode = localStorage.getItem("theme") === "dark";

  return (
    <div>
      <Header
        backgroundColor="bg-[#850000]"
        darkBackgroundColor="dark:bg-[#660000]"
        hoverColor="hover:bg-[#a03131]"
      />
      <div className="lg:w-5/6 md:w-full lg:px-10 md:px-5 h-full m-[0_auto]">
        <h1 className="text-3xl text-bloodGlucose-primary dark:text-bloodGlucoseDark-primary border-b-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary text-center pb-6 my-6">
          Blood Glucose
        </h1>
        <div className="flex flex-col justify-center w-full rounded-xl">
          <Tabs borderColor="border-b-[#FF0A0A]" color="text-[#FF0A0A]">
            <Tab label="Weekly" backgroundColor="bg-[#FF0A0A]">
              <DailyGlucose />
            </Tab>
            <Tab label="Monthly">
              <MonthlyGlucose />
            </Tab>
          </Tabs>
        </div>
        <BloodGlucoseDescription />
      </div>
    </div>
  );
};

export default BloodGlucose;
