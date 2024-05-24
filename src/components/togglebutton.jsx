
import React from 'react';

const ToggleButton = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none"
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m4.22 1.47l-.707.707M21 12h-1m-1.47-4.22l-.707.707M12 21v-1m-4.22-1.47l.707-.707M3 12H2m1.47-4.22l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m4.22 1.47l-.707.707M21 12h-1m-1.47-4.22l-.707.707M12 21v-1m-4.22-1.47l.707-.707M3 12H2m1.47-4.22l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleButton;
