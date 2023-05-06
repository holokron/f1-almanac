import "~/styles/globals.css";

import { type PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en" className="bg-base-300">
      <body>
        <div className="container mx-auto">
          <Navbar />
          <div className="bg-base-200 px-6 pb-6 pt-4">
            <div className="min-h-96">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
