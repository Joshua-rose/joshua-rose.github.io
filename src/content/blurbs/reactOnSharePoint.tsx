/* eslint-disable max-len */
import React from 'react';
import { blurb } from './types';
import { SharePointReactLogo } from '../../assets';


const body: JSX.Element = (

  <p>
    I have also combined multiple skills together to create React based apps (add-ins) that run on the SharePoint platform. Through the apps I have added custom branding for each client, new innovations on existing systems and new form functionality upon request. Each app relies on a form framework specifically designed to work with SharePoint.
  </p>


);
const reactOnSharePoint: blurb = {
  headline: 'React Based SharePoint Add-ins',
  body,
  logo: SharePointReactLogo,
};

export default reactOnSharePoint;
