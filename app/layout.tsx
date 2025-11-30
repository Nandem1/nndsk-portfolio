import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "nndsk - Portfolio",
    template: "%s | nndsk",
  },
  description: "Portfolio personal de desarrollo web y software. Proyectos, experiencia y habilidades.",
  keywords: [
    "portfolio",
    "desarrollador",
    "developer",
    "web development",
    "software engineer",
    "programador",
  ],
  authors: [{ name: "nndsk" }],
  creator: "nndsk",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "nndsk - Portfolio",
    description: "Portfolio personal de desarrollo web y software. Proyectos, experiencia y habilidades.",
    siteName: "nndsk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "nndsk - Portfolio",
    description: "Portfolio personal de desarrollo web y software. Proyectos, experiencia y habilidades.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar aquí los códigos de verificación cuando los tengas
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
