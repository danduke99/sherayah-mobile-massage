import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cookie } from "./styles/font/page";

export const metadata: Metadata = {
  title: "Sherayah's Mobile Body Massage",
  description: "Your preferred mobile masseuse!",
  icons: {
    icon: "/images/soloLogo.png",
    shortcut: "/images/soloLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cookie.variable}`}>
        <div className="min-h-screen flex flex-col min-w-[425px]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
