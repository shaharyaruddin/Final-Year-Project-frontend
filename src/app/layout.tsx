import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FYP - Simple AI Chat",
  description:
    "Custom AI assistant chatbot interface for university final year project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' http: https:; style-src 'self' 'unsafe-inline';"
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        {children}

        <Script
          id="chatbot-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ChatbotConfig = {
                companyId: "696fbb2fad09e2f039554f70",
                apiUrl: "http://localhost:1000/api/ask"
              };
            `,
          }}
        />

        {/* ✅ Chatbot Widget */}
        <Script src="/chatbot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
