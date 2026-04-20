import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LeftSidebar } from "@/components/organisms/LeftSidebar";
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
        
        <main className="flex-1 md:ml-[300px] lg:mr-20 min-h-screen overflow-y-auto px-4 md:px-8 py-10">
          {children}
        </main>
        
        <aside className="w-20 fixed right-0 h-screen overflow-y-auto hidden lg:flex flex-col items-center border-l border-gray-200">
        </aside>
      </body>
    </html>
  );
}
