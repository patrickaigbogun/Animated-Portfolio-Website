import type { Metadata } from "next";
import "./style.css";
import "@/public/boxicons/css/boxicons.min.css" ;
import Header from "./components/templates/header";
import Footer from "./components/templates/footer";



export const metadata: Metadata = {
  title: "Celebrity Website",
  description: "A celebrity website template built by Patrick Aigbogun",
  robots : "index, follow",
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
			<link href='./boxicons.min.css' rel='stylesheet'></link>
			<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
		</head>
      <body  className="body">
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
