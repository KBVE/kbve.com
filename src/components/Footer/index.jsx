import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} KBVE.com
			<small className={Styles.byline}>🚀 Built by KBVE.com with Astro</small>
		</footer>
	);
}
export default Footer;
