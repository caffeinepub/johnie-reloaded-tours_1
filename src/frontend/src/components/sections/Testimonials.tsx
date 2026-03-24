import { siteContent } from "@/data/content";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = siteContent.testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const testimonial = siteContent.testimonials[current];

  return (
    <section
      id="testimonials"
      className="texture-parchment py-20 lg:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[12rem] lg:text-[18rem] font-bold text-brown/[0.04] uppercase leading-none">
          UGANDA
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-brown text-xs tracking-[0.3em] uppercase font-medium">
              Guest Stories
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest uppercase tracking-wide">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5" />
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-card border border-gold/15 p-8 sm:p-12 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].slice(0, testimonial.rating).map((n) => (
                  <Star key={n} size={20} className="text-gold fill-gold" />
                ))}
              </div>
              <div className="font-display text-7xl text-gold/25 leading-none mb-2">
                &ldquo;
              </div>
              <p className="font-display text-xl lg:text-2xl italic text-forest leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-gold" />
                <div className="text-center">
                  <div className="font-bold text-forest text-sm tracking-wide">
                    {testimonial.author}
                  </div>
                  <div className="text-foreground/50 text-xs tracking-widest uppercase">
                    {testimonial.country}
                  </div>
                </div>
                <div className="h-px w-8 bg-gold" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gold/40 text-forest hover:bg-gold hover:text-white hover:border-gold transition-all duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {siteContent.testimonials.map((t, i) => (
                <button
                  type="button"
                  key={t.author + t.country + String(i)}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === current ? "bg-gold w-6" : "bg-gold/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-gold/40 text-forest hover:bg-gold hover:text-white hover:border-gold transition-all duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
