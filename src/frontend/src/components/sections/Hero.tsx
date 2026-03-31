import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.06 155) 0%, oklch(0.15 0.04 140) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 40%, oklch(0.66 0.13 72 / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.28 0.07 155 / 0.5) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="oklch(0.66 0.13 72)"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src="/assets/generated/hope-for-humanity-logo-v2-transparent.dim_800x500.png"
            alt="Hope for Humanity"
            className="h-24 w-auto object-contain mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-warmwhite leading-tight mb-6"
        >
          Transforming Lives,{" "}
          <span className="text-gold">Building Communities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-warmwhite/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hope for Humanity and Community Development empowers communities
          through sustainable programs in education, healthcare, and agriculture
          — creating lasting change across Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-nearblack font-bold rounded-full px-8 shadow-gold text-base"
            data-ocid="hero.primary_button"
          >
            <a href="#get-involved">Get Involved</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-warmwhite text-warmwhite hover:bg-warmwhite/10 rounded-full px-8 text-base"
            data-ocid="hero.secondary_button"
          >
            <a href="#mission">Learn More</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <a
            href="#mission"
            className="inline-flex flex-col items-center gap-2 text-warmwhite/60 hover:text-gold transition-colors"
          >
            <span className="text-sm">Discover Our Work</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
