const postImportResult = import.meta.glob("./**/**/**/*.mdx", { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify(
    posts.map((p) => {
      return {
        title: p.frontmatter.title,
        description: p.frontmatter.description,
        slug: "https://kbve.com" + p.url,
        tag: p.frontmatter.tags,
        img: p.frontmatter.img,
        category: p.frontmatter.category,
      };
    })
  );
  return {
    body: json
  }
}
