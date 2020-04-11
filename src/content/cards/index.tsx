import React, { ReactElement } from 'react';

interface Props {

}

export default function index({}: Props): ReactElement {
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
    <div />
  );
}
