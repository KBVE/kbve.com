//?     [MarkDown]  ->  [Configuration]

//*     [Plugins]   ->  [Table of Contents]     

//!     Removal of the core plugins.
//!     import rehypeSlug from "rehype-slug";   There is a bug with displaying the Table of Contents , when importing the .MD files inside of the .MDX

export default {
  remarkPlugins: [
     

    ],
  rehypePlugins: [

        
        //! rehypeSlug errors
    ],
  
  //? Shiki Configuration

  shikiConfig: {
    // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    theme: 'dracula',
    // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    langs: [],
    wrap: true,
  },
  
  //? External Plugins -> True
  extendPlugins: true,
};