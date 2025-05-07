import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "blog", "articles");

export interface Article {
  title: string;
  slug: string;
  date: string;
  image: string;
  subtitle: string;
  content: string; // Add content field
}

export const getArticles = (): Article[] => {
  if (typeof window !== "undefined") {
    throw new Error("getArticles can only be used on the server side.");
  }

  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md")) // Only process Markdown files
    .map((fileName) => {
      const filePath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents); // Extract frontmatter and content

      return {
        ...data,
        slug: fileName.replace(/\.md$/, ""), // Remove `.md` extension for slug
        content, // Include the Markdown content
      } as Article;
    });
};
