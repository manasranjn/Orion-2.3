import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "01",
    uv: 1000,
    pv: 400,
    amt: 200,
  },
  {
    name: "02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "08",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "09",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "12",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// #endregion
const Revenue = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "600px",
        maxHeight: "80vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#4f7" background={{ fill: "#5ee" }} />
      <Bar dataKey="uv" fill="#89d" />
    </BarChart>
  );
};

export default Revenue;
