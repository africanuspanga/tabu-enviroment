import "./globals.css";

export const metadata = {
  title: "TABU Environment Project | Tree Planting & Conservation in Tanzania",
  description:
    "TABU Environment Project is a community-based environmental NGO in Iringa, Tanzania. We restore nature through tree planting, conservation, and environmental education. Join our mission to protect tomorrow!",
  keywords: [
    "environmental conservation",
    "tree planting",
    "Tanzania",
    "Iringa",
    "NGO",
    "reforestation",
    "climate action",
    "sustainability",
    "TABU Environment"
  ],
  authors: [{ name: "TABU Environment Project" }],
  openGraph: {
    title: "TABU Environment Project | Tree Planting & Conservation",
    description:
      "Community-driven environmental conservation through tree planting, protection, and sustainable awareness in Iringa and across Tanzania.",
    type: "website",
    locale: "en_US",
    images: ["/tabu-logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TABU Environment Project",
    description: "Growing Trees. Saving Futures. Join our mission in Tanzania!"
  },
  icons: {
    icon: "/tabu-logo.png",
    apple: "/tabu-logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
