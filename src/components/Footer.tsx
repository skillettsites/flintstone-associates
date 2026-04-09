import { ExternalLink } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-xs font-bold text-background">
                FA
              </div>
              <span className="font-semibold tracking-tight">
                Flintstone Associates
              </span>
            </div>
            <p className="text-sm text-muted max-w-xs">
              Specialist recruitment, built on relationships and driven by results.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-card-border text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Flintstone Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
