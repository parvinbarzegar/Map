import React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface IModalProps {
  isOpen: boolean;
  title: string;
  footer?: JSX.Element;
  setIsOpen: Function;
  children?:JSX.Element;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  title,
  footer,
  setIsOpen,
  children
}) => {
  const modalContainer:any = document.getElementById("modal");
  return createPortal(
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal__backdrop">
            <div className="modal__container">
              <div className="modal__header">
                <span className="modal__title">{title}</span>
                <a
                  href="#"
                  className=" modal__button-close"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </a>
              </div>
              <div className="modal__body">{children}</div>
              {footer && <div className=" modal__footer">{footer}</div>}
            </div>
          </div>
        </div>
      ) : null}
    </>,
    modalContainer
  );
};

export default Modal;
