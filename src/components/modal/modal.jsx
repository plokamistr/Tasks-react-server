import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

  

  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" role="dialog">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">Please modify your title task</span>
          <button type="button" className="btn modal-close-button" onClick={hide}>X</button>
        </div>
        <div className="modal-body">

        <form className="modal-form" onSubmit={handleSubmit}>

          <input  className="modal-input" type="text" placeholder="Modify here task's title" />
          

          <div className="buttons-wrapper">
              <button className="btn btn-modifytask" type="submit" >Save title</button>
          </div>

        </form>

        </div>
    </div>
    </div>
  </>, document.body
) : null;

export default Modal;