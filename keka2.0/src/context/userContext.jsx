import React, { createContext } from 'react'
import { run } from 'keka2.0\src\gimini.js'
export const datacontext = createContext()

function userContext({ children }) {
  function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.volume=1;
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
  }
  async function aiResponse(prompt){
      let text=await run(prompt)
      console.log(text);
    
  }
  let spechRecognition = window.SpeechRecognition || wondow.
  webkitSpeechRecognition;

  let recognition=new spechRecognition()

  recognition.onresult=(e)=>{
 let currentIndex=e.resultIndex
 let transcript=e.results[currentIndex][0].transcript

 console.log(transcript);
 aiResponse(transcript)
  }

    let value = {
     recognition
  }
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default userContext
