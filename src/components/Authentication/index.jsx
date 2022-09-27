import { h } from "preact";
import { useState, useMemo } from "preact/hooks";
import Modal from "@c/Modal";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Styles from "./styles.module.scss";
const Authentication = ({
  url = "https://api.kbve.com/api/auth/local/register",
  display = true,
}) => {
  const registerFunc = async (e) => {
    await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState(undefined);

  const authenticated = useMemo(() => {
    if (!url) return undefined;
  }, []);

  const handleClick = (mode) => (e) => {
    e.preventDefault();

    setMode(mode);
    setOpen(true);
  };
  
  const handleClose = () => {
    e.preventDefault();

    setMode(undefined);
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} contentLabel={mode ?? "Generic Sign In/Up Modal"}>
        <div>
          <p>Test</p>
        </div>
      </Modal>
      {display ? (
        authenticated ? (
          <>!!ඞ</>
        ) : (
          <div className={Styles.container}>
            <button
              onClick={handleClick("signIn")}
              className={Styles.buttonRoot}
            >
              Sign In
            </button>
            <p className={Styles.textRoot}>/</p>
            <button
              onClick={handleClick("signUp")}
              className={Styles.buttonRoot}
            >
              Sign Up
            </button>
            {open && <>!!ඞ</>}
          </div>
        )
      ) : (
        <>!ඞ</>
      )}
    </>
  );
};

export default Authentication;
