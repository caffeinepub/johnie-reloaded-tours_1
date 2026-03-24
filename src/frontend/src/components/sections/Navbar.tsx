import { siteContent } from "@/data/content";
import { usePdfDownload } from "@/hooks/usePdfDownload";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { download, loading } = usePdfDownload();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest shadow-lg" : "bg-forest/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="font-display text-gold font-bold text-lg tracking-widest uppercase hover:text-gold-light transition-colors"
          >
            {siteContent.shortName}
          </button>

          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sand/80 hover:text-gold text-xs tracking-widest font-medium transition-colors uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={download}
              disabled={loading}
              className="border border-gold text-gold hover:bg-gold/10 font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-200 flex items-center gap-2 disabled:opacity-60"
            >
              <Download size={14} />
              {loading ? "GENERATING..." : "DOWNLOAD PDF"}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="bg-gold hover:bg-gold-light text-forest-dark font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-200 shadow-gold"
            >
              BOOK A SAFARI
            </button>
          </div>

          <button
            type="button"
            className="md:hidden text-sand p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-forest-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sand/80 hover:text-gold text-sm tracking-widest uppercase py-3 text-left border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={download}
              disabled={loading}
              className="mt-3 border border-gold text-gold hover:bg-gold/10 font-bold text-xs tracking-widest uppercase px-5 py-3 rounded text-center flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Download size={14} />
              {loading ? "GENERATING..." : "DOWNLOAD PDF"}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-2 bg-gold text-forest-dark font-bold text-xs tracking-widest uppercase px-5 py-3 rounded text-center"
            >
              BOOK A SAFARI
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
