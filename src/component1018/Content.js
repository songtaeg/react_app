import React, { useContext } from 'react';
import { ThemeContext } from '../App3';

function Content() {
  const { theme } = useContext(ThemeContext);
  const contentStyle = {
    backgroundColor: theme === 'dark' ? '#666' : '#fff', 
    color: theme === 'dark' ? '#fff' : '#000', 
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <div style={contentStyle}>
      <p>현재 색상 모드: {theme}.</p>
    </div>
  );
}

export default Content;
