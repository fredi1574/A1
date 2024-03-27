import { Tabs, Tab } from "../../components/Tabs";

import Header from "../../components/Header";
import SleepDescription from "./SleepDescription";
import WeekChart from "./WeekChart";
import MonthChart from "./MonthChart";

const Sleep = () => {
  return (
    <div>
      <Header
        backgroundColor="bg-[#A15BEC]"
        darkBackgroundColor="dark:bg-[#A15BEC]"
        hoverColor="hover:bg-[#C499F3]"
      />
      <div className="lg:w-5/6 md:w-full lg:px-10 md:px-5 h-full m-[0_auto]">
        <h1 className="text-3xl text-sleep-primary border-b-2 border-sleep-primary text-center pb-6 my-6">
          Sleep
        </h1>
        <Tabs borderColor="border-b-[#A15BEC]" color="text-[#A15BEC]">
          <Tab label="Weekly" backgroundColor="bg-[#A15BEC]">
            <WeekChart />
          </Tab>
          <Tab label="Monthly">
            <MonthChart />
          </Tab>
        </Tabs>
        <SleepDescription />
      </div>
    </div>
  );
};

export default Sleep;
