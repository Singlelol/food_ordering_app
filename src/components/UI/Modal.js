import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCard}></div>
};

const ModalWindow = (props) => {
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onHideCard={props.onHideCard}/>, portalElement)}
    {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
  </React.Fragment>
};

export default Modal;