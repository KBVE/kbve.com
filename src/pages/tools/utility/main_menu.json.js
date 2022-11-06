const postImportResult = import.meta.glob('./_menu/_main_menu/*.md', { eager: true });
const posts = Object.values(postImportResult);
var counterId = 0;

export const get = async () => {
  const json = JSON.stringify(
  posts.map((p) => {
    counterId++;
      return {
        id: counterId,
        status: p.frontmatter.status,
        title: p.frontmatter.title,
        description: p.frontmatter.description,
        href: p.frontmatter.href,
        icon: p.frontmatter.icon,
        target: p.frontmatter.target,
        tags: p.frontmatter.tags
      };
    })
  );
  return {
    body: json
  }
}
