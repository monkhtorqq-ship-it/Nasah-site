  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import Header from "./components/Header";
  import Footer from "./components/doshoo";


  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Welcome to space",
    description: "created by 3 brilliant minds",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
