import React from 'react';

function NavBar() {
  const navStyle = {
    letterSpacing: '2px',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '2em',
    position: 'absolute',
    top: '7%',
    right: '5%',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    marginLeft: '35px',
  };

  const buttonStyle = {
    textDecoration: 'none',
    background: 'white',
    padding: '10px',
    color: '#20782f',
    borderRadius: '30px',
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <a style={buttonStyle} href='/forum'>Forum</a>
        </li>
        <li>
          <a style={buttonStyle} href='/news'>News</a>
        </li>
        <li style={buttonStyle}>Button 3</li>
      </ul>
    </nav>
  );
}

export default NavBar;
