let menu = "unity-webgl";

const postImportResult = import.meta.glob('./**/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify((
  posts.map((p) =>  {
      
      if((p.frontmatter.tags.indexOf(menu) !== -1) ? true : false) {
            return {
              status: p.frontmatter.status,
              id: p.frontmatter.id,
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              href: p.frontmatter.href,
              icon: p.frontmatter.icon,
              target: p.frontmatter.target,
              tags: p.frontmatter.tags,
              img: p.frontmatter.img,
              loaderUrl: p.frontmatter.loaderUrl,
              dataUrl: p.frontmatter.dataUrl,
              frameworkUrl: p.frontmatter.frameworkUrl,
              codeUrl: p.frontmatter.codeUrl,
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
