import { useRef, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { months } from "../../utils/timeArrays";

const YearChart = () => {
  const weightRef = useRef();
  const monthRef = useRef();
  const [data, setData] = useState(
    months.map((month) => ({
      month,
      weight: 0,
    }))
  );

  const addWeight = () => {
    const enteredWeight = parseInt(weightRef.current.value, 10);
    const selectedMonth = monthRef.current.value;

    const updatedData = [...data];
    const selectedMonthIndex = updatedData.findIndex(
      (month) => month.month === selectedMonth
    );

    if (selectedMonthIndex !== -1) {
      updatedData[selectedMonthIndex] = {
        month: selectedMonth,
        weight: enteredWeight,
      };
    }

    setData(updatedData);

    weightRef.current.value = "";
    monthRef.current.value = new Date().toLocaleString("default", {
      month: "long",
    });
  };

  return (
    <div>
      <LineChart
        width={window.innerWidth * 0.6}
        height={window.innerHeight * 0.4}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="weight" stroke="#55A33E" />
        <CartesianGrid stroke="#B5DB80" strokeDasharray="10" />
        <XAxis
          dataKey="month"
          stroke="#55A33E"
          label={{ value: "Month", position: "insideBottom", dy: 10 }}
        />
        <YAxis
          stroke="#55A33E"
          label={{ value: "Kg", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default YearChart;
