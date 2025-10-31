import React from "react";
import Revenue from "./Revenue";
import PieChartInGrid from "./MyPie";

const Dashboard = () => {
  return (
    <div className="col-span-10 p-12">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Revenue />
        <PieChartInGrid />
      </div>
    </div>
  );
};

export default Dashboard;
