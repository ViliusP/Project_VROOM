/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

/**import ModBack from './ModBack';
import ModContent from './ModContent';
import ModBody from './ModBody';
import ModFoot from './ModFoot';
import ModX from './ModX';
import ModButton from './ModButton';
import ModMain from './ModMain';*/

import messages from './messages';

export class Modal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  openModal = () => {
    this.modal.classList.add("is-active");
  }

  closeModal = () => {
    this.modal.classList.remove("is-active");
  }

  render() {
    return (
      /**<div>
      <button className="button" onClick={openModal}>{this.props.modalButton}</button>
      <ModMain id="modMain">
        <ModBack></ModBack>
        <ModContent>
          <ModBody>
            {this.props.modalContent}
          </ModBody>
          <ModFoot>
            <ModButton onClick={closeModal}>Cancel</ModButton>
          </ModFoot>
        </ModContent>
      </ModMain>
      </div>*/
      <div>
        <button className="button" onClick={this.openModal}>{this.props.modalButton}</button>
        <div ref={(node) => {this.modal = node;}} className="modal">
         <div className="modal-background" onClick={this.closeModal}></div>
         <div className="modal-card">
          <section className="modal-card-body">
            {this.props.modalContent}
          </section>
        </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  /**modalButton: PropTypes.string,
  modalContent: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.object,
    ]
  ),*/
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Modal);
