import React from 'react';
import {
  Github, OAuth, Sheetsjs, GraphQL, GH2XL,
} from '../../assets';

const data = [
  { text: 'Consumes GitHub\'s API', img: Github },
  { text: 'Connects to GitHub with OAuth', img: OAuth },
  {
    text: (
      <span>
        Creats
        {' '}
        <code>.xslx</code>
        {' '}
        files using Sheet.js npm package
      </span>),
    img: Sheetsjs,
  },
  { text: 'Uses GraphQL for data retrieval', img: GraphQL },


];


const gh2xl = {
  data,
  headline: 'GitHub Issues to Excel',
  logo: GH2XL,
  siteLink: 'https://github-issues-to-excel.netlify.com',
  sourceLink: 'https://github.com/Joshua-rose/github-issues-to-excel',
};

export default gh2xl;
