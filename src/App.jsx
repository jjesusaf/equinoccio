import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'  
import Section3 from './components/Section3'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default App
