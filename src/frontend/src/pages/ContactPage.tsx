import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Github,
  Handshake,
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Scroll-reveal hook ----------
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ---------- Contact info items ----------
const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Location",
    value: "123 Tech Park, Bangalore, Karnataka, India — 560001",
  },
  { icon: Mail, label: "Email", value: "info@arukientechnologies.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM IST" },
];

const SOCIALS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const QUICK_CARDS = [
  {
    icon: ShoppingBag,
    heading: "Sales Inquiry",
    email: "sales@arukientechnologies.com",
    sub: "Interested in our services?",
  },
  {
    icon: Headset,
    heading: "Technical Support",
    email: "support@arukientechnologies.com",
    sub: "Need help with an ongoing project?",
  },
  {
    icon: Handshake,
    heading: "Partnership",
    email: "partners@arukientechnologies.com",
    sub: "Explore collaboration opportunities",
  },
];

// ---------- Sub-components ----------
function RevealSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ---------- Main page ----------
export default function ContactPage() {
  return (
    <div data-ocid="contact.page" className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="relative py-24 px-6 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav
            data-ocid="contact.breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
          >
            <Link
              to="/"
              data-ocid="contact.home_link"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Contact</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-5 leading-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? We'd love to hear from you — reach us
            instantly on WhatsApp.
          </p>
        </div>
      </section>

      {/* ── MAIN 2-COL LAYOUT ── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* LEFT — WhatsApp CTA */}
          <RevealSection>
            <div
              data-ocid="contact.whatsapp_card"
              className="bg-card border border-border rounded-2xl p-8 md:p-10 hover-lift shadow-subtle hover:shadow-elevated flex flex-col items-center justify-center text-center gap-6 min-h-[380px]"
            >
              {/* WhatsApp icon badge */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-elevated"
                style={{
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <WhatsAppIcon className="w-12 h-12 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-2 text-foreground">
                  Chat with Us on WhatsApp
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  We're just a message away. Click below to open a WhatsApp chat
                  directly with our team — no forms, no waiting.
                </p>
              </div>

              {/* Reply time badge */}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
                style={{
                  background: "#f0fdf4",
                  borderColor: "#86efac",
                  color: "#15803d",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                We typically reply within a few hours
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/8792727104"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="w-full max-w-sm"
              >
                <Button
                  type="button"
                  size="lg"
                  className="w-full gap-3 font-display font-semibold text-base py-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  Start WhatsApp Chat
                </Button>
              </a>

              <p className="text-xs text-muted-foreground">
                Opens WhatsApp in a new tab •{" "}
                <span className="font-medium text-foreground">
                  +91 87927 27104
                </span>
              </p>
            </div>
          </RevealSection>

          {/* RIGHT — Contact Info */}
          <RevealSection className="[transition-delay:150ms]">
            <div
              data-ocid="contact.info_card"
              className="bg-card border border-border rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between hover-lift shadow-subtle hover:shadow-elevated"
            >
              <div>
                <h2 className="text-2xl font-display font-bold mb-1 text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Reach us through any of the channels below.
                </p>

                <ul className="space-y-6">
                  {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                          {label}
                        </p>
                        <p className="text-foreground text-sm leading-relaxed break-words">
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                {/* Social links */}
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Follow Us
                </p>
                <div
                  data-ocid="contact.social_links"
                  className="flex gap-3 mb-8"
                >
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      data-ocid={`contact.social_${label.toLowerCase()}_link`}
                      className="w-10 h-10 rounded-xl bg-muted/60 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-smooth"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {/* Consultation CTA */}
                <a
                  href="mailto:info@arukientechnologies.com"
                  data-ocid="contact.consultation_button"
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-smooth gap-2 font-semibold"
                  >
                    Book a Free Consultation <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── QUICK CONTACT CARDS ── */}
      <section className="py-12 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <h2 className="text-2xl font-display font-bold text-center mb-10 text-foreground">
              Other Ways to <span className="gradient-text">Reach Us</span>
            </h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUICK_CARDS.map(({ icon: Icon, heading, email, sub }, i) => (
              <RevealSection
                key={heading}
                className={`[transition-delay:${i * 100}ms]`}
              >
                <div
                  data-ocid={`contact.quick_card.${i + 1}`}
                  className="bg-card border border-border rounded-2xl p-7 hover-lift shadow-subtle hover:shadow-elevated hover:border-primary/30 transition-smooth flex flex-col gap-4 h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-1">
                      {heading}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{sub}</p>
                    <a
                      href={`mailto:${email}`}
                      data-ocid={`contact.quick_email.${i + 1}`}
                      className="text-primary text-sm font-medium accent-underline hover:text-accent transition-smooth break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION / MAP ── */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <h2 className="text-2xl font-display font-bold text-center mb-10 text-foreground">
              Our <span className="gradient-text">Office</span>
            </h2>
          </RevealSection>
          <RevealSection className="[transition-delay:100ms]">
            <div
              data-ocid="contact.map_section"
              className="bg-card border border-border rounded-2xl overflow-hidden hover-lift shadow-subtle"
            >
              {/* Static decorative map */}
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-primary/10 via-muted to-accent/10 flex items-center justify-center overflow-hidden border-b border-border">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(oklch(var(--border)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--border)) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Pulse rings */}
                <div
                  className="absolute w-32 h-32 rounded-full border border-primary/20 animate-ping"
                  style={{ animationDuration: "2.5s" }}
                />
                <div
                  className="absolute w-20 h-20 rounded-full border border-primary/30 animate-ping"
                  style={{ animationDuration: "2s" }}
                />
                {/* Pin card */}
                <div className="relative z-10 bg-white/90 border border-border rounded-2xl px-6 py-5 flex flex-col items-center gap-2 shadow-elevated">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-display font-bold text-foreground text-sm">
                    Arukien Technologies
                  </p>
                  <p className="text-muted-foreground text-xs text-center max-w-[200px]">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
              {/* Address block */}
              <div className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Full Address
                  </p>
                  <p className="text-foreground font-medium">
                    123 Tech Park, Bangalore, Karnataka, India — 560001
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://maps.google.com/?q=Bangalore+Karnataka+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.directions_link"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="gap-2 border-primary/40 text-primary hover:bg-primary/10 transition-smooth whitespace-nowrap"
                    >
                      Get Directions <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/8792727104"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp_map_button"
                  >
                    <Button
                      type="button"
                      size="sm"
                      className="gap-2 text-white whitespace-nowrap"
                      style={{ background: "#25D366" }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
