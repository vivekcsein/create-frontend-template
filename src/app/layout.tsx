import "../styles/globals.css";
import type { Metadata } from "next";

import { poppins, roboto } from "@/libs/configs/config.styles";
import FontsProvider from "@/components/Providers/FontsProvider";
import StoreProvider from "@/components/Providers/StoreProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Title",
  description: "%{description} | Title",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FontsProvider>
              <Header />
              {children}
              <Footer />
            </FontsProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
