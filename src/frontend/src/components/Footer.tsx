import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Instagram } from "lucide-react";

const FOOTER_LINKS = {
  Solutions: [
    { label: "AI Automation", to: "/services" },
    { label: "Internships", to: "/services" },
    { label: "IT Solutions", to: "/services" },
    { label: "Full Stack Development", to: "/services" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ],
};

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/arukien-technologies/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:arukien418@gmail.com",
    label: "Mail",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/arukien_technologies?igsh=NDRvYXR5andqdTgx",
    label: "Instagram",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <img
                src="/assets/logo.png"
                alt="Arukien Technologies Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-base text-foreground tracking-wide">
                Arukien Technologies
              </span>
            </Link>

            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building the Future of Enterprise Software. Scalable, AI-driven
              solutions for modern business innovation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-1 text-sm font-body text-muted-foreground">
              <p className="flex items-center gap-2">
                <span>📍</span>
                Jyothy Boys Hostel, Tataguni, Kanakapura Off. Road, Bangalore 62
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                8050211095
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                arukien418@gmail.com
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground text-sm tracking-wider uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border/60" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-muted-foreground">
          <p>©{year} Arukien Technologies. All rights reserved.</p>

          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition"
          >
            
          </a>
        </div>
      </div>
    </footer>
  );
}
