import YearChart from "./YearChart";

import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";
import MonthChart from "./MonthChart";
import WeightDescription from "./WeightDescription";
import Header from "../../components/Header";

const Weight = () => {
  const [selectedTab, setSelectedTab] = useState("monthly");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
          <TabContext value={selectedTab}>
            <TabList
              onChange={handleTabChange}
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#55A33E",
                },
                "& .MuiTab-root": {
                  width: "30%",
                  color: "#55A33E",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#55A33E",
                },
              }}
            >
              <Tab label="Monthly" value="monthly" />
              <Tab label="Yearly" value="yearly" />
            </TabList>
            <TabPanel value="monthly" className="m-[0_auto]">
              <MonthChart />
            </TabPanel>
            <TabPanel value="yearly" className="m-[0_auto]">
              <YearChart />
            </TabPanel>
          </TabContext>
        </div>
        <WeightDescription />
      </div>
    </div>
  );
};

export default Weight;
