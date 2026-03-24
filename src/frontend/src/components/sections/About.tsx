import { siteContent } from "@/data/content";
import { motion } from "motion/react";

export function About() {
  const bioParagraphs = siteContent.bio.split("\n\n");

  return (
    <section id="about" className="texture-sand py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-10 bg-gold" />
          <span className="text-brown text-xs tracking-[0.3em] uppercase font-medium">
            Who I Am
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="relative w-72 sm:w-80 lg:w-96">
                <div className="absolute -inset-2 border-2 border-gold rounded-xl opacity-40" />
                <div className="absolute -inset-4 border border-gold/20 rounded-2xl" />
                <img
                  src={siteContent.profilePhoto}
                  alt={siteContent.name}
                  className="relative w-full rounded-xl object-cover shadow-card border-2 border-gold/60"
                  style={{ aspectRatio: "4/5" }}
                  loading="lazy"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-forest text-sand text-xs px-4 py-2 rounded-full tracking-widest uppercase whitespace-nowrap shadow-lg">
                  📍 {siteContent.location}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="pt-6 lg:pt-0"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest uppercase tracking-wide mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gold mb-8" />

            {bioParagraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-foreground/80 leading-relaxed mb-5 text-base"
              >
                {para}
              </p>
            ))}

            <blockquote className="relative my-8 pl-6 border-l-4 border-gold">
              <p className="font-display text-xl italic text-forest">
                &ldquo;{siteContent.quote}&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-4 mt-8">
              {siteContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-forest text-sand px-6 py-4 rounded-xl text-center shadow-card min-w-[110px]"
                >
                  <div className="font-display text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase mt-1 text-sand/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
