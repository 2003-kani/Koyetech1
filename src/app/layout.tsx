import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // [!code ++]
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const outfit = Outfit({ // [!code ++]
  variable: "--font-outfit", // [!code ++]
  subsets: ["latin"], // [!code ++]
  display: "swap", // [!code ++]
}); // [!code ++]

const inter = Inter({ // [!code ++]
  variable: "--font-inter", // [!code ++]
  subsets: ["latin"], // [!code ++]
  display: "swap", // [!code ++]
}); // [!code ++]

export const metadata: Metadata = {
  title: {
    default: "Koyetech - Scale Your Team & Deliver Better Products",
    template: "%s | Koyetech",
  },
  description:
    "Koyetech provides staff augmentation, digital solutions, and business consulting to help organizations scale efficiently and deliver exceptional products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} min-h-screen antialiased bg-background text-foreground`} // [!code ++]
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