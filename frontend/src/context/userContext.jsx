import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const url = import.meta.env.VITE_API_BASE_URL;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    setUser(null);
  };

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
