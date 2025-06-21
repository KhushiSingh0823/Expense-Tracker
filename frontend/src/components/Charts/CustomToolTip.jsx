import React from 'react';

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 shadow-md rounded-lg p-2 border border-zinc-700">
        <p className="text-xs font-semibold text-purple-300 mb">{payload[0].name}</p>
        <p className="text-sm text-gray-300">
          Amount: <span className="text-sm font-medium text-white">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export default CustomToolTip;
