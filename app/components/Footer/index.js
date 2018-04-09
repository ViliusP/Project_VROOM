/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';
import Container from '../Container';
function Footer() {
  return (
    <Wrapper>
      <Container>
        <FormattedMessage {...messages.header} />
      </Container>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
