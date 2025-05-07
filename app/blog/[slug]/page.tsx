import React from "react";
import { getArticles, Article } from "@/blog/metadata";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export async function generateStaticParams() {
  const articles: Article[] = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const articles: Article[] = getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="py-8 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
        <h1 className="text-3xl font-bold text-center">Article Not Found</h1>
        <p className="text-center text-gray-500">
          The article you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8 mx-auto max-w-screen-lg lg:py-16 lg:px-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:underline">
              Strona główna
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="text-blue-500 hover:underline">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-700">{article.title}</li>
        </ul>
      </nav>

      {/* Article Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-6">
        <div className="md:w-2/3 lg:2-1/2">
          <Badge variant={"outline"} className="mb-2">
            {new Date(article.date).toLocaleDateString()}
          </Badge>
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{article.subtitle}</h2>
        </div>
        <div className="md:w-1/3 lg:w-1/2 md:ml-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="prose prose-lg mx-auto max-w-screen-lg">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {article.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ArticlePage;
