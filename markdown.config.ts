//?     [MarkDown]  ->  [Configuration]

//*     [Plugins]   ->  [Table of Contents]
//import remarkToc from "remark-toc";
//import rehypeToc from "rehype-toc";
//!		[March 14, 2023] - Adding rehype-external-links
import rehypeExternalLinks from "rehype-external-links";

//!     Removal of the core plugins.
//!     import rehypeSlug from "rehype-slug";   There is a bug with displaying the Table of Contents , when importing the .MD files inside of the .MDX
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

//!   [June 13, 2023] - Adding Mermaid
import { mermaid } from "./src/components/Library/MDX/mermaid"

export default {
  extendMarkdownConfig: true,
  rehypePlugins: [
    rehypeHeadingIds,
    [
      rehypeExternalLinks,
      {
        rel: ["nofollow", "noopener", "noreferrer"],
		target: ["_blank"],
      },
    ],
    //! rehypeSlug errors
  ],

  //? Shiki Configuration

  shikiConfig: {
    // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    theme: "dracula",
    // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    langs: [],
    wrap: true,
  },

  //? External Plugins -> True
  extendPlugins: true,
  gfm: true,
  remarkPlugins: [mermaid],
};
