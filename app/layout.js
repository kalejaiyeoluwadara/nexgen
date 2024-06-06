import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextgen",
  description: "Nextgen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden relative font-urbanist w-screen min-h-screen ">
        {/* <Nav /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
