import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Vaakya Foundation",
  description:
    "Vakya Foundation to educate, spread awareness, and make child safety everyone's responsibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased overflow-x-hidden`}>
        <Analytics />
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
