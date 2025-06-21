import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const url = import.meta.env.VITE_API_BASE_URL;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // ✅ Sync dark mode class with document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // ✅ Update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  // ✅ Clear user on logout
  const clearUser = () => {
    setUser(null);
  };

  // ✅ Login user via API
  const loginUser = async (email, password) => {
    const res = await axios.post(`${url}/api/users/login`, {
      email,
      password,
    });
    setUser(res.data.user);
    return res.data;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
        loginUser,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
