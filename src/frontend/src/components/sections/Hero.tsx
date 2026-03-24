import { siteContent } from "@/data/content";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${siteContent.heroImage}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,30,20,0.72) 0%, rgba(8,50,30,0.60) 50%, rgba(5,20,10,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Uganda & Rwanda
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-wide uppercase mb-4">
            {siteContent.name}
          </h1>

          <p className="text-gold text-lg sm:text-xl font-medium tracking-widest uppercase mb-1">
            {siteContent.role}
          </p>
          <p className="text-gold/80 text-base sm:text-lg font-medium tracking-widest uppercase mb-8">
            {siteContent.roleLocation}
          </p>

          <p className="text-white/80 text-xl sm:text-2xl font-display italic mb-10">
            &ldquo;{siteContent.tagline}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => handleScroll("#services")}
              className="bg-gold hover:bg-gold-light text-forest-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 shadow-gold min-w-[200px]"
            >
              VIEW MY SERVICES
            </button>
            <button
              type="button"
              onClick={() => handleScroll("#contact")}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-forest-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 min-w-[200px]"
            >
              CONTACT ME
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/70">
            <a
              href={`tel:${siteContent.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-gold transition-colors text-sm"
            >
              <Phone size={15} />
              {siteContent.phones[0]}
            </a>
            <a
              href={`mailto:${siteContent.email}`}
              className="flex items-center gap-2 hover:text-gold transition-colors text-sm"
            >
              <Mail size={15} />
              {siteContent.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={siteContent.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteContent.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
