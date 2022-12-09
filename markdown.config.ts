import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";

export default {
  remarkPlugins: [[remarkToc, { tight: true, ordered: true }]],
  rehypePlugins: [
    [
      rehypeToc,
      {
        headings: ["h1", "h2", "h3"],
        cssClasses: {
          toc: "toc-post", 
          link: "toc-link", 
        },
      },
    ],
  ],
};