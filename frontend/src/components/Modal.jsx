import React from 'react';

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/20 dark:bg-black/40">
      <div className="relative bg-white dark:bg-[#1f1f1f] rounded-lg shadow-lg w-full max-w-md mx-4">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            type="button"
            className="text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={onClose}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal body */}
        <div className="p-4 text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
