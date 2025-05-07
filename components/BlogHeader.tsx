import React from "react";

const BlogHeader = ({
  title,
  image,
  date,
}: {
  title: string;
  image: string;
  date: string;
}) => {
  return (
    <header className="blog-header">
      <img src={image} alt={title} className="w-full h-auto" />
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
    </header>
  );
};

export default BlogHeader;
