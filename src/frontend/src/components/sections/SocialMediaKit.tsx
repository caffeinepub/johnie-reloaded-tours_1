import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const templates = [
  {
    src: "/assets/generated/social-facebook-template.dim_1200x630.jpg",
    platform: "Facebook Post",
    dimensions: "1200 × 630 px",
    aspect: "aspect-[1200/630]",
    filename: "hope-humanity-facebook.jpg",
  },
  {
    src: "/assets/generated/social-instagram-template.dim_1080x1080.jpg",
    platform: "Instagram Post",
    dimensions: "1080 × 1080 px",
    aspect: "aspect-square",
    filename: "hope-humanity-instagram.jpg",
  },
  {
    src: "/assets/generated/social-twitter-template.dim_1200x675.jpg",
    platform: "Twitter / X Post",
    dimensions: "1200 × 675 px",
    aspect: "aspect-[1200/675]",
    filename: "hope-humanity-twitter.jpg",
  },
  {
    src: "/assets/generated/social-linkedin-banner.dim_1584x396.jpg",
    platform: "LinkedIn Banner",
    dimensions: "1584 × 396 px",
    aspect: "aspect-[1584/396]",
    filename: "hope-humanity-linkedin.jpg",
  },
  {
    src: "/assets/generated/social-story-template.dim_1080x1920.jpg",
    platform: "Instagram Story",
    dimensions: "1080 × 1920 px",
    aspect: "aspect-[9/16]",
    filename: "hope-humanity-story.jpg",
  },
];

const LOGO_SRC =
  "/assets/generated/hope-for-humanity-logo-v2-transparent.dim_800x500.png";

const FAVICON_SRC = "/assets/generated/favicon-hfhcd-transparent.dim_64x64.png";

export function SocialMediaKit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="get-involved" className="bg-offwhite py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-forest/10 text-forest font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Brand Assets
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-nearblack">
            Social Media Template Kit
          </h2>
          <p className="text-charcoal mt-4 max-w-xl mx-auto">
            Ready-to-use branded templates for all major platforms. Download and
            share our mission across your social media channels.
          </p>
        </motion.div>

        {/* Logo download card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-offwhite border border-softborder rounded-2xl overflow-hidden shadow-card mb-6"
          data-ocid="brand.logo.card"
        >
          <div className="flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-72 lg:w-96 flex-shrink-0 flex items-center justify-center bg-forest p-8">
              <img
                src={LOGO_SRC}
                alt="Hope for Humanity Logo"
                className="max-h-40 w-auto object-contain"
              />
            </div>
            <div className="flex flex-1 items-center justify-between px-6 py-6 gap-4">
              <div>
                <div className="font-display font-bold text-nearblack text-lg">
                  Organization Logo (PNG, Transparent)
                </div>
                <div className="text-charcoal/60 text-sm mt-1">
                  800 × 500 px · Transparent background
                </div>
              </div>
              <Button
                asChild
                size="sm"
                className="bg-gold hover:bg-gold-light text-nearblack font-semibold rounded-full gap-2 shadow-gold flex-shrink-0"
                data-ocid="brand.logo.download_button"
              >
                <a href={LOGO_SRC} download="hope-humanity-logo.png">
                  <Download size={14} />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Favicon download card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-offwhite border border-softborder rounded-2xl overflow-hidden shadow-card mb-10"
          data-ocid="brand.favicon.card"
        >
          <div className="flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-72 lg:w-96 flex-shrink-0 flex items-center justify-center bg-nearblack p-8">
              <img
                src={FAVICON_SRC}
                alt="HFHCD Favicon"
                className="h-20 w-20 object-contain"
              />
            </div>
            <div className="flex flex-1 items-center justify-between px-6 py-6 gap-4">
              <div>
                <div className="font-display font-bold text-nearblack text-lg">
                  Favicon / Site Icon (PNG, Transparent)
                </div>
                <div className="text-charcoal/60 text-sm mt-1">
                  64 × 64 px · For websites, browser tabs &amp; app icons
                </div>
              </div>
              <Button
                asChild
                size="sm"
                className="bg-gold hover:bg-gold-light text-nearblack font-semibold rounded-full gap-2 shadow-gold flex-shrink-0"
                data-ocid="brand.favicon.download_button"
              >
                <a href={FAVICON_SRC} download="hfhcd-favicon.png">
                  <Download size={14} />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main wide templates */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {templates.slice(0, 2).map((tpl, i) => (
            <TemplateCard key={tpl.platform} tpl={tpl} i={i} inView={inView} />
          ))}
        </div>
        {/* Row of 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.slice(2).map((tpl, i) => (
            <TemplateCard
              key={tpl.platform}
              tpl={tpl}
              i={i + 2}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateCard({
  tpl,
  i,
  inView,
}: {
  tpl: (typeof templates)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * i }}
      className="bg-offwhite border border-softborder rounded-2xl overflow-hidden shadow-card group"
      data-ocid={`social.item.${i + 1}`}
    >
      <div className={`${tpl.aspect} relative overflow-hidden bg-gray-100`}>
        <img
          src={tpl.src}
          alt={tpl.platform}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <div className="font-display font-bold text-nearblack text-base">
            {tpl.platform}
          </div>
          <div className="text-charcoal/60 text-xs mt-0.5">
            {tpl.dimensions}
          </div>
        </div>
        <Button
          asChild
          size="sm"
          className="bg-gold hover:bg-gold-light text-nearblack font-semibold rounded-full gap-2 shadow-gold"
          data-ocid="social.download_button"
        >
          <a href={tpl.src} download={tpl.filename}>
            <Download size={14} />
            Download
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
