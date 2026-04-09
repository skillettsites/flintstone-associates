import Link from "next/link";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3">
              <Logo size={32} />
              <span className="font-semibold tracking-tight">
                Flintstone Associates
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Specialist recruitment, built on relationships and driven by results.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
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
