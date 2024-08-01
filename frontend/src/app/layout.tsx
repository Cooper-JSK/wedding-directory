import type { Metadata } from "next";
import { Montserrat, Merriweather, Montez } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import PageTransition from "@/components/PageTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const montez = Montez({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montez",
});

export const metadata: Metadata = {
  title: "Say I Do",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body
        className={`${montserrat.variable} ${merriweather.variable} ${montez.variable}`}
      >
        {children}
       
      </body>
    </html>
  );
}
