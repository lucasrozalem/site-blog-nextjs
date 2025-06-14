import { useCallback, useMemo } from "react";
import { ShareConfig, SOCIAL_MEDIA, SocialMedia } from "../social-media";
import { useClipboard } from "../use-clipboard";
import { Link } from "lucide-react";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 200,
}: UseShareProps) => {
  const { isCopied, handleCopy } = useClipboard({
    timeout: clipboardTimeout,
  });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  const share = useCallback(
    async (media: SocialMedia) => {
      try {
        if (media === "clipboard") {
          return await handleCopy(url);
        }
        const socialConfig = SOCIAL_MEDIA[media];
        if (!socialConfig) {
          throw new Error(`Unsupported social media: ${media}`);
        }

        const shareUrl = socialConfig.shareUrl(shareConfig);

        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600,localtion=yes,status=yes"
        );
        return !!shareWindow;
      } catch (error) {
        console.error("Share failed:", error);
      }
    },
    [shareConfig, handleCopy, url]
  );
  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_MEDIA).map(([key, social]) => ({
        key: key,
        name: social.name,
        icon: social.icon,
        action: () => share(key as SocialMedia),
      })),
      {
        media: "clipboard",
        name: isCopied ? "Link Copiado" : "Copiar Link",
        icon: <Link className="h-4 w-4" />,
        action: () => share("clipboard"),
      },
    ],
    [share, isCopied]
  );
  return {
    shareButtons,
  };
};
