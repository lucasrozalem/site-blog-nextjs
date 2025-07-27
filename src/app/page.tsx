import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";
// import { ErrorComponent } from "./component";
export const metadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "site-blog-nextjs.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "site-blog-nextjs.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};
export default function HomePage() {
  return (
    <>
      <LandingPage />
      {/* <ErrorComponent /> */}
    </>
  );
}
