import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';

function App() {

  let audioRef = useRef(new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"));

  // create a state variable to keep track of whether the audio is playing or paused
  const [audioString, setIsPlaying] = useState('Play');
  // create an event handler to toggle the state of the isPlaying variable and play or pause the audio
  const handleAudioToggle = () => {
    let audio1 = audioRef.current; 

    if (audio1.paused) {
      audio1.play(); 
      setIsPlaying("Pause")
      console.log('played')

    } else {
      audio1.pause();
      setIsPlaying("Play")
      console.log('paused')
    }
    
  }

  return (
    <div className="App">
      {/* add a button that can play and pause the audio */}
      <button onClick={handleAudioToggle}>{audioString}</button>
    </div>
  );
}

export default App;
