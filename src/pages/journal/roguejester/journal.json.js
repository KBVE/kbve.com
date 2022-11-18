const postImportResult = import.meta.glob('./_journal/*.md', { eager: true });

let posts = Object.values(postImportResult);
posts.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));


export const get = async () => {
  const json = JSON.stringify(
  posts.map((p) => {
      return {
        title: p.frontmatter.title,
        body: p.frontmatter.description,
        slug: `https://kbve.com${p.url}`,
        tag: p.frontmatter.tags,
        headings: p.headings,
        content: p.compiledContent(),
      };
    })
  );
  return {
    body: json
  }
}
