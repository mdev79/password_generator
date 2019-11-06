import React from 'react';
import PropTypes from 'prop-types';

const GuideBtn = props => {
  return <button className='btn guide__btn'>{props.guide}</button>;
};
GuideBtn.propTypes = {};
export default GuideBtn;
