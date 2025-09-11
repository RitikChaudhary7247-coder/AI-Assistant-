import React, { createContext, useEffect, useRef } from 'react'
// import run from '../gimini.js';

export const datacontext = createContext()

function userContext({ children }) {
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB" // or "hi-IN" for Hindi
    window.speechSynthesis.speak(text_speak)
  }

  async function aiResponse(prompt) {
    let text = await run(prompt)
    return text;
  }

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.onresult = (e) => {
      let currentIndex = e.resultIndex
      let transcript = e.results[currentIndex][0].transcript

      console.log(transcript);
      aiResponse(transcript)
    }
    recognitionRef.current = recognition;
  }, []);

  let value = {
    recognition: recognitionRef.current,
    speak,
    aiResponse
  }

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  )
}

export default userContext