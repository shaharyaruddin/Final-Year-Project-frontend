import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Final Year Project",
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
                companyId: "69754b5d01cd080d35913643",
                apiUrl: "http://localhost:1000/api/ask"
              };
            `,
          }}
        />

        {/* ✅ Chatbot Widget */}
        <Script src="http://localhost:3002/chatbot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
