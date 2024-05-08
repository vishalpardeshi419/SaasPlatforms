import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./container";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create SAAS App",
  description: "Generated from scratch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />

        <main>
          <Container>{children}</Container>
        </main>

        <Footer />
      </body>
    </html >
  );
}
