// base layout for every page and other stuff we want

import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar"; // Import the NavBar component
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Inter">
        <NavBar showSearchBar={true} />
        <main className="mt-[140px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
