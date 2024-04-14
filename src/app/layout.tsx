import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
// import { inter } from "@/app/fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shyju Viswambaran - Full Stack Developer portfolio",
  description:
    "Discover the professional portfolio of Shyju Viswambaran, showcasing expertise in web development, project highlights, and innovative solutions.",
  keywords: ["Shyju Viswambaran", "portfolio", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
