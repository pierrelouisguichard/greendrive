import React from 'react'

function Login() {
    return (
        <div style={background}>
            <div style={rectangle}>
                <div style={login}>Login</div>
                <div style={email}>Email</div>  
                <input type="text" style={emailField}></input>
                <div style={password}>Password</div>
                <input type="password" style={passwordField}></input>
                <a style={forgotPassword} href='/'>Forgot password?</a>
                <a style={loginButton} href='/'>Login</a>
                <a style={registerButton} href='/'>Register</a>
            </div>
        </div>
    )
}

const background = {
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
  }

const rectangle = {
    backgroundColor: '#035F48',
    borderRadius: '20px',
    width: '600px', 
    height: '750px',
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontFamily: 'Bahnschrift, sans-serif'
}

const login = {
    position: 'absolute', 
    top: '15%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    fontSize: '60px',
    fontWeight: 'bold'
}

const email = {
    position: 'absolute', 
    top: '30%', 
    left: '20%', 
    transform: 'translate(-50%, -50%)',
    fontSize: '18px',
    fontWeight: 'normal'
}

const emailField = {
    backgroundColor: '#035F48',
    width: '440px',
    color: 'white',
    position: 'absolute', 
    top: '37%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    fontSize: '18px', 
    fontWeight: 'normal',
    border: 'none',
    borderBottom: '3px solid white',
}

const password = {
    position: 'absolute', 
    top: '48%', 
    left: '20%', 
    transform: 'translate(-50%, -50%)',
    fontSize: '18px',
    fontWeight: 'normal'
}

const passwordField = {
    backgroundColor: '#035F48',
    width: '440px',
    color: 'white',
    position: 'absolute', 
    top: '55%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    fontSize: '18px', 
    fontWeight: 'normal',
    border: 'none',
    borderBottom: '3px solid white',
}

const forgotPassword = {
    textDecoration: 'none',
    color: '#72A699',
    position: 'absolute', 
    top: '60%', 
    left: '77%', 
    transform: 'translate(-50%, -50%)',
    fontSize: '15px',
    fontWeight: 'normal'
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
    alignItems: 'center'
  };

const registerButton = {
    color: 'white',
    textDecoration: 'none',
    position: 'absolute', 
    top: '87%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    fontSize: '25px',
    fontWeight: 'bold'
}

export default Login
