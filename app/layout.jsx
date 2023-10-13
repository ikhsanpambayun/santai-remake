import "@/styles/globals.css";
import { Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Santai",
  description: "Santai Remake",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <div className="relative">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
