// login/layout.js
import "../globals.css"; // Ako želite zajedničke stilove
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Login Page",
  description: "Login page layout",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
          <head />
          <body>
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
