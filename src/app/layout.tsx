import { Roboto_Mono as Roboto } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

import { SiteHeader } from "@/components/site-header";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Web3", "RWAs", "Tokens", "Crypto", "Web3"],
  authors: [
    {
      name: "Vikash Manda",
      url: "https://notundfined.xyz/",
    },
  ],
  creator: "vikash Manda",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@chan44",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`background container mx-auto min-h-screen w-full font-sans text-foreground  ${roboto.variable} ${roboto.className}`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
