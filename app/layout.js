import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import "../public/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexgen",
  description: "Nexgen",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden relative font-urbanist w-screen min-h-screen ">
        <div className="relative">
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
