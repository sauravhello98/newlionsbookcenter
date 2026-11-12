import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Lions Book Center | Books & Stationery Janakpurdham",
  description:
    "A Legacy of Learning Since 2052 BS. School books, college books, quality stationery, wholesale & retail in Janakpurdham, Nepal.",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
      </head>
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
