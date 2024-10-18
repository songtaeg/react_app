import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function Header() {
  const {user} = useContext(UserContext);
  return (
    <header className="header">
      <h1>환영</h1>
      {user && <p>hello, {user.name}-{user.email}</p>}
    </header>
  );
}

export default Header;
