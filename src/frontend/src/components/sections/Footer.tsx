import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Community Impact", href: "#impact" },
  { label: "About Us", href: "#about" },
  { label: "Social Media Kit", href: "#get-involved" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-forest text-warmwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <img
              src="/assets/generated/hope-for-humanity-logo-transparent.dim_800x500.png"
              alt="Hope for Humanity"
              className="h-16 w-auto object-contain"
            />
            <p className="text-warmwhite/70 text-sm leading-relaxed">
              Hope for Humanity and Community Development — empowering
              communities through sustainable, people-centred programs across
              Africa.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                  data-ocid="footer.link"
                >
                  <Icon size={16} className="text-warmwhite" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-warmwhite mb-5 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-warmwhite/70 hover:text-gold text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-warmwhite mb-5 text-lg">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-warmwhite/70 text-sm">
                  Kampala, Uganda
                  <br />
                  East Africa
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@hopeforhumanity.org"
                  className="text-warmwhite/70 hover:text-gold text-sm transition-colors"
                >
                  info@hopeforhumanity.org
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="text-warmwhite/70 text-sm">
                  +256 700 123 456
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h4 className="font-display font-bold text-warmwhite mb-5 text-lg">
              Contact Us
            </h4>
            {sent ? (
              <div
                className="bg-gold/20 rounded-xl p-5 text-center"
                data-ocid="contact.success_state"
              >
                <p className="text-gold font-semibold">
                  Thank you! We will be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3"
                data-ocid="contact.modal"
              >
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="bg-white/10 border-white/20 text-warmwhite placeholder:text-warmwhite/40 focus:border-gold"
                  required
                  data-ocid="contact.input"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="bg-white/10 border-white/20 text-warmwhite placeholder:text-warmwhite/40 focus:border-gold"
                  required
                  data-ocid="contact.input"
                />
                <Textarea
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="bg-white/10 border-white/20 text-warmwhite placeholder:text-warmwhite/40 focus:border-gold min-h-[90px]"
                  required
                  data-ocid="contact.textarea"
                />
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-nearblack font-semibold rounded-full"
                  data-ocid="contact.submit_button"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-warmwhite/50">
          <p>
            &copy; {new Date().getFullYear()} Hope for Humanity and Community
            Development. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={13} className="text-gold fill-gold" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="hover:text-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
