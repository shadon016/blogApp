import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Nav from "@/components/Nav.jsx";
import Footer from "@/components/footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogify",
  description: "Powered by Shadon Chandra Das",
};

export default function RootLayout({ children }) {
  const navlinks = [
    { title: "home", links: "/" },
    { title: "blogs", links: "/blogs" },
    { title: "contacts", links: "/contacts" },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav navItems={navlinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
