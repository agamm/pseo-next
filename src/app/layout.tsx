import CookieConsent from "react-cookie-consent";
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
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </body>
    </html>
  );
}
