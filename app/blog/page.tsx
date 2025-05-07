import React from "react";
import { getArticles, Article } from "@/blog/metadata";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const BlogPage = async () => {
  const articles: Article[] = getArticles(); // Fetch articles dynamically

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card
            key={article.slug}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="block aspect-video relative rounded-lg bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute w-full h-full object-cover rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold">
                {article.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 h-[2lh] overflow-hidden text-ellipsis">
                {article.subtitle}
              </CardDescription>

              <Link
                href={`/blog/${article.slug}`}
                className="text-blue-500 underline font-medium"
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
