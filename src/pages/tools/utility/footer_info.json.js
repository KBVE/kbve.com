
const postImportResult = import.meta.glob('./_footer_info/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify((
  posts.map((p) =>  {
      
            return {
              status: p.frontmatter.status,
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              href: p.frontmatter.href,
              icon: p.frontmatter.icon,
              target: p.frontmatter.target,
              tags: p.frontmatter.tags
            }
        
    })
  ));
  return {
    body: json
  }
}
