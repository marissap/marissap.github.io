import { marked } from "marked";
import { parse as parseYaml } from "yaml";

const markdownFiles = import.meta.glob("../../content/*/index.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const imageFiles = import.meta.glob(
  "../../content/**/*.{png,jpg,jpeg,gif,webp}",
  { eager: true, query: "?url", import: "default" },
);

export const posts = Object.entries(markdownFiles)
  .map(([path, rawContent]) => {
    const slug = path.split("/").at(-2);
    const frontmatter = rawContent.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/);

    if (!frontmatter) throw new Error(`Missing frontmatter in ${path}`);

    const data = parseYaml(frontmatter[1]);
    const content = frontmatter[2];
    const html = marked
      .parse(content)
      .replace(/src="\.\/([^"]+)"/g, (match, filename) => {
        const imagePath = imageFiles[`../../content/${slug}/${filename}`];
        return imagePath ? `src="${imagePath}"` : match;
      });
    const plainText = content
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/[#>*_`]/g, "")
      .replace(/\s+/g, " ")
      .trim();

    return {
      slug,
      title: data.title || slug,
      date: data.date,
      formattedDate: new Date(`${data.date}T12:00:00`).toLocaleDateString(
        "en-US",
        { month: "long", day: "2-digit", year: "numeric" },
      ),
      description: data.description || `${plainText.slice(0, 200)}...`,
      html,
      readingTime: `${Math.max(1, Math.ceil(plainText.split(" ").length / 200))} min read`,
    };
  })
  .sort((first, second) => new Date(second.date) - new Date(first.date));