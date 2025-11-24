import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balmcity - Modern Graphic Design Agency",
  description: "Balmcity specializes in branding, digital illustrations, and creative visuals. We create stunning designs that bring your vision to life.",
  keywords: "graphic design, branding, digital illustrations, creative visuals, design agency",
  authors: [{ name: "Balmcity Design Team" }],
  openGraph: {
    title: "Balmcity - Modern Graphic Design Agency",
    description: "Specializing in branding, digital illustrations, and creative visuals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
