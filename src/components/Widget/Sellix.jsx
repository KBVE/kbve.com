//*             [SELLIX]
//?             Sellix Widget to render custom products from the platform.
//TODO          Redesign and Refactor the Widget.
//!             Broken and needs to be migrated.
//import { h } from 'preact';

import Styles from "./styles.module.scss";
const Sellix = ({ product = null, name = null, site = null, lib = false }) => {
  if (lib)
    return (
      <>
        <link
          href="https://cdn.sellix.io/static/css/embed.css"
          rel="stylesheet"
        />{" "}
        <script
          type="text/javascript"
          src="https://cdn.sellix.io/static/js/embed.js"
        />
      </>
    );
  return (
    <>
      <div>
        <button
          className={Styles.button}
          data-sellix-product={product}
          data-sellix-custom-site={site || "kbve.com"}
          type="submit"
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default Sellix;
