import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from './context/userContext';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
      <div className="bg-[#1a1a1a] min-h-screen text-gray-200">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        <Toaster 
          toastOptions={{
            className: "",
            style: {
              fontSize: '13px',
              background: '#2a2a2a',
              color: '#f0f0f0',
            },
          }}
        />
      </div>
    </UserProvider>
  );
};

export default App;

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null; 
};
