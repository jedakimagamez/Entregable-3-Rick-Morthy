import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import bg_header from "./assets/img/bg_header.png"

function App() {

  return (
    <div className="App">
      <header>
        <img width="100%" src={bg_header} alt="" />
      </header>
      <Main />
    </div>
  )
}

export default App
