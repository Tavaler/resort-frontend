import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Register from './page/Register'
import Navbar from './components/Navbar'
import Room from './page/layout/Room'
import Login from './page/Login'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './page/layout/Home'
import Menu from './page/layout/Menu'
import LoginV2 from './page/LoginV2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginV2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/menus" element={<Menu />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  );
}

export default App
