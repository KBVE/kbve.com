
const postImportResult = import.meta.glob('./**/**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify(
  posts.map((p) => {
      return {
        title: p.frontmatter.title,
        description: p.frontmatter.description,
        exchange: p.frontmatter.exchange,
        img: p.frontmatter.img,
        dividend: p.frontmatter.dividend,
        ticker: p.frontmatter.ticker,
        slug: `https://kbve.com${p.url}`,
        tag: p.frontmatter.tags
      };
    })
  );
  return {
    body: json
  }
}