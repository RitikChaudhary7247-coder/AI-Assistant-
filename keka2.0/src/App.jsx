import React, { useContext } from 'react';
// import React from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { FaMicrophoneAlt } from "react-icons/fa";
import { datacontext } from './context/userContext';
function App() {
 let a=useContext(datacontext)
 console.log(a)
 
  return (
    <div className='main'>
       <img src={va} alt="" id="keka"/>
       <span>I'm Keka2.0, Your Advanced Virtual Assistant</span>
       <button>Click here <FaMicrophoneAlt /></button>
    </div>
  )
}

export default App
