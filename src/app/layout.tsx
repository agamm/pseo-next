import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

export const metadata = {
  title: "pSEO next template",
  description: "A template for programmatic SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
        <CookieBanner />
      </body>
    </html>
  );
}
