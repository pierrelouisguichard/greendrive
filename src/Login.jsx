import React from 'react'

function Login() {
    return (
        <div style={container}>
            <div style={{...position, ...rectangle}}>
            <div style={{...position, ...title}}>Login</div>
            <div style={{...position, ...titles, top: '30%'}}>Email</div>  
            <input type="text" style={{...position, ...textFields, top: '40%'}}></input>
            <div style={{...position, ...titles, top: '50%'}}>Password</div>  
            <input type="password" style={{...position, ...textFields, top: '60%'}}></input>
            <a style={forgotPassword} href='/'>Forgot password?</a>
            <a style={{...position, ...LoginButton}} href='/'>Login</a>
            <a style={{...position, ...registerButton}} href='/'>Register</a>
            </div>
        </div>
    )
}

const container = {
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Bahnschrift, sans-serif',
    color: 'white',
    fontSize: '14px',
}

const forgotPassword = {
    textDecoration: 'none',
    color: '#72A699',
    position: 'absolute', 
    top: '65%', 
    left: '75.5%', 
    transform: 'translate(-50%, -50%)',
    fontSize: '12px',
    fontWeight: 'normal'
}

const position = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
}

const rectangle = {
    backgroundColor: '#035F48',
    borderRadius: '10px',
    width: '400px', 
    height: '500px',
}

const title = {
    fontSize: '45px',
    fontWeight: 'bold', 
    top: '18%'
}

const titles = {
    left: '12.5%',
    transform: 'none'
}

const textFields = {
    color: 'white',
    backgroundColor: 'rgb(0,0,0,0)',
    width: '299px',
    border: 'none',
    borderBottom: '2px solid white',
}

const LoginButton = {
    textDecoration: 'none',
    width: '299px',
    height: '45px',
    background: 'white',
    borderRadius: '3px',
    color: '#035F48',
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '76%'
  };

const registerButton = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    top: '90%'
  };

export default Login