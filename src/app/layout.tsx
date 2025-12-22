import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import "./typography.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const outfit = Outfit({ 
  variable: "--font-outfit", 
  subsets: ["latin"], 
  display: "swap", 
}); 

const inter = Inter({ 
  variable: "--font-inter", 
  subsets: ["latin"], 
  display: "swap", 
}); 

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: "Koyetech - Scale Your Team & Deliver Better Products",
    template: "%s | Koyetech",
  },
  description:
    "Koyetech provides staff augmentation, digital solutions, and business consulting to help organizations scale efficiently and deliver exceptional products.",
  keywords: ["staff augmentation", "digital solutions", "business consulting", "IT services"],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} min-h-screen antialiased bg-background text-foreground text-base leading-relaxed overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}