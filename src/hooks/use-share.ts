import { useCallback, useMemo } from "react";
import { ShareConfig, SOCIAL_MEDIA, SocialMedia } from "./social-media";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 200,
}: UseShareProps) => {
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  const share = useCallback(
    (media: SocialMedia) => {
      try {
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
    [shareConfig]
  );
  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_MEDIA).map(([key, social]) => ({
        key: key,
        name: social.name,
        icon: social.icon,
        action: () => share(key as SocialMedia),
      })),
    ],
    [share]
  );
  return {
    shareButtons,
  };
};
