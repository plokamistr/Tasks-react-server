import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" role="dialog">
      <div className="modal">
        <div className="modal-header">
          <span class="modal-title">Please modify your title task</span>
          <button type="button" className="btn modal-close-button" onClick={hide}>X</button>
        </div>
        <div className="modal-body">
          Here goes an input to change the tasks
        </div>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;