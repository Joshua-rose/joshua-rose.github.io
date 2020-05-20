/* eslint-disable max-len */
import React from 'react';
import { blurb } from './types';
import { JavaScript as SharePointLogo } from '../../assets';


const body: JSX.Element = (
  <>
    <p>
      I have more than six years of experience in supporting SharePoint. I have created development environments through Virtual Machines on Microsoft Azure, managed users via Active Directory and GUI, developed/maintained a variety of custom add-ins, and created custom sandbox solutions.
    </p>
    <p>
      I have developed solutions/apps/add-ins for SharePoint 2010, 2013, and Online. I have also created bespoke PowerShell apps for user-to-license tracking, custom JavaScript bookmarklets/console-code for automation of tasks.
    </p>
  </>
);
const sharePointSupport: blurb = {
  headline: 'SharePoint Support',
  body,
  logo: SharePointLogo,
};

export default sharePointSupport;
