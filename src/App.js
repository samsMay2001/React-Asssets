import logo from './logo.svg';
import './App.css';
import profilePic from './assets/images/profile pic.jpg'


function App() {
  return (
    <div className="App">
      <h1>
        Task: add three images with some styling 
      </h1>
      <img
        height={200}
        src = {profilePic}
        alt = "An img of a Samuel"
      />
    </div>
  );
}

export default App;
