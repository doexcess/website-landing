import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import localFont from "next/font/local";

const Gilroy = localFont({
  src: [
    {
      path: "./fonts/gilroy/Gilroy-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Bold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "DoExcess",
  description: "Your one stop solution to everything",
  icons: {
    icon: "/icon.png",
  },
};

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${Gilroy.className} antialiased`}
        style={{ backgroundColor: "#fff" }}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
