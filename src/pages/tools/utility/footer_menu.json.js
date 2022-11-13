let menu = "footer";

const postImportResult = import.meta.glob('./_menu/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify((
  posts.map((p) =>  {
      
      if((p.frontmatter.tags.indexOf(menu) !== -1) ? true : false) {
            return {
              status: p.frontmatter.status,
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              href: p.frontmatter.href,
              icon: p.frontmatter.icon,
              target: p.frontmatter.target,
              tags: p.frontmatter.tags
            }
      }
            else  {
              return {
                status: false
              };
            }
        
    })
  ));
  return {
    body: json
  }
}
