import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const CustomBarChart = ({ data = [] }) => {
  const getBarColor = (index) => (index % 2 === 0 ? "#875cf5" : "#cfbefb");

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { month, amount, source } = payload[0].payload;

      return (
        <div className="bg-zinc-800 shadow-md rounded-lg p-2 border border-zinc-700">
          <p className="text-xs font-semibold text-purple-300 mb-1">{source}</p>
          <p className="text-sm text-gray-300">
            Amount: <span className="text-sm font-medium text-white">${amount}</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">Date: {month}</p>
        </div>
      );
    }
    return null;
  };

  if (!data.length) {
    return (
      <div className="text-sm text-center text-gray-400 mt-10">
        No income data to display.
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#ccc' }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: '#ccc' }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
