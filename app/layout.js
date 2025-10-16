import { Geist, Geist_Mono, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const HedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-title",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "smart slide ",
  description: ` SmartSlide turns your content into polished presentations instantly.
        Write your script, choose your layout, and we'll handle the
        formatting—giving you speed without sacrificing control.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${HedvigLettersSerif.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
