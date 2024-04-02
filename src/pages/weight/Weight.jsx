import { Tabs, Tab } from "../../components/Tabs";

import MonthChart from "./MonthChart";
import YearChart from "./YearChart";
import WeightDescription from "./WeightDescription";
import Header from "../../components/Header";
import { useEffect } from "react";

const Weight = () => {
  useEffect(() => {
    alert("This component is still under construction");
  });

  return (
    <div>
      <Header
        backgroundColor="bg-[#55A33E]"
        darkBackgroundColor="dark:bg-[#2E5821]"
        hoverColor="hover:bg-[#B5DB80]"
      />
      <div className="lg:w-5/6 md:w-full lg:px-10 md:px-5 h-full m-[0_auto]">
        <h1 className="text-3xl text-weight-primary dark:text-weightDark-primary border-b-2 border-weight-primary dark:border-weightDark-primary text-center pb-6 my-6">
          Weight
        </h1>
        <div className="flex flex-col justify-center w-full rounded-xl">
          <Tabs borderColor="border-b-[#55A33E]" color="text-[#55A33E]">
            <Tab label="Monthly" backgroundColor="bg-[#55A33E]">
              <MonthChart />
            </Tab>
            <Tab label="Yearly" backgroundColor="bg-[#55A33E]">
              <YearChart />
            </Tab>
          </Tabs>
        </div>
        <WeightDescription />
      </div>
    </div>
  );
};

export default Weight;
