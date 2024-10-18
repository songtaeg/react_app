import React, { useContext } from 'react';
import { ThemeContext } from '../App3';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff', 
    color: theme === 'dark' ? '#fff' : '#000', 
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <header className="header" style={headerStyle}>
      <h1>context 실습</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        테마변경
      </button>
    </header>
  );
}

export default Header;
