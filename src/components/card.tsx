import React from 'react';

interface Props {
  logo: string | JSX.Element,
  headline: string,
  body: JSX.Element,
  siteLink:string,
  sourceLink:string,

}

const card: React.FC<Props> = ({ logo, headline, body }) => (
  <div className="card">
    {typeof logo === 'string' ? <img src={logo} alt={headline} style={{ maxWidth: '45%' }} /> : logo}
    <h2>{headline}</h2>
    {body}
  </div>
);

export default card;
