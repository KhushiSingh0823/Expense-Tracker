import React from 'react';

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className="bg-[#1a1a1a] text-gray-200 p-4 rounded-lg shadow-md">
      <p className="text-sm">{content}</p>
      <div className="flex justify-end mt-6">
        <button 
          type="button"
          className="add-btn add-btn-fill"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
