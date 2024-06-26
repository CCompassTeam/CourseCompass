// base layout for every page and other stuff we want

import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar"; // Import the NavBar component
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Course Compass",
  description: "Course Compass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/profile-picture.jpg" sizes="any" />
      <body className="font-Inter">
        <NavBar showSearchBar={true} />
        <main className="mt-[5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
