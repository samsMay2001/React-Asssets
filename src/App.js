import logo from './logo.svg';
import './App.css';
import profilePic from './assets/images/profile pic.jpg'
import profileVid from "./assets/videos/Y2Mate.is - Joel's S14 Short  4K-fVr_yM5Q1vs-720p-1654298027861.mp4"
import ReactPlayer from 'react-player';


function App() {

  let videoClassCss = {
    display : 'flex', 
    alignItems : 'center',
    justifyContent : 'center' 
  }
  
  return (
    <div className="App">
      <h1>
        Task: add 1 image and 2 videos
      </h1>
      <h4>Fav Picture</h4>
      <img
        height={200}
        src = {profilePic}
        alt = "An img of a Samuel"
      />
      <h4>Fav Video</h4>
      <video src={profileVid} height = {200} controls/>
      <h4>Fav YouTube Video</h4>
      <div style={videoClassCss}>
        <ReactPlayer height={200} width={400} url="https://www.youtube.com/watch?v=-621SEHkfIM&ab_channel=OVTL%CE%94W"/>
      </div>
      
    </div>
  );
}

export default App;
