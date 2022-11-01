import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'  
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default App
