import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Article Blog",
  description: "A modern blog built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white shadow-md py-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">
              <a href="/" className="text-gray-800 hover:text-gray-600">
                My Article Blog
              </a>
            </h1>
            <nav>
              <Link href="/" className="mr-4 text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/articles" className="text-gray-700 hover:text-gray-900">
                Artikel
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white text-center py-4 text-gray-600">
          © {new Date().getFullYear()} My Article Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}