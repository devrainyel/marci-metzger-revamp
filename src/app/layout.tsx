import type { Metadata } from "next";
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: " Marci Metzger | Pahrump Realtor",
  description: "Expert Pahrump NV real estate agent with 30+ years experience. Specializing in Southern Nevada homes, land, and commercial properties. Contact Marci Metzger for trusted real estate services.",
  keywords: "Pahrump real estate, Nevada homes for sale, Southern Nevada realtor, Pahrump NV homes, land for sale Pahrump, commercial real estate Nevada, Marci Metzger, The Ridge Realty Group",
  authors: [{ name: "Marci Metzger" }],
  creator: "Marci Metzger",
  publisher: "The Ridge Realty Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.theridgerealtygroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pahrump NV Real Estate | The Ridge Realty Group",
    description: "Your trusted Pahrump real estate experts with 30+ years serving Southern Nevada",
    type: "website",
    locale: 'en_US',
    url: 'https://www.theridgerealtygroup.com',
    siteName: 'The Ridge Realty Group',
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: 'Pahrump NV Real Estate - The Ridge Realty Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pahrump NV Real Estate | Marci Metzger',
    description: 'Expert Pahrump real estate services with 30+ years experience',
    images: ['/background.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
