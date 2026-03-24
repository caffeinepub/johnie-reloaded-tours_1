import { siteContent } from "@/data/content";
import {
  Binoculars,
  Bird,
  Globe,
  Mountain,
  PersonStanding,
} from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, React.ReactNode> = {
  binoculars: <Binoculars size={32} strokeWidth={1.5} />,
  globe: <Globe size={32} strokeWidth={1.5} />,
  mountain: <Mountain size={32} strokeWidth={1.5} />,
  bird: <Bird size={32} strokeWidth={1.5} />,
  hike: <PersonStanding size={32} strokeWidth={1.5} />,
};

export function Services() {
  return (
    <section id="services" className="bg-sand py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-brown text-xs tracking-[0.3em] uppercase font-medium">
              What I Offer
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest uppercase tracking-wide">
            Services & Specialties
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-xl p-7 shadow-card border border-gold/10 hover:border-gold/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-forest/8 flex items-center justify-center text-forest group-hover:bg-gold group-hover:text-white transition-all duration-300 mb-5">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display text-xl font-bold text-forest mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
