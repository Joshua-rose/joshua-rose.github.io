import React from 'react';
import Card from '../../components/card';
import gh2xl from './gh2xl';
import joshuarose from './joshua-rose';
import jrgiantTech from './jrgiant-tech';
import circutBoard from '../../assets/circuit-board.svg';

export default function Cards() {
  const createCard = ({
    data, headline, logo, siteLink, sourceLink,
  }:
  {
    data: {text:string|JSX.Element, img:string}[],
      headline:string,
      logo: string,
      sourceLink: string,
      siteLink: string
    }) => {
    const body = (
      <ul>
        {data.map(({ text, img }) => (
          <li>
            <img src={img} className="bullet_img" alt="" />
            {text}
          </li>
        ))}
      </ul>
    );
    return (
      <Card
        body={body}
        headline={headline}
        logo={logo}
        siteLink={siteLink}
        sourceLink={sourceLink}
      />
    );
  };

  return (
    <div className="cards-section" style={{ backgroundImage: `url(${circutBoard})` }}>
      {
        [gh2xl, joshuarose, jrgiantTech].map((c) => createCard(c))
      }
    </div>
  );
}
