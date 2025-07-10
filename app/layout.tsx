import type { Metadata } from "next";
import { Fira_Code, Inter, Italiana, Silkscreen } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import MainNavBar from "@/components/main/MainNavBar";
import AppWrapper from "@/components/page/AppWrapper";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fira_code = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const bytesized = Silkscreen({
  variable: "--font-silkscreen",
  weight: "400",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DemoLab by Ryan Macalandag",
  description: "A kitchen sink of ideas, trials and cool stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bytesized.variable} ${fira_code.variable} ${italiana.variable} antialiased`}
      >
        <AppWrapper>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset>
              <MainNavBar />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </AppWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
