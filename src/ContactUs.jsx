import React from 'react'

function ContactUs() {
  return (
    <div style={container}>
        <div style={{...position, left: '20%'}}>
            <b>Our Office</b> <br/>
            Office 3A-C2 <br/>
            Business Gate Complex <br/>
            London <br/>
            W2T 4HE <br/>
            United Kingdom <br/>
            contact@greendrive.co.uk
        </div>
        <div style={{...position, top: '47%'}}>
            Copyright © 2023 All Rights Reserved
        </div>
    </div>
  )
}

const container = {
    backgroundColor: '#035F48',
    height: '50vh',
    width: '100vw',
    fontFamily: 'Bahnschrift, sans-serif',
    color: 'white',
    fontSize: '14px',
}

const position = {
    position: 'absolute', 
    top: '30%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
}

export default ContactUs