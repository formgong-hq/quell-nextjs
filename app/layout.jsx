import Script from "next/script";
import c from "../content.json";

export const metadata = {
  title: c.site.title,
  description: c.site.description,
  icons: { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230d1113'/%3E%3Cpath d='M6 27V17a10 10 0 0 1 20 0v10' fill='none' stroke='%23e4e6e1' stroke-width='2.5'/%3E%3C/svg%3E" },
};

export default function RootLayout({ children }) {
  return (
    <html lang={c.site.lang}>
      <head>
        <link rel="preload" as="image" href="/img/hero.webp" />
        <link rel="stylesheet" href="/site.css" />
      </head>
      <body>
        {children}
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
