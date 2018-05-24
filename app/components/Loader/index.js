/**
*
* Loader
*
*/

import React from 'react';
// import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid';
function Loader() {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} size='10x'/>
    </div>
  );
}

Loader.propTypes = {

};

export default Loader;
