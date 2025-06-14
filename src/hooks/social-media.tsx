import { Facebook, Linkedin, Slack, Twitter } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialMedia = "linkedin" | "facebook" | "slack" | "twitter" | "clipboard";

export const SOCIAL_MEDIA = {
  linkedin: {
    name: "LinkedIn",
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url
      )}`,
    icon: <Linkedin className="h-4 w-4" />,
  },
  facebook: {
    name: "Facebook",
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url
      )}`,
    icon: <Facebook className="h-4 w-4" />,
  },
  slack: {
    name: "Slack",
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/intl/en-br/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`,
    icon: <Slack className="h-4 w-4" />,
  },
  twitter: {
    name: "Twitter",
    shareUrl: (config: ShareConfig) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        config.title || ""
      )}&url=${encodeURIComponent(config.url)}`,
    icon: <Twitter className="h-4 w-4" />,
  },
};
