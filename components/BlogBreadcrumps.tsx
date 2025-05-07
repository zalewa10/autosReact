import React from "react";
import Link from "next/link";

const BlogBreadcrumbs = ({
  paths,
}: {
  paths: { label: string; link?: string }[];
}) => {
  return (
    <nav className="breadcrumbs">
      {paths.map((path, index) => (
        <span key={index}>
          {path.link ? <Link href={path.link}>{path.label}</Link> : path.label}
          {index < paths.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default BlogBreadcrumbs;
