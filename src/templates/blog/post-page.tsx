import { allPosts } from "contentlayer/*";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

export const PostPage = () => {
  const router = useRouter();

  const post = allPosts.find(
    (post) =>
      post.slug.toLocaleLowerCase() ===
      router.query.slug?.toString().toLocaleLowerCase()
  );
  const postUrl = `https://site.set/blog/${router.query.slug}`;
  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });

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

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700 px-4 md:p-6">
              <h2 className=" hidden md:block text-heading-xs mb-4 text-gray-100">
                Compartilhar
              </h2>
              <div className="flex justify-between md:flex-col gap-2">
                {shareButtons.map((social) => (
                  <Button
                    key={social.name}
                    variant={"outline"}
                    onClick={() => social.action()}
                    className="w-fit md:w-full justify-start gap-2"
                  >
                    {social.icon}
                    <span className="hiddren md:block">{social.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
