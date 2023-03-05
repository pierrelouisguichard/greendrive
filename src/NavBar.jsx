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
        marginLeft: '35px'
      }
      
      const buttonStyle = {
        textDecoration: 'none',
        background: 'white',
        padding: '10px',
        color: '#20782f',
        borderRadius: '30px'
      }
      

  return (
    <nav>
      <ul style={navStyle}>
        <li style={buttonStyle}><a href="#">Home</a></li>
        <li style={buttonStyle}><a href="#">About</a></li>
        <li style={buttonStyle}><a href="#">Services</a></li>
        <li style={buttonStyle}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;