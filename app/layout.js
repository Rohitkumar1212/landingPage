import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700", "800"], // choose which font-weights you need
  display: "swap", // good practice
});

export const metadata = {
  title: "Optodoce AI | Create Anything with AI",
  description: "Experience the next generation of creativity with Optodoce AI — generate voices, images, and more instantly using advanced artificial intelligence.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
