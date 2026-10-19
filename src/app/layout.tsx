import { CursorGlow } from "@/components/animations/CursorGlow";
import IhemeStudioWidget from "@/components/IhemeStudioWidget";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd, organizationSchema } from "@/components/ui/JsonLd";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ihemestudio.com"),
  title: {
    default: "Iheme Studio — Software Engineering & Digital Products",
    template: "%s | Iheme Studio",
  },
  description:
    "We build high-performance web applications, enterprise dashboards, and digital products. A software engineering studio based in Lagos, Nigeria.",
  keywords: [
    "software engineering",
    "web development",
    "Next.js",
    "React",
    "TypeScript",
    "frontend engineering",
    "full-stack development",
    "Lagos Nigeria",
  ],
  authors: [{ name: "Iheme Studio", url: "https://www.ihemestudio.com" }],
  creator: "Iheme Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ihemestudio.com",
    siteName: "Iheme Studio",
    title: "Iheme Studio — Software Engineering & Digital Products",
    description:
      "We build high-performance web applications, enterprise dashboards, and digital products.",
    images: [
      {
        url: "https://www.ihemestudio.com/iheme-studio-og.jpg",
        width: 1200,
        height: 630,
        alt: "Iheme Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iheme Studio — Software Engineering & Digital Products",
    description:
      "We build high-performance web applications, enterprise dashboards, and digital products.",
    creator: "@ifeanyimichaell",
    images: ["https://www.ihemestudio.com/iheme-studio-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <IhemeStudioWidget />
      </body>
    </html>
  );
}
