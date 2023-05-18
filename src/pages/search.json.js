const postImportResult = import.meta.glob("../content/**/**/*.mdx", {
  eager: true,
});
const posts = Object.values(postImportResult);
let counterId = 0;

export const get = async () => {
  const json = JSON.stringify(
    posts.map((p) => {
      counterId++;
      return {
        id: counterId,
        title: p.frontmatter.title,
        body: p.frontmatter.description,
        slug: `https://kbve.com${p.url}`,
        tag: p.frontmatter.tags,
      };
    })
  );
  return {
    body: json,
  };
};
