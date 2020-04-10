import React from 'react';
import logo from './assets/JrGiantLogo.svg';
import Header from './components/header';
import Desk from './components/desk';
import Cards from './components/cards';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Desk />
      <Cards />
    </div>
  );
}

export default App;
