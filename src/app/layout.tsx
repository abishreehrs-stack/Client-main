import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Abishree HR Consultants | Premier Manpower & HR Advisory",
  description: "Premier HR Consultancy providing executive search, technical staffing solutions, labor law compliance, and strategic HR advisory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" 
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Symbols+Outlined" 
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" 
        />
      </head>
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
        <ClientProviders>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
