import { useState } from "react";

import DailyGlucose from "./DailyGlucose";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";

import MonthlyGlucose from "./MonthlyGlucose";
import BloodGlucoseDescription from "./BloodGlucoseDescription";
import Header from "../../components/Header";

const BloodGlucose = () => {
  const isDarkMode = localStorage.getItem("theme") === "dark";

  const [selectedTab, setSelectedTab] = useState("daily");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
          <TabContext value={selectedTab}>
            <TabList
              onChange={handleTabChange}
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#FF0A0A",
                  borderRadius: "10px 10px 0 0",
                },
                "& .MuiTab-root": {
                  width: "30%",
                  color: "#FF0A0A",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#FF0A0A",
                },
              }}
            >
              <Tab label="Daily" value="daily" />
              <Tab label="Monthly" value="monthly" />
            </TabList>
            <TabPanel value="daily" className="m-[0_auto]">
              <DailyGlucose />
            </TabPanel>
            <TabPanel value="monthly" className="m-[0_auto]">
              <MonthlyGlucose />
            </TabPanel>
          </TabContext>
        </div>
        <BloodGlucoseDescription />
      </div>
    </div>
  );
};

export default BloodGlucose;
