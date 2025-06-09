import React from 'react';
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";


const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 w-72 z-30">
      <div className={`w-12 h-12 flex items-center justify-center text-white ${color} rounded-full drop-shadow-xl text-xl`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h4 className="text-xl font-semibold text-gray-800">{value}</h4>
      </div>
    </div>
  );
};


const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 relative">
   
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md z-10">
        <h2 className="text-lg font-bold mb-6 text-black">Expense Tracker</h2>
        {children}
      </div>

     
      <div className="hidden md:block w-[40vw] h-screen bg-red-50 bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">

    
        <div className="absolute top-[20%] right-[12%]">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income And Expenses"
            value="$430.00"
            color="bg-red-500"
          />
        </div>

       
        <div className="w-48 h-48 rounded-[40px] bg-red-500 absolute -top-7 -left-5 z-0" />

       
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-red-600 absolute top-[35%] right-10 overflow-hidden z-10">
          <img
            src={CARD_2}
            alt="Decorative card"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
