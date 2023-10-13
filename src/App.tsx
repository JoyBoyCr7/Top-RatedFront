// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Link, Form } from 'react-router-dom'
function App() {

  return (
    <>
    <Link to={"/signup"}> <button style={{backgroundColor: "red"}}>Signup</button></Link>
    <Link to={"/login"}> <button>login</button></Link>
    <Form action="/logout" method="post"> <button>logout</button></Form> 
    <Outlet/>
    </>
  )
}

export default App
