import { Post } from "contentlayer/*";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { PostShare } from "./components/post-share";

export type PostPageProps = {
  post: Post;
};

export const PostPage = ({ post }: PostPageProps) => {
  const postUrl = `https://site.set/blog/${post.slug}`;

  const publisedData = new Date(post?.date ?? "").toLocaleDateString("pt-BR");

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={"/"}>Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-200">{post?.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object cover"
              />
            </figure>
            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-12 md:mt-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>
              <Avatar.Container>
                <Avatar.Image
                  src={post?.author?.avatar ?? ""}
                  alt={post?.author?.name ?? ""}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author?.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={post?.date}>{publisedData}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>
            <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw} />
            </div>
          </article>
          <PostShare url={postUrl} title={post.title} description={post.description} />
        </div>
      </div>
    </main>
  );
};
