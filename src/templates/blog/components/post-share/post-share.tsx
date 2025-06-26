'use client'
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string;
  title?: string;
  description?: string;
};

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });
  return (
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
  );
};
