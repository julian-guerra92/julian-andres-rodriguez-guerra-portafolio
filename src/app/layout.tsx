import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { RightSidebar } from "@/components/organisms/RightSidebar";
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
  title: "Julián Andrés Rodríguez G. - Portfolio",
  description: "Portfolio created by Julián Andrés Rodríguez G. Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-screen bg-gray-50 text-gray-900">
        <LeftSidebar />
        
        <main className="flex-1 md:ml-75 lg:mr-20 min-h-screen overflow-y-auto px-4 md:px-8 py-10">
          {children}
        </main>
        
        <RightSidebar />
      </body>
    </html>
  );
}
