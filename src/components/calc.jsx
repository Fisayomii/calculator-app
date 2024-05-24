import React, { useState } from 'react'
import { evaluateExpression } from './evaluate';

const Calc = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
        setResult(evaluateExpression(input)); // use the evaluate expression function to run the calculations
    } else if (value === 'C') {
      setInput('');
      setResult('');
    }  else if (value === 'del') {
      handleBackspace(); // to delete a number that was mistakenly inputed
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-700">
    <div className="mb-4">
      <input
        type="text"
        value={input}
        readOnly
        className="w-full p-2 text-xl text-right border-b dark:border-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-100"
      />
      <div className="text-right text-gray-600 dark:text-gray-400 mt-1">{result}</div>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '%', '+', 'C', '=', 'del'].map((btn) => (
        <button
          key={btn}
          onClick={() => handleButtonClick(btn)}
          className="p-4 text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-lg"
        >
          {btn}
        </button>
      ))}
    </div>
  </div>
);
};

export default Calc