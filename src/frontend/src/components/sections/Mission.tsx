import { Eye, Target } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="bg-cream py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-forest/10 text-forest font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Foundation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-nearblack">
            Our Mission &amp; Vision
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-card border border-softborder"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.28 0.07 155) 0%, oklch(0.22 0.06 155) 100%)",
                minHeight: "360px",
              }}
            >
              <div className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[360px]">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <Target size={40} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-warmwhite mb-4">
                  Rooted in Purpose
                </h3>
                <p className="text-warmwhite/80 leading-relaxed">
                  Since 2015, we have worked alongside communities to create
                  resilient, self-sufficient societies through grassroots
                  programs and local leadership.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  {[
                    { year: "2015", label: "Founded" },
                    { year: "3", label: "Countries" },
                    { year: "12", label: "Communities" },
                    { year: "5K+", label: "Lives Changed" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 rounded-xl p-3"
                    >
                      <div className="font-display text-2xl font-bold text-gold">
                        {stat.year}
                      </div>
                      <div className="text-warmwhite/70 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/20 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest flex items-center justify-center">
                <Target size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-nearblack mb-2">
                  Our Mission
                </h3>
                <p className="text-charcoal leading-relaxed">
                  To empower marginalized communities through transformative
                  programs in education, healthcare, and sustainable agriculture
                  — creating pathways out of poverty and building a foundation
                  of lasting dignity and opportunity for all.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest flex items-center justify-center">
                <Eye size={22} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-nearblack mb-2">
                  Our Vision
                </h3>
                <p className="text-charcoal leading-relaxed">
                  A world where every community has the resources, knowledge,
                  and leadership to thrive independently — where hope is not
                  charity but a shared commitment to human flourishing across
                  generations.
                </p>
              </div>
            </div>

            <div className="bg-offwhite border border-softborder rounded-xl p-6">
              <p className="text-charcoal italic font-display text-lg leading-relaxed">
                &ldquo;We believe every person carries the seed of change. Our
                role is to provide the soil, the water, and the sunlight for
                communities to grow on their own.&rdquo;
              </p>
              <p className="text-forest font-semibold mt-3">
                — Founder, Hope for Humanity
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
