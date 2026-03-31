import { ArrowRight, BookOpen, Heart, Sprout } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const programs = [
  {
    icon: BookOpen,
    title: "Education for All",
    description:
      "We build and equip schools, train teachers, and provide scholarships to ensure every child — regardless of background — can access quality education and unlock their full potential.",
    tag: "Education",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Community Healthcare",
    description:
      "From mobile health clinics to maternal care programs, we bring essential medical services to underserved communities, reducing preventable illness and improving quality of life.",
    tag: "Healthcare",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Through training in modern farming techniques, access to tools, and cooperative market linkages, we help families achieve food security and generate sustainable income from their land.",
    tag: "Agriculture",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="bg-cream py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-forest/10 text-forest font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-nearblack">
            Key Programs &amp; Initiatives
          </h2>
          <p className="text-charcoal mt-4 max-w-2xl mx-auto text-lg">
            Three pillars of transformation — working together to build thriving
            communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-offwhite border border-softborder rounded-2xl overflow-hidden shadow-card group hover:-translate-y-1 transition-transform"
              data-ocid={`programs.item.${i + 1}`}
            >
              <div className="h-3 bg-forest" />
              <div className="p-7">
                <div
                  className={`w-14 h-14 rounded-xl ${prog.iconBg} flex items-center justify-center mb-5`}
                >
                  <prog.icon size={28} className={prog.iconColor} />
                </div>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${prog.color}`}
                >
                  {prog.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-nearblack mb-3">
                  {prog.title}
                </h3>
                <p className="text-charcoal leading-relaxed text-sm mb-6">
                  {prog.description}
                </p>
                <a
                  href="#get-involved"
                  className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:text-gold transition-colors group"
                  data-ocid="programs.link"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
