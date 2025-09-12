import React, { createContext } from "react"
import run from '../gimini';
export const datacontext = createContext();

function UserContext({ children }) {
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "hi-GB"; 
    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt) {
    let text = await run(prompt)
    console.log(text)
    speak(text)
  }

  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;

    console.log("Heard:", transcript);
    aiResponse(transcript);
  };

  let value = {
    recognition
    // speak,
    // aiResponse,
  };

  return (
    <div>
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
    </div>
  );
}

export default UserContext;
