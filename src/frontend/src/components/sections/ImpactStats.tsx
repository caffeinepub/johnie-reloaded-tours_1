import { Globe, Layers, MapPin, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { icon: Users, value: "5,000+", label: "Lives Impacted" },
  { icon: MapPin, value: "12", label: "Communities Served" },
  { icon: Layers, value: "8", label: "Programs Running" },
  { icon: Globe, value: "3", label: "Countries Reached" },
];

export function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="impact" className="bg-gold py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-nearblack">
            Our Community Impact
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center"
              data-ocid={`impact.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-full bg-nearblack/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={26} className="text-nearblack" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-nearblack mb-1">
                {stat.value}
              </div>
              <div className="text-nearblack/70 font-semibold text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
