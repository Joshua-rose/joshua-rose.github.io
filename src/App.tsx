import React from 'react';
import logo from './assets/JrGiantLogo.svg';
import Header from './content/header';
import Desk from './content/desk';
import Cards from './content/cards';
import Blurbs from './content/blurbs'
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Desk />
      <Cards />
      <Blurbs />
    </div>
  );
}

export default App;
