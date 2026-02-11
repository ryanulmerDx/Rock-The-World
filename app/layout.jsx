import "./globals.css";

export const metadata = {
  title: "Rock The World Productions | Live Event Production",
  description:
    "Rock The World Productions delivers professional live event production, audio, video, lighting, live streaming, and podcast production. Serving artists, venues, and organizers since 1991.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Rock The World Productions | Live Event Production",
    description:
      "Professional live event production — audio, video, lighting, streaming, and podcasts. We do it live.",
    url: "https://rtwpro.com",
    siteName: "Rock The World Productions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock The World Productions | Live Event Production",
    description:
      "Professional live event production — audio, video, lighting, streaming, and podcasts. We do it live.",
  },
  metadataBase: new URL("https://rtwpro.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
