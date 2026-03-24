import { siteContent } from "@/data/content";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  return (
    <section id="education" className="texture-sand py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-brown text-xs tracking-[0.3em] uppercase font-medium">
              Academic Background
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest uppercase tracking-wide">
            Education
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5" />
        </div>

        <div className="relative">
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-forest/20"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {siteContent.education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 w-5 h-5 rounded-full bg-forest border-2 border-gold flex items-center justify-center">
                  <GraduationCap size={9} className="text-gold" />
                </div>
                <div className="bg-white border border-forest/10 rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-forest">
                        {edu.institution}
                      </h3>
                      <p className="text-foreground/60 text-sm mt-0.5">
                        {edu.qualification}
                      </p>
                    </div>
                    <span className="bg-forest/8 text-forest text-xs px-3 py-1 rounded-full tracking-wide font-medium">
                      {edu.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
