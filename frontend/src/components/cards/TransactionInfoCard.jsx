﻿import React from 'react';
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({ title, icon, date, amount, type, hideDeleteBtn, onDelete }) => {
  const getAmountStyles = () => {
    return type === "income"
      ? "bg-green-900 text-green-300"
      : "bg-red-900 text-red-300";
  };

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-200 bg-zinc-800 rounded-full">
        {icon ? (
          icon.includes("/icons/") ? (
            <img
              src={icon}
              alt={title}
              className="w-6 h-6"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : (
            <span className="text-xl">{icon}</span>
          )
        ) : (
          <LuUtensils className="w-6 h-6" />
        )}
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-100 font-medium">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>

      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
        {!hideDeleteBtn && (
          <button
            className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onDelete}
          >
            <LuTrash2 size={18} />
          </button>
        )}
        <h6 className="text-xs font-medium">
          {type === "income" ? "+" : "-"}${amount}
        </h6>
        {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
      </div>
    </div>
  );
};

export default TransactionInfoCard;
