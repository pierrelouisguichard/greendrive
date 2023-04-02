import React from 'react'
import Home from './Home'
import News from './News'
import Forum from './Forum'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
    
  )
}

export default App