/* eslint-disable max-len */
import React from 'react';
import { blurb } from './types';
import { ReactLogo } from '../../assets';


const body: JSX.Element = (
  <>
    <p>
      I have made many React-based apps. These apps include JrGiant.Tech, Joshua-Rose Github pages, the GitHub Issues to Excel Oauth app, and a variety of React apps built as SharePoint Add-ins.
    </p>
    <p>
      I used a variety of tools like Create-React-App, Yeoman, and Gatsby as the frameworks to start or power the apps. The majority of the apps consume an API using Rest or GraphQL. Our team uses both JavaScript and TypeScript in the development and testing of the apps.
    </p>
  </>
);
const reactBasedApps: blurb = {
  headline: 'React Based Apps',
  body,
  logo: ReactLogo,
};

export default reactBasedApps;
