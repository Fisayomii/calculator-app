import React, { useState, useEffect } from 'react'

import './App.css'
import './index.css'
import Calc from './components/calc'
import ToggleButton from './components/togglebutton'

function App() {
  // For dark mode, a personal preference
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="absolute top-4 right-4">
        <ToggleButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <Calc />
    </div>
    
    </>
  )
}

export default App
