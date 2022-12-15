let menu = "team";

const postImportResult = import.meta.glob('./**/**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = async () => {
  const json = JSON.stringify((
  posts.map((p) =>  {
      
      if((p.frontmatter.tags.indexOf(menu) !== -1) ? true : false) {
            return {
              

              //?   Core
              status: p.frontmatter.status,
              //*   URL
              url: p.url,
              slug: `https://kbve.com${p.url}`,
              //?   Profile
              username: p.frontmatter.username,
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              jobby: p.frontmatter.jobby,
              //?   PFP/Bio
              img: p.frontmatter.img,
              bloodtype: p.frontmatter.bloodtype,
              project: p.frontmatter.project,
              primary: p.frontmatter.primary,
              secondary: p.frontmatter.secondary,
              lottie: p.frontmatter.lottie,
              lottiefooter: p.frontmatter.lottiefooter,
              video: p.frontmatter.video,
              //?   Social
              github: p.frontmatter.github,
              twitter: p.frontmatter.twitter,
              website: p.frontmatter.website,
              //?   Rank
              position: p.frontmatter.position,
              admin: p.frontmatter.admin,
              moderator: p.frontmatter.moderator,
              vip: p.frontmatter.vip,
              gfx: p.frontmatter.gfx,
              dev: p.frontmatter.dev,
              langs: p.frontmatter.langs,
              //?   Tags
              tags: p.frontmatter.tags,
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
