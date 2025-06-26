import { BlogList, BlogListProps } from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/*";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: BlogListProps) {
  return <BlogList posts={posts} />;
}

export const getStaticProps = (async () => {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: { posts },
  };
}) satisfies GetStaticProps<BlogListProps>;
