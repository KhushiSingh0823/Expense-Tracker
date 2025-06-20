﻿import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const isPasswordType = type === 'password';
  const inputType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}

      <div className="relative flex items-center border border-gray-600 rounded-md px-4 py-2 bg-[#1a1a1a] shadow-md">
        <input
          type={inputType}
          placeholder={placeholder}
          autoComplete="new-password"
          className="w-full bg-transparent outline-none text-sm text-white pr-8"
          value={value}
          onChange={onChange}
        />

        {isPasswordType && (
          <div
            className="absolute right-4 text-gray-400 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
