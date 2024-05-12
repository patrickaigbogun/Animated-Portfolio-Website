import type { Metadata } from "next";
import "./style.css";


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
      <head>
      <meta charSet="UTF-8"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Animated Portfolio Website HTML CSS JS</title>
      <link href='./boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body  className="body">{children}</body>
    </html>
  );
}
