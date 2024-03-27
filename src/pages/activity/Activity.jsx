import DailySteps from "./DailySteps";
import MonthlySteps from "./MonthlySteps";
import Sports from "./Sports";
import Header from "../../components/Header";

import { useState } from "react";

import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import ActivityDescription from "./ActivityDescription";

const Activity = () => {
  const [selectedTab, setSelectedTab] = useState("weekly");
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Header
        backgroundColor="bg-[#FBB24B]"
        darkBackgroundColor="dark:bg-[#FBB24B]"
        hoverColor="hover:bg-[#FDD49B]"
      />
      <div className="lg:w-5/6 md:w-full lg:px-10 md:px-5 h-full m-[0_auto]">
        <h1 className="text-3xl text-activity-primary border-b-2 border-activity-primary text-center pb-6 my-6">
          Activity
        </h1>
        <TabContext value={selectedTab}>
          <TabList
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#FBB24B",
              },
              "& .MuiTab-root": {
                width: "30%",
                color: "#FBB24B",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#FBB24B",
              },
            }}
          >
            <Tab label="Weekly Steps" value={"weekly"} />
            <Tab label="Monthly Steps" value={"monthly"} />
            <Tab label="Sports" value={"sports"} />
          </TabList>
          <TabPanel value="weekly">
            <DailySteps />
          </TabPanel>
          <TabPanel value="monthly">
            <MonthlySteps />
          </TabPanel>
          <TabPanel value="sports">
            <Sports />
          </TabPanel>
        </TabContext>
        <ActivityDescription />
      </div>
    </div>
  );
};

export default Activity;
