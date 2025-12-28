import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vector Gym - Train Hard. Stay Strong. Be Vector.",
  description: "Premium gym facility with certified trainers, modern equipment, and flexible memberships. Transform your body and mind at Vector.",
  keywords: "gym, fitness, workout, training, membership, vector gym",
  authors: [{ name: "Vector Gym" }],
  openGraph: {
    title: "Vector Gym - Train Hard. Stay Strong. Be Vector.",
    description: "Premium gym facility with certified trainers and modern equipment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


