import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './App.css';
import maincontent from './pages/maincontent';
class App extends Component {
  render() {
    return (
      <div className="App">
        
          <img className="wave" src ={require("./img/wavess.png")} />
          <img className = "circularlogo" src={require("./img/spiral.png")} />
          <img className="text" src ={require("./img/text.png")} />
          <p className="typing">{AnimatedTypingComponent()}</p>
          <p>
            <button type="button" className="launch btn btn-lg" onClick={<maincontent />}>
              Launch Site
            </button>
          </p>

      </div>
    );
  }
}
const AnimatedTypingComponent =() => (
  <Typing speed={60}>
     
     <span>Everything is figureoutable.</span>
    
  </Typing>
);

export default App;
