import { h } from "preact";
import Styles from "./styles.module.scss";

const Modal = ({
  open = false,
  onClose = () => {},
  title = "ඞ",
  children,
  actions,
  ...props
}) => {
  return (
    <div
      class={`${Styles.modalRoot} ${open ? "" : Styles.modalRootClosed}`}
      id="modal"
    >
      {open ? (
        <div className={Styles.contentInner}>
          <div className={Styles.title}>
            <p className={Styles.titleText}>{title}</p>
            <button className={Styles.closeButton} onClick={onClose}>
              ✕
            </button>
          </div>
          <div className={Styles.content}>{children}</div>
          <div className={Styles.actions}>{actions}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
