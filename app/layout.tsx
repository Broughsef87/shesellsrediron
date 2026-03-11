import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "She Sells Red Iron | Lisa Wirth",
  description:
    "Lisa Wirth — Red iron steel building expert with decades of experience. Serving clients nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-[#111111]`}>
        {children}
      </body>
    </html>
  );
}
