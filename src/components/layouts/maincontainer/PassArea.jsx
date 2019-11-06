import React from 'react';

import PropTypes from 'prop-types';

const PassArea = props => {
  return <div className='pass__container'>{props.password}</div>;
};

PassArea.propTypes = {};

export default PassArea;
