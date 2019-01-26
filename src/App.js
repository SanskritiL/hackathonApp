import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <img className="wave" src ={require("./img/wavess.png")} />
          <img className = "circularlogo" src={require("./img/spiral.png")} />
          <img className="text" src ={require("./img/text.png")} />
          

      </div>
    );
  }
}


export default App;
