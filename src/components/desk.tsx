import React from 'react';
import TopSVGBig from '../assets/AllTopSVGs.svg';
import TopSVGSmall from '../assets/AllTopSVGsSmall.svg';
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
      <img src={TopSVGSmall} id="smallHeaderSVGs" alt="Man at desk with logos of technology floating around" />
      <img src={JoshuaAtDesk} id="JoshuaAtDesk" className="logo" alt="My Advatar at my desk" style={{ width: '35%', bottom: '4%', left: '30%' }} />
      <img src={Verdaccio} id="Verdaccio" className="logo" alt="Verdaccio Logo" style={{ left: '3.8%', top: '12.2%', width: '12%' }} />
      <img src={NPM} id="NPM" className="logo" alt="NPM Logo" style={{ left: '3%', top: '36%', width: '11.5%' }} />
      <img src={Bash} id="Bash" className="logo" alt="Bash Logo" style={{ top: '84%', left: '6%', width: '15.7%' }} />
      <img src={Bootstrap} id="Bootstrap" className="logo" alt="Bootstrap Logo" style={{ top: '13%%', right: '10%', width: '7.3%' }} />
      <img src={CSS3} id="CSS3" className="logo" alt="CSS3 Logo" style={{ top: '72%', right: '26.5%', width: '7%' }} />
      <img src={Git} id="Git" className="logo" alt="Git Logo" style={{ top: '67%', left: '0%', width: '12%' }} />
      <img src={Github} id="Github" className="logo" alt="Github Logo" style={{ top: '81%', right: '3%', width: '8%' }} />
      <img src={HTML5} id="HTML5" className="logo" alt="HTML5 Logo" style={{ top: '1%', right: '38%', width: '7%' }} />
      <img src={JavaScript} id="JavaScript" className="logo" alt="SharePoint Logo" style={{ top: '25%', right: '17.5%', width: '17%' }} />
      <img src={LESS} id="LESS" className="logo" alt="LESS Logo" style={{ top: '68.6%', right: '15.2%', width: '8.0%' }} />
      <img src={Node} id="Node" className="logo" alt="Node Logo" style={{ top: '60%', left: '18%', width: '12%' }} />
      <img src={ReactLogo} id="ReactLogo" className="logo react" alt="ReactLogo Logo" style={{ top: '1%', left: '20%', width: '19%' }} />
      <img src={Sass} id="Sass" className="logo" alt="Sass Logo" style={{ top: '43%', right: '0%', width: '12%' }} />
    </div>
  </div>
);

export default desk;
