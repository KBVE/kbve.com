const dataImportResult = import.meta.glob('./**/*.mdx', { eager: true });
const data = Object.values(dataImportResult);

export const get = async () => {
  const json = JSON.stringify(
  data.map((p) => {
      return {
        title: p.frontmatter.title,
        description: p.frontmatter.description,
        data: p.frontmatter.data,
      };
    })
  );
  return {
    body: json
  }
}