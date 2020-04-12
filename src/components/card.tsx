import React from 'react';
import www from '../assets/www.svg';
import Github from '../assets/Github.svg';

interface Props {
  logo: string | JSX.Element,
  headline: string,
  body: JSX.Element,
  siteLink:string,
  sourceLink:string,

}

const card: React.FC<Props> = ({
  logo, headline, body, siteLink, sourceLink,
}: Props) => (
  <div className="card">
    <a href={siteLink} className="site" title="View the site"><img src={www} alt="globe" /></a>
    <a href={sourceLink} className="source" title="View the source"><img src={Github} alt="github" /></a>
    {typeof logo === 'string' ? <img src={logo} alt={headline} className="primaryLogo" /> : logo}
    <h2>{headline}</h2>
    {body}
  </div>
);

export default card;
