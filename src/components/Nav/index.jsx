import { h } from "preact";
import Register from "@c/Authentication";
import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.link} href="/">
        KBVE
      </a>

      <a className={Styles.link} href="/projects">
        Portfolio
      </a>
      <a className={Styles.link} href="/application">
        Applications
      </a>
      <a className={Styles.link} href="/about">
        About
      </a>

      <div className={Styles.endLinks}>
        <Register />
      </div>
    </nav>
  );
}
export default Nav;
