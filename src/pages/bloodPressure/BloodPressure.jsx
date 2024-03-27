import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";

import { useState } from "react";
import PressureDescription from "./PressureDescription";
import DailyChart from "./DailyChart";
import MonthlyPressure from "./MonthlyPressure";
import Header from "../../components/Header";

const BloodPressure = () => {
  const [selectedTab, setSelectedTab] = useState("daily");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
        <TabContext value={selectedTab}>
          <TabList
            centered
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#FF5CB6",
              },
              "& .MuiTab-root": {
                width: "30%",
                color: "#FF5CB6",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#FF5CB6",
              },
            }}
          >
            <Tab label="Daily" value="daily" />
            <Tab label="Monthly" value="monthly" />
          </TabList>
          <TabPanel value="daily">
            <DailyChart />
          </TabPanel>
          <TabPanel value="monthly">
            <MonthlyPressure />
          </TabPanel>
        </TabContext>
        <PressureDescription />
      </div>
    </div>
  );
};

export default BloodPressure;
