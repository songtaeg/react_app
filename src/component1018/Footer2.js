import React, { useContext } from 'react';
import { ThemeContext } from '../App3';
function Footer() {
  const { theme } = useContext(ThemeContext);
  const footerStyle = {
    backgroundColor: theme === 'dark' ? '#aaa' : '#fff', 
    color: theme === 'dark' ? '#fff' : '#000', 
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };
  return (
    <footer className="footer" style={footerStyle}>
      <p>푸터~~</p>
    </footer>
  );
}

export default Footer;
