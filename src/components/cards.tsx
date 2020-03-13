import React, { ReactElement } from 'react';
import Card from './card';
import Git from '../assets/Git.svg';
import Github from '../assets/Github.svg';
import Verdaccio from '../assets/verdaccio.svg';
import NPM from '../assets/Npm.svg';
import Lerna from '../assets/lerna-hero.svg';
import SharePointReact from '../assets/SharePointReactLogo.svg';
import circutBoard from '../assets/circuit-board.svg';

export default function cards(): ReactElement {
  const gitlogos = (
    <div className="gitLogos" style={{ gridTemplateColumns: '1fr 1fr', display:'grid' }}>
      <img src={Github} style={{width:'45%'}} alt="" />
      <img src={Git} alt="" />
    </div>
  );
  const reusableComponenets = (
    <div className="reusableComponents" style={{ gridTemplateAreas: "'npm lerna' 'verd lerna'", display: 'grid' }}>
      <img src={NPM} alt="" style={{ gridArea: 'npm' }} />
      <img src={Verdaccio} alt="" style={{ gridArea: 'verd' }} />
      <img src={Lerna} alt="" style={{ gridArea: 'lerna' }} />
    </div>
  );

  return (
    <div className="cards-section" style={{ backgroundImage: `url(${circutBoard})` }}>
      <Card
        logo={SharePointReact}
        headline="React Based SharePoint Add-ins"
        body="SharePoint Apps (Add-ins) built using ReactJS and SCSS"
      />
      <Card
        logo={reusableComponenets}
        headline="Reusable Components"
        body="Reusable React Components built as NPM packages stored locally using the NPM proxy Verdaccio and stored in GitHub as a mono repo build using Lerna"
      />
      <Card
        logo={gitlogos}
        headline="Industry standard source control"
        body="Implemented industry standard source control as a primary development need"
      />
    </div>
  );
}
