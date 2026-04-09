import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flintstone Associates | Executive Recruitment",
  description:
    "Flintstone Associates is a specialist recruitment agency connecting exceptional talent with the businesses that need them most. Executive search, contract staffing, and talent advisory.",
  metadataBase: new URL("https://flintstoneassociates.com"),
  openGraph: {
    title: "Flintstone Associates | Executive Recruitment",
    description:
      "Specialist recruitment agency connecting exceptional talent with the businesses that need them most.",
    type: "website",
    url: "https://flintstoneassociates.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flintstone Associates",
              url: "https://flintstoneassociates.com",
              description:
                "Specialist recruitment agency connecting exceptional talent with outstanding businesses.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
