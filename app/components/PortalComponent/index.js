/**
*
* PortalComponent
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');
class PortalComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props)
  {
    super(props);
    this.el = document.createElement('div');

  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render()
  {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

PortalComponent.propTypes = {

};

export default PortalComponent;
