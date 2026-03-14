import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20">
    <Navbar />
    <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">{children}</main>
    <Footer />
    <BackToTop />
  </div>
);
