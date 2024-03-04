import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hungry Eats | Home",
  description: "Food Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-screen ")}>
        <UserProvider>
          <Header />
          <Hero />
          <div className="container mx-auto flex-1 py-10">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
