import React, { useContext } from 'react';
import "./App.css";
import va from "./assets/ai.png";
import { FaMicrophoneAlt } from "react-icons/fa";
import { datacontext } from './context/userContext';
import speakimg from './assets/speak.gif';
import aivo from './assets/aiVoice.gif';

function App() {
  const { recognition, speaking, setSpeaking, prompt, response, setPrompt, setResponse } = useContext(datacontext);

  return (
    <div className="main">
      <img src={va} alt="AI Logo" id="keka" />
      <span>I'm Keka2.0, Your Advanced Virtual Assistant</span>

      {!speaking ? (
        <button
          onClick={() => {
            setPrompt("listening...");
            setSpeaking(true);
            setResponse(false)
            recognition.start();
          }}
        >
          Click here <FaMicrophoneAlt />
        </button>
      ) : (
        <div className="response">
          {!response ? (
            <img src={speakimg} alt="listening logo" id="speak" />
          ) : (
            <img src={aivo} alt="AI speaking logo" id="aigif" />
          )}
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}

export default App;
