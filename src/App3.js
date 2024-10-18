import React, { createContext, useState } from 'react';
import Page from './component1018/Page2';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light'); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;