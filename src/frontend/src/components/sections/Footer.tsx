import { siteContent } from "@/data/content";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-display text-2xl font-bold text-gold tracking-widest uppercase mb-3">
              {siteContent.shortName}
            </div>
            <p className="text-sand/60 text-sm leading-relaxed mb-4">
              {siteContent.tagline}
            </p>
            <p className="text-sand/50 text-xs">{siteContent.location}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-sand uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="text-sand/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-sand uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {siteContent.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sand/50 hover:text-gold text-sm transition-colors"
                  >
                    <Phone size={13} className="text-gold/60" /> {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="flex items-center gap-2 text-sand/50 hover:text-gold text-sm transition-colors"
                >
                  <Mail size={13} className="text-gold/60" />{" "}
                  {siteContent.email}
                </a>
              </li>
              <li className="flex gap-3 pt-1">
                <a
                  href={siteContent.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand/40 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={siteContent.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand/40 hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand/30">
          <p>
            &copy; {year} {siteContent.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
