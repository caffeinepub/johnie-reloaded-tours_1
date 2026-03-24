import { siteContent } from "@/data/content";
import { Award, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  return (
    <section id="experience" className="bg-forest py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
              Career
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-sand uppercase tracking-wide">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5" />
        </div>

        <div className="relative">
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gold/30"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {siteContent.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 w-5 h-5 rounded-full bg-gold border-2 border-forest flex items-center justify-center">
                  <Briefcase size={9} className="text-forest" />
                </div>
                <div className="bg-forest-dark/60 border border-gold/20 rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-gold">
                        {exp.company}
                      </h3>
                      <p className="text-sand/70 text-sm font-medium">
                        {exp.role}
                      </p>
                    </div>
                    <span className="bg-gold/20 text-gold text-xs px-3 py-1 rounded-full tracking-wide font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sand/60 text-sm flex items-start gap-2"
                      >
                        <span className="text-gold mt-1.5 text-xs">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="relative pl-16 sm:pl-20"
            >
              <div className="absolute left-4 sm:left-6 -translate-x-1/2 w-5 h-5 rounded-full bg-gold border-2 border-forest flex items-center justify-center">
                <Award size={9} className="text-forest" />
              </div>
              <div className="bg-gold/10 border border-gold/40 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award size={20} className="text-gold flex-shrink-0" />
                  <h3 className="font-display text-lg font-bold text-gold">
                    {siteContent.certification.title}
                  </h3>
                </div>
                <p className="text-sand/70 text-sm">
                  {siteContent.certification.issuer}
                </p>
                <span className="inline-block mt-2 bg-gold/20 text-gold text-xs px-3 py-1 rounded-full tracking-wide">
                  {siteContent.certification.year}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
