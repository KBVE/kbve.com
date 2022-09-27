import { h, useMemo } from 'preact';
import Styles from "./styles.module.scss";
const Authentication = ({
  url = "https://api.kbve.com/api/auth/local/register",
  display = true
}) => {

  const authenticated = useMemo(() => false, [])

  return display
    ? authenticated
      ? (
        <>!!ඞ</>
      ) : (
      <>ඞ</>
    ) : (
      <>!ඞ</>
    )

}

export default Authentication;