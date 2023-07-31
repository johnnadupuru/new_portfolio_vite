import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from './components/Projects/Projects'

import './App.css'

const App=()=> {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/projects" Component={Projects}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
