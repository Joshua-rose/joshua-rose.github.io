import React from 'react';
import logo from './assets/JrGiantLogo.svg';
import Header from './components/header';
import Desk from './components/desk';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Desk />
      <h1>Content coming soon.</h1>
    </div>
  );
}

export default App;
