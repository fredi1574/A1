import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import About from "./pages/About";
import Cards from "./components/Cards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Weight from "./pages/weight/Weight";
import BloodPressure from "./pages/bloodPressure/BloodPressure";
import Sleep from "./pages/sleep/Sleep";
import WaterIntake from "./pages/water/WaterIntake";
import Activity from "./pages/activity/Activity";
import BloodGlucose from "./pages/bloodGlucose/BloodGlucose";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Cards"
          element={
            <MainLayout backgroundColor="bg-[#d8f1ff] dark:bg-darkBackground">
              <Cards />
            </MainLayout>
          }
        />
        <Route
          path="/About"
          element={
            <MainLayout backgroundColor="bg-[#d8f1ff] dark:bg-darkBackground">
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/Contact"
          element={
            <MainLayout backgroundColor="bg-[#d8f1ff] dark:bg-darkBackground">
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/Weight"
          element={
            <MainLayout backgroundColor="bg-[#F5FFF2] dark:bg-darkBackground">
              <Weight />
            </MainLayout>
          }
        />
        <Route
          path="/bloodPressure"
          element={
            <MainLayout backgroundColor="bg-[#FFEFF8] dark:bg-darkBackground">
              <BloodPressure />
            </MainLayout>
          }
        />
        <Route
          path="/sleep"
          element={
            <MainLayout backgroundColor="bg-[#fbf3ff] dark:bg-darkBackground">
              <Sleep />
            </MainLayout>
          }
        />
        <Route
          path="/Activity"
          element={
            <MainLayout backgroundColor="bg-[#FFF7EB] dark:bg-darkBackground">
              <Activity />
            </MainLayout>
          }
        />
        <Route
          path="/WaterIntake"
          element={
            <MainLayout backgroundColor="bg-[#E9FBFF] dark:bg-darkBackground">
              <WaterIntake />
            </MainLayout>
          }
        />
        <Route
          path="/BloodGlucose"
          element={
            <MainLayout backgroundColor="bg-[#F8F1F1] dark:bg-darkBackground">
              <BloodGlucose />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
