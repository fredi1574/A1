import WeeklySteps from "./WeeklySteps";
import MonthlySteps from "./MonthlySteps";
import Sports from "./Sports";
import Header from "../../components/Header";

import { Tabs, Tab } from "../../components/Tabs";
import ActivityDescription from "./ActivityDescription";

const Activity = () => {
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
        <Tabs borderColor="border-b-[#FBB24B]" color="text-[#FBB24B]">
          <Tab label="Weekly" backgroundColor="bg-[#FBB24B]">
            <WeeklySteps />
          </Tab>
          <Tab label="Monthly">
            <MonthlySteps />
          </Tab>
          <Tab label="Sports">
            <Sports />
          </Tab>
        </Tabs>
        <ActivityDescription />
      </div>
    </div>
  );
};

export default Activity;
