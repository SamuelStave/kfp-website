// src/app/layout.tsx
"use client";

import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import NavigationDock from "@/components/NavigationDock"; // Add this

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-white text-[#0F172A] antialiased`}>
        <main className="min-h-screen">{children}</main>
        
        {/* Only show Footer and Nav on inner pages */}
        {pathname !== "/" && (
          <>
            <Footer />
            <NavigationDock />
          </>
        )}
        
        <WhatsAppButton />
      </body>
    </html>
  );
}