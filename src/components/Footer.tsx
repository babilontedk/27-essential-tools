import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-card mt-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tighter mb-3">
            <Wrench className="h-5 w-5 text-primary" />
            <span>27toolsspot</span>
          </Link>
          <p className="text-sm text-muted-foreground">27 lightweight, privacy-first utilities. No tracking. No lag. Just tools.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
            <Link to="/tools" className="block hover:text-primary transition-colors">Tools</Link>
            <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Legal</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="block hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="block hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>contact@27toolsspot.com</p>
            <p>All tools run 100% in your browser.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} 27toolsspot. All rights reserved.
      </div>
    </div>
  </footer>
);
