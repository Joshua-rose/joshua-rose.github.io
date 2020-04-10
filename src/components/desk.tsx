import React from 'react';
import TopSVGBig from '../assets/AllTopSVGs.svg';
import TopSVGSmall from '../assets/AllTopSVGsSmall.svg';

interface Props {

}

const desk: React.FC<Props> = () => (
  <div id="desk_section">
    <div className="no-right-side-triangle blue" />
    <div id="desk">
      <img src={TopSVGBig} id="bigHeaderSVGs" alt="Man at desk with logos of technology floating around" />
      <img src={TopSVGSmall} id="smallHeaderSVGs" alt="Man at desk with logos of technology floating around" />
    </div>
  </div>
);

export default desk;
