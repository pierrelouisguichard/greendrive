import React from 'react'

function Register() {
    return (
        <div style={container}>
            <div style={{...position, ...rectangle}}>
            <div style={{...position, ...title}}>Register</div>
            <div style={{...position, ...titles, top: '21%'}}>First Name</div>  
            <input type="text" style={{...position, ...textFields, top: '28%'}}></input>
            <div style={{...position, ...titles, top: '33%'}}>Last Name</div>  
            <input type="text" style={{...position, ...textFields, top: '40%'}}></input>
            <div style={{...position, ...titles, top: '45%'}}>Email</div> 
            <input type="text" style={{...position, ...textFields, top: '52%'}}></input>
            <div style={{...position, ...titles, top: '57%'}}>Password</div>
            <input type="password" style={{...position, ...textFields, top: '64%'}}></input>
            <div style={{...position, ...titles, top: '69%'}}>Re-Enter Password</div>                              
            <input type="password" style={{...position, ...textFields, top: '76%'}}></input>
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
    fontSize: '12px',
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
    height: '650px',
}

const title = {
    fontSize: '45px',
    fontWeight: 'bold', 
    top: '13%'
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
    borderBottom: '3px solid white',
}

const registerButton = {
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
    top: '87%'
  };

export default Register