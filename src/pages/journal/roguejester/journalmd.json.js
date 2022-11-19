// Import {journal}->{entry} as Glob
const postImportResult = import.meta.glob('./_journal/*.md', { eager: true });

// Sort {journal}->{posts}
let posts = Object.values(postImportResult);
posts.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));

//? Function is kept as a reference, can be removed in the future.
function jsonFormat(str)  {
  return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
}

//* Export {posts} as JSON
export const get = async () => {
  const json = JSON.stringify(
  posts.map((p) => {
      return {
        title: p.frontmatter.title,
        body: p.frontmatter.description,
        slug: `https://kbve.com${p.url}`,
        tag: p.frontmatter.tags,
        headings: p.headings,
        content: jsonFormat(p.rawContent()),
      };
    })
  );
  return {
    body: json
  }
}
