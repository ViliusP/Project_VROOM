/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { makeSelectOpened, makeSelectContent } from './selectors';
import reducer from './reducer';

import { close, open } from './actions';

import ModalWrapper from './ModalComponents/ModalWrapper';
import ModalBackground from './ModalComponents/ModalBackground';
import ModalContent from './ModalComponents/ModalContent';
import PortalComponent from 'components/PortalComponent'; //Wrap everything with this after React 16.0.0
import ModalBody from './ModalComponents/ModalBody';

export class Modal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount()
  {
    this.props.closeModal();
  }
  render() {
    if(this.props.opened)
    {
       return (
          <ModalWrapper>
            <ModalBackground onClick={() => this.props.closeModal()}/>
              <ModalContent>
                <ModalBody>
                {this.props.content}
                </ModalBody>
            </ModalContent>
          </ModalWrapper>
       )
    }
    else {
      return (<div/>);
    }
  }
}

Modal.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  opened : makeSelectOpened(),
  content: makeSelectContent(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => {
      dispatch(close());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modal', reducer });

export default compose(
  withReducer,
  withConnect,
)(Modal);
