﻿import React from 'react';
import { getInitials } from '../../utils/helper';

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={`${width || 'w-12'} ${height || 'h-12'} ${
        style || ''
      } flex items-center justify-center rounded-full text-gray-100 font-medium bg-zinc-800`}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;
