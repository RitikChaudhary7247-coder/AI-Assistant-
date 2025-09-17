import React, { createContext, useState } from "react";
import run from "../gimini";
export const datacontext = createContext();

function UserContext({ children }) {
  let [speaking, setSpeaking] = useState(false);
  let [prompt, setPrompt] = useState("listening...");
  let [response, setResponse] = useState(false);

  // function speak(text) { let text_speak = new SpeechSynthesisUtterance(text); text_speak.volume = 1; text_speak.rate = 1; text_speak.pitch = 1; text_speak.lang = "eng-GB"; window.speechSynthesis.speak(text_speak); }

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB"; // use en-GB (not eng-GB)

    // Get available voices
    let voices = window.speechSynthesis.getVoices();

    // Find a female voice
    let femaleVoice = voices.find(
      (voice) =>
        voice.name.toLowerCase().includes("female") ||
        voice.name.toLowerCase().includes("zira") ||
        voice.name.toLowerCase().includes("samantha") ||
        voice.name.toLowerCase().includes("google uk english female")
    );

    if (femaleVoice) {
      text_speak.voice = femaleVoice;
    }

    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt) {
    let text = await run(prompt);
    let newText =
      text.split("**") &&
      text.split("*") &&
      text.replace("google", "Hrithik Chaudhary") &&
      text.replace("Google", "Hrithik Chaudhary");
    setPrompt(newText);
    // console.log(text)
    speak(newText);
    setResponse(true);
    setTimeout(() => {
      setSpeaking(false);
    }, 6000);
    // setSpeaking(false)
  }

  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setPrompt(transcript);
    // console.log("Heard:", transcript);
    // aiResponse(transcript);
    takeCommand(transcript.toLowerCase());
  };
  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com", "_blank");
      speak("Opening Youtube");
      setResponse(true);
      setPrompt("Opening Youtube...");
      setTimeout(() => {
        setSpeaking(false);
      }, 6000);
    } 
       else if(command.includes("open") && command.includes("google")){
      window.open("https://www.google.com/","_blank")
      speak("Opening Google")
      setResponse(true);
      setPrompt("Opening Google...")
      setTimeout(()=>{
        setSpeaking(false)
        },6000)
    } 
    else if(command.includes("open") && command.includes("instagram")){
      window.open("https://www.instagram.com","_blank")
      speak("Opening Instagram")
      setResponse(true);
      setPrompt("Opening Instagram...")
      setTimeout(()=>{
        setSpeaking(false)
        },6000)
    }

    else if(command.includes("open") && command.includes("linkedin")){
      window.open("https://www.linkdin.com","_blank")
      speak("Opening Linkdin")
      setResponse(true);
      setPrompt("Opening Linkdin...")
      setTimeout(()=>{
        setSpeaking(false)
        },6000)
    }

    else if(command.includes("time")){
      let time=new Date().toLocaleString(undefined,
      {hour:"numeric",minute:"numeric"})
      speak(time)
      setResponse(true);
      setPrompt(time)
      setTimeout(()=>{
        setSpeaking(false)
        },6000)
      }
    else if(
      command.includes("date") || command.includes("day")
      ){
        let date=new Date().toLocaleString(undefined,
          {day:"numeric",month:"long",year:"numeric"})
          speak(date)
          setResponse(true);
          setPrompt(date)
      setTimeout(()=>{
        setSpeaking(false)
        },6000)
      }
    
    else {
      aiResponse(command);
    }
  }

  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  };

  return (
    <div>
      <datacontext.Provider value={value}>{children}</datacontext.Provider>
    </div>
  );
}

export default UserContext;
