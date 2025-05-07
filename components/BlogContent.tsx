import React from "react";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ content }: { content: string }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default BlogContent;
