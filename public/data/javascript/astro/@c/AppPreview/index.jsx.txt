import { h } from "preact";
import Styles from "./styles.module.scss";

function AppPreview({ app }) {
  const { frontmatter } = app;
  return (
    <div className={Styles.card}>
      <div
        className={Styles.titleCard}
        style={{
          backgroundImage: `url(${frontmatter.img})`
        }}
      >
        <h1 className={Styles.title}>{frontmatter.title}</h1>
      </div>
      <div className="pa3">
        <p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
        <div className={Styles.tags}>
          <p className={Styles.tagtitle}>Tagged:</p>
          <div className={Styles.tagLine}>
            {frontmatter.tags.map((t) => (
              <div key={t} className={Styles.tag} data-tag={t}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <a className={Styles.link} href={app.url} rel={"prefetch"}>
          <span className={Styles.linkInner}>View</span>
        </a>
      </div>
    </div>
  );
}

export default AppPreview;
