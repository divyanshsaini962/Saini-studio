import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { GoogleTagManager } from '@next/third-parties/google'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"Saini Studio Creative Agency",
    template:"%s - Saini Studio"
  },
  keywords:"Creative agency Jhansi, Digital presence solutions, Innovative brand strategies, Brand elevation services, Excellence in creativity, Industry identity, Digital engagement solutions, Creative thinking agency, Innovative brand solutions, Empowering creators.",
  description: "Saini Studio: A creative agency dedicated to enhancing your digital presence through innovative thinking and strategic solutions. Elevate your brand with our bespoke design, development, and marketing services. Let's collaborate to bring your vision to life. Contact us today!",
  openGraph: {
    title: 'Saini Studio',
    description: 'Elevate your brand with Saini Studio, a leading creative agency based in Jhansi, Uttar Pradesh. We specialize in innovative digital solutions that captivate audiences and drive engagement. Let us help you reach your full potential and stand out in your industry with our commitment to excellence and boundary-pushing creativity. Together, well elevate the world around us.',
    images: [
      {
        url: '../asset/Og-logo.png',
        alt: 'Saini Studio Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="GTM-KBZSS4V8" />
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
