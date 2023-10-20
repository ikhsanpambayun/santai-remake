import "@/styles/globals.css";
import { Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StoreProvider } from "./redux/StoreProvider";

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
      <body>
        <StoreProvider>
          <div className={merriweather.className}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
