import React from 'react';
import PropTypes from 'prop-types';


interface Props {
  logo: string|JSX.Element
}

const header: React.FC<Props> = ({ logo }) => (


  <div id="header">
    {typeof logo === 'string'
      ? <img className="logo" src={logo} alt="logo" />
      : logo}
  </div>
);

header.propTypes = {
  logo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

// header.defaultProps = {
//   logo: '',
// };

export default header;
