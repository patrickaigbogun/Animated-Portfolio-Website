import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Celebrity Website",
  description: "Built by Patrick Aigbogun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
