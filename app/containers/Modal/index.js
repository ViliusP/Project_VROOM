/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectModal from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/**import ModBack from './ModBack';
import ModContent from './ModContent';
import ModBody from './ModBody';
import ModFoot from './ModFoot';
import ModX from './ModX';
import ModButton from './ModButton';
import ModMain from './ModMain';*/

export class Modal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
        <button className="button" onClick={openModal}>{this.props.modalButton}</button>
        <div id="modMain" className="modal is-active">
         <div className="modal-background"></div>
         <div className="modal-card">
          <section className="modal-card-body">
            {this.props.modalContent}
          </section>
          <footer className="modal-card-foot">
            <button className="button" onClick={closeModal}>Cancel</button>
          </footer>
        </div>
        </div>
      </div>
    );
  }
}

function openModal() {
  document.getElementById("modMain").classList.add("is-active");
}

function closeModal() {
  document.getElementById("modMain").classList.remove("is-active");
}

Modal.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  modalButton: PropTypes.string,
  modalContent: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.object,
    ]
  ),
};

const mapStateToProps = createStructuredSelector({
  modal: makeSelectModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'modal', reducer });
const withSaga = injectSaga({ key: 'modal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Modal);
