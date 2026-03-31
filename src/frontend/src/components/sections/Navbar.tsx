import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Community Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-forest transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <a
          href="#home"
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/hope-for-humanity-logo-v2-transparent.dim_800x500.png"
            alt="Hope for Humanity"
            className="h-14 w-auto object-contain"
          />
        </a>
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="bg-gold hover:bg-gold-light text-nearblack font-semibold rounded-full px-6 shadow-gold hidden sm:flex"
            data-ocid="nav.primary_button"
          >
            <a href="#get-involved">Donate Now</a>
          </Button>
          <button
            type="button"
            className="lg:hidden text-warmwhite"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <nav
        className="hidden lg:block border-t border-white/10"
        data-ocid="nav.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-1 py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-warmwhite/90 hover:text-gold text-sm font-medium px-4 py-2 rounded transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-forest-dark border-t border-white/10"
            data-ocid="nav.dropdown_menu"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-warmwhite py-2 text-base font-medium hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-gold hover:bg-gold-light text-nearblack font-semibold rounded-full mt-2"
              >
                <a href="#get-involved">Donate Now</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
