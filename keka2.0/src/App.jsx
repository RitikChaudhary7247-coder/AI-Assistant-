import React, { useContext } from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { FaMicrophoneAlt } from "react-icons/fa";
import { datacontext } from './context/userContext';
import speakimg from '../src/assets/speak.gif'


function App() {
  let { recognition, speaking, setSpeaking } = useContext(datacontext)


  return (
    <div className='main'>3
      <img src={va} alt="" id="keka" />
      <span>I'm Keka2.0, Your Advanced Virtual Assistant</span>
      {!speaking ?
        <button onClick={() => {
          setSpeaking(true)
          recognition.start()
        }}>Click here <FaMicrophoneAlt /></button>
        :
        <div>
          
      <img src={speakimg} alt="lisining logo" id="speak" />
      <p>listening</p>
        </div>

      }

        </div>
  )
}

      export default App
