import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const values = [
  "Community-led development and local leadership",
  "Transparent and accountable stewardship of resources",
  "Long-term sustainability over short-term relief",
  "Dignity and respect for every individual",
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-cream py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-card"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.28 0.07 155) 0%, oklch(0.18 0.04 140) 100%)",
                minHeight: "400px",
              }}
            >
              <div className="p-10 flex flex-col items-start justify-center h-full min-h-[400px]">
                <div className="text-gold font-display text-8xl font-bold opacity-20 mb-4 leading-none">
                  HfH
                </div>
                <div className="w-full grid grid-cols-2 gap-4">
                  {[
                    { label: "Est.", value: "2015" },
                    { label: "Headquarters", value: "Uganda" },
                    { label: "Partner NGOs", value: "24+" },
                    { label: "Volunteers", value: "300+" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 rounded-xl p-4"
                    >
                      <div className="text-warmwhite/60 text-xs uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="font-display text-xl font-bold text-warmwhite">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gold/20 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-block bg-forest/10 text-forest font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-nearblack leading-tight">
              About Our Foundation
            </h2>
            <p className="text-charcoal leading-relaxed">
              Hope for Humanity and Community Development is a registered
              non-governmental organization committed to the holistic
              development of communities across Uganda, Rwanda, and Kenya.
              Founded on the principle that sustainable change comes from
              within, we partner with local leaders to design and deliver
              programs that meet real needs.
            </p>
            <p className="text-charcoal leading-relaxed">
              Our multidisciplinary team of development professionals, community
              organizers, and volunteers brings decades of combined experience
              to every program we run — ensuring that resources reach those who
              need them most, and that communities build the capacity to sustain
              progress long after our initial support.
            </p>
            <div className="space-y-3">
              <h4 className="font-display font-bold text-nearblack">
                Our Core Values
              </h4>
              {values.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <span className="text-charcoal text-sm">{v}</span>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="bg-forest hover:bg-forest-dark text-warmwhite rounded-full px-8 font-semibold"
              data-ocid="about.primary_button"
            >
              <a href="#get-involved">Partner With Us</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
