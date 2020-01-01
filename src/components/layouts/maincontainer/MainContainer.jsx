import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';
import PropTypes from 'prop-types';

const MainContainer = props => {
  const {
    mainBtn,
    password,
    errorMessage,
    getCheckboxData,
    getCharsNumber,
    getPassword,
    copyPassword,
    copyToClipboardLang
  } = props;
  return (
    <div className='main__container'>
      <GenerateBtn
        mainBtn={mainBtn}
        errorMessage={errorMessage}
        generatePassword={getPassword}
        {...props}
      />
      <OptionsContainer
        getCheckboxData={getCheckboxData}
        getCharsNumber={getCharsNumber}
        {...props}
      />
      <PassArea password={password} />
      <CopyToClipBtn
        copyPassword={copyPassword}
        copyToClipboardLang={copyToClipboardLang}
      />
    </div>
  );
};
MainContainer.propTypes = {};
export default MainContainer;
