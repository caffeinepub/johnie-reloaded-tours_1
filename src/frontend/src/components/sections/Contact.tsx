import { siteContent } from "@/data/content";
import {
  CheckCircle,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function UgandaMap() {
  return (
    <svg
      viewBox="0 0 300 340"
      className="w-full h-full"
      role="img"
      aria-label="Map of Uganda showing Kampala and Kabale"
    >
      <title>Map of Uganda showing Kampala and Kabale locations</title>
      <path
        d="M 90 40 L 120 30 L 160 25 L 200 35 L 230 50 L 240 80 L 245 110 L 240 140 L 235 160 L 240 185 L 235 210 L 225 240 L 215 265 L 200 285 L 180 300 L 160 305 L 140 300 L 120 290 L 100 270 L 80 250 L 65 225 L 60 200 L 55 170 L 58 145 L 60 120 L 65 90 L 75 65 Z"
        fill="#0B5A3A"
        fillOpacity="0.15"
        stroke="#0B5A3A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse
        cx="220"
        cy="290"
        rx="35"
        ry="25"
        fill="#7CBDE0"
        fillOpacity="0.5"
      />
      <text x="205" y="295" fontSize="8" fill="#3a7aad" fontStyle="italic">
        L. Victoria
      </text>
      <circle
        cx="158"
        cy="195"
        r="7"
        fill="#D4A017"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M158 195 L158 215" stroke="#D4A017" strokeWidth="2" />
      <circle cx="158" cy="217" r="2" fill="#D4A017" />
      <rect
        x="120"
        y="218"
        width="76"
        height="18"
        rx="4"
        fill="#0B5A3A"
        fillOpacity="0.85"
      />
      <text
        x="158"
        y="230"
        fontSize="10"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        Kampala
      </text>
      <circle
        cx="100"
        cy="268"
        r="7"
        fill="#D4A017"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M100 268 L100 288" stroke="#D4A017" strokeWidth="2" />
      <circle cx="100" cy="290" r="2" fill="#D4A017" />
      <rect
        x="66"
        y="291"
        width="68"
        height="18"
        rx="4"
        fill="#0B5A3A"
        fillOpacity="0.85"
      />
      <text
        x="100"
        y="303"
        fontSize="10"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        Kabale
      </text>
      <text
        x="255"
        y="55"
        fontSize="11"
        fill="#0B5A3A"
        fontWeight="bold"
        textAnchor="middle"
      >
        N
      </text>
      <path d="M255 58 L255 72" stroke="#0B5A3A" strokeWidth="1.5" />
      <path
        d="M251 62 L255 58 L259 62"
        stroke="#0B5A3A"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brown py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-sand uppercase tracking-wide">
            Contact & Booking
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <CheckCircle size={56} className="text-gold" />
                  <h3 className="font-display text-2xl font-bold text-sand">
                    Thank You!
                  </h3>
                  <p className="text-sand/70">Johnie will be in touch soon.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-gold text-sm underline hover:text-gold-light transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-2xl font-bold text-sand mb-6">
                    Book a Safari
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sand/80 text-xs tracking-widest uppercase mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition-colors text-sm"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sand/80 text-xs tracking-widest uppercase mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition-colors text-sm"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sand/80 text-xs tracking-widest uppercase mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        placeholder="Tell me about your ideal safari experience..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        rows={5}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-lg transition-all duration-200 shadow-gold"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-6 space-y-3">
              {siteContent.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sand/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone size={15} className="text-gold flex-shrink-0" />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${siteContent.email}`}
                className="flex items-center gap-3 text-sand/70 hover:text-gold transition-colors text-sm"
              >
                <Mail size={15} className="text-gold flex-shrink-0" />
                {siteContent.email}
              </a>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={siteContent.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sand/70 hover:text-gold transition-colors text-sm"
                >
                  <Instagram size={15} className="text-gold" /> Instagram
                </a>
                <a
                  href={siteContent.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sand/70 hover:text-gold transition-colors text-sm"
                >
                  <Facebook size={15} className="text-gold" /> Facebook
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 h-full min-h-[400px] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-gold" />
                <h3 className="font-display text-lg font-bold text-sand">
                  Based In Uganda
                </h3>
              </div>
              <div className="flex-1 rounded-xl overflow-hidden bg-sand/5 flex items-center justify-center">
                <UgandaMap />
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 text-sand/60 text-xs">
                  <div className="w-3 h-3 rounded-full bg-gold" /> Kabale (Home
                  Base)
                </div>
                <div className="flex items-center gap-2 text-sand/60 text-xs">
                  <div className="w-3 h-3 rounded-full bg-gold" /> Kampala
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
