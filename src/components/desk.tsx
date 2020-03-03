import React from 'react';
import Bash from '../assets/Bash.svg';
import Bootstrap from '../assets/Bootstrap.svg';
import CSS3 from '../assets/CSS3.svg';
import Git from '../assets/Git.svg';
import Github from '../assets/Github.svg';
import HTML5 from '../assets/HTML5.svg';
import JavaScript from '../assets/JavaScript.svg';
import JoshuaAtDesk from '../assets/JoshuaAtDesk.svg';
import JrGiantLogo from '../assets/JrGiantLogo.svg';
import LESS from '../assets/LESS.svg';
import Node from '../assets/Node.svg';
import NPM from '../assets/Npm.svg';
import ReactLogo from '../assets/React.svg';
import Sass from '../assets/Sass.svg';
import Verdaccio from '../assets/verdaccio.svg';

interface Props {

}

const desk: React.FC<Props> = () => (
  <div id="desk_section">
    <div className="no-right-side-triangle blue" />
    <div id="desk">
      <img src={JoshuaAtDesk} id="JoshuaAtDesk" className="logo" alt="My Advatar at my desk" style={{ position: 'relative' }} />
      <img src={Verdaccio} id="Verdaccio" className="logo" alt="Verdaccio Logo" style={{ left: '20px', top: '10vh' }} />
      <img src={NPM} id="NPM" className="logo" alt="NPM Logo" style={{ left: '18px', top: '35vh' }} />
      <img src={Bash} id="Bash" className="logo" alt="Bash Logo" style={{ top: '68vh', left: '50px' }} />
      <img src={Bootstrap} id="Bootstrap" className="logo" alt="Bootstrap Logo" />
      <img src={CSS3} id="CSS3" className="logo" alt="CSS3 Logo" />
      <img src={Git} id="Git" className="logo" alt="Git Logo" style={{ top: '55vh', left: 0 }} />
      <img src={Github} id="Github" className="logo" alt="Github Logo" />
      <img src={HTML5} id="HTML5" className="logo" alt="HTML5 Logo" />
      <img src={JavaScript} id="JavaScript" className="logo" alt="JavaScript Logo" />
      <img src={JrGiantLogo} id="JrGiantLogo" className="logo" alt="JrGiantLogo Logo" />
      <img src={LESS} id="LESS" className="logo" alt="LESS Logo" />
      <img src={Node} id="Node" className="logo" alt="Node Logo" />
      <img src={ReactLogo} id="ReactLogo" className="logo" alt="ReactLogo Logo" />
      <img src={Sass} id="Sass" className="logo" alt="Sass Logo" />
    </div>
  </div>
);

export default desk;
