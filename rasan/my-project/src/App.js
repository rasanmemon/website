import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */} 
        <div id="background">
        
   <div id="result"></div>
   <div id='main'>
     <div id='first-rows'>
       <button class='del-bg' id='delete'>Erase</button>
       <button value='%' class='btn-style operator opera-bg fall-back'>%</button>
       <button value='+' class='btn-style operator opera-bg value align operator'>+</button>
       </div>
     <div class='rows'>
      <button value='1' class='btn-style num-bg num first-child'>1</button>
      <button value='2' class='btn-style num-bg num'>2</button>
      <button value='3' class='btn-style num-bg num'>3</button>
      <button value='-' class='btn-style opera-bg operator'>-</button>
     </div>

     <div class='rows'>
     <button value='4' class='btn-style num-bg num first-child'>4</button>
     <button value='5' class='btn-style num-bg num'>5</button>
     <button value='6' class='btn-style num-bg num'>6</button>
     <button value='*' class='btn-style opera-bg operator'>*</button>
     </div>

     <div class='rows'>
     <button value='7' class='btn-style num-bg num first-child'>7</button>
     <button value='8' class='btn-style num-bg num'>8</button>
     <button value='9' class='btn-style num-bg num'>9</button>
     <button value='/' class='btn-style opera-bg operator'>/</button>
     </div>

     <div class='rows'>
      <button value='0' class='num-bg zero' id='delete'>0</button>
     <button value='.' class='btn-style num-bg period  fall-back'>.</button>
     <button value='=' id='eqn-bg' class='eqn align'>=</button>
     </div> 
     </div>
     </div>

    
      </div>
    );
  }
}

export default App;
