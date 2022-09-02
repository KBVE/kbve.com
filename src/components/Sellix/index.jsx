import { h } from 'preact';

import Styles from './styles.module.scss';
const Sellix = ({product = null, name = null, site = null, lib = false}) => {

    if(lib)
        return(<><link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet"/> <script type="text/javascript" src="https://cdn.sellix.io/static/js/embed.js"></script></>)
	return (
        <>
        <div>
                <button className={Styles.button}
                    data-sellix-product={product}
                    data-sellix-custom-site={site || "kbve.com"}
                    type="submit">
                    {name}
                  </button>

        </div>
        </>
        );
}

export default Sellix;
