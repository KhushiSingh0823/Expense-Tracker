﻿import React, { useEffect, useState } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6", "#16a34a", "#db2777", "#0284c7", "#ca8a04"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const grouped = {};

    data?.forEach((item) => {
      if (!grouped[item.source]) {
        grouped[item.source] = 0;
      }
      grouped[item.source] += item.amount;
    });

    const dataArr = Object.entries(grouped).map(([name, amount]) => ({
      name,
      amount,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
