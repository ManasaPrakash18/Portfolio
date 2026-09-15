import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manasa H | CSE Student & Developer",
  description: "Portfolio of Manasa H, a Computer Science and Engineering student building full-stack and AI-powered applications.",
  metadataBase: new URL("https://github.com/ManasaPrakash18"),
  openGraph: {
    title: "Manasa H | CSE Student & Developer",
    description: "Computer Science and Engineering student building full-stack and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
