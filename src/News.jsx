import React from 'react';

function News() {
  return (
    <div style={background}>
      <a style={loginButton} href='/'>Login</a>
    </div>
  )
}

const loginButton = {
  textDecoration: 'none',
  width: '440px',
  height: '60px',
  background: 'white',
  borderRadius: '6px',
  color: '#035F48',
  position: 'absolute',
  top: '75%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '25px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const background = {
  backgroundColor: 'black',
  height: '100vh',
  width: '100vw',
}

export default News;
