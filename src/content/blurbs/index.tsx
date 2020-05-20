import React from 'react';
import animatedSvgs from './animatedSvgs';
import reactBasedApps from './reactBasedApps';
import reactOnSharePoint from './reactOnSharePoint';
import sharePointSupport from './sharePointSupport';
import RollyBot from '../../components/Rolly-bot';

const index = () => (
  <div>
    {[animatedSvgs, reactBasedApps, sharePointSupport, reactOnSharePoint].map((blurb, i) => {
      const {
        headline, body, logo, name,
      } = blurb;
      const className = i % 2 === 0 ? 'left' : 'right';
      return (
        <div className={`blurb${name ? ` ${name}` : ''}`}>
          <h3>{headline}</h3>
          {logo ? (<img src={logo} alt="" className={className} />) : <RollyBot className={className} />}
          {body}
        </div>
      );
    })}

  </div>
);

export default index;
