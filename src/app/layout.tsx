import type { Metadata } from "next";
import { OutfitFont } from "../fonts/fonts";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fernando Ortiz - Portfolio",
  description:
    "Welcome to my portfolio website! I'm a passionate web developer specializing in creating modern and responsive web applications. Explore my projects, skills, and experience as you navigate through my portfolio. Feel free to reach out for collaborations or inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${OutfitFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
