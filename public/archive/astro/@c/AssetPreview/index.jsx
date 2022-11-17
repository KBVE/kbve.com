import { h } from 'preact';
import Styles from './styles.module.scss';

function AssetPreview({ project }) {
	const { frontmatter } = project;
	return (

		<div className={Styles.card}>
			<div className={Styles.titleCard} style={{ backgroundImage: `url(${frontmatter.img})` }}>
				<h1 className={Styles.title}>{frontmatter.title}</h1>
			</div>
			<div className="pa3">
						<div>
						<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
						</div>
				<div className={Styles.tags}>
					Tagged:
					{frontmatter.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={project.url} rel={"prefetch"}>
					<span className={Styles.linkInner}>Details</span>
				</a>
			</div>
		</div>
	);
}

export default AssetPreview;
