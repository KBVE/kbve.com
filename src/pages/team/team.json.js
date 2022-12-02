let menu = "team";

const postImportResult = import.meta.glob('./**/**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify((
  posts.map((p) =>  {
      
      if((p.frontmatter.tags.indexOf(menu) !== -1) ? true : false) {
            return {
              status: p.frontmatter.status,
              id: p.frontmatter.id,
              username: p.frontmatter.username,
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              href: p.frontmatter.href,
              icon: p.frontmatter.icon,
              target: p.frontmatter.target,
              tags: p.frontmatter.tags,
              img: p.frontmatter.img,
              admin: p.frontmatter.admin,
              moderator: p.frontmatter.moderator,
              vip: p.frontmatter.vip,
              dev: p.frontmatter.dev,
              lottie: p.frontmatter.lottie,
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
