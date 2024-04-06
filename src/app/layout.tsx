import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"Saini Studio Creative Agency",
    template:"%s - Saini Studio"
  },
  description: "Saini Studio: A creative agency dedicated to enhancing your digital presence through innovative thinking and strategic solutions. Elevate your brand with our bespoke design, development, and marketing services. Let's collaborate to bring your vision to life. Contact us today!",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
