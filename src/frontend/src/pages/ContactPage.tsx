import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Scroll-reveal hook ----------
function useScrollReveal() {
  const ref = useRef(null);
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
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// ---------- Contact info ----------
const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Location",
    value:
      "Arukien Technologies, Tataguni, Off. Kanakapura Road, Bangalore 560062",
  },
  {
    icon: Mail,
    label: "Email",
    value: "arukien418@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8050211095",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM IST",
  },
];

const SOCIALS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/arukien-technologies/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/arukien_technologies",
    label: "Instagram",
  },
];

const QUICK_CARDS = [
  {
    icon: ShoppingBag,
    heading: "Sales Inquiry",
    email: "arukien418@gmail.com",
    sub: "Interested in our services?",
  },
  {
    icon: Headset,
    heading: "Technical Support",
    email: "arukien418@gmail.com",
    sub: "Need help with an ongoing project?",
  },
];

// ---------- Reveal ----------
function RevealSection({ children, className = "" }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ---------- WhatsApp Icon ----------
function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
    </svg>
  );
}

// ---------- MAIN ----------
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground mt-4">
          Have a project? Reach us instantly on WhatsApp.
        </p>
      </section>

      {/* MAIN */}
      <section className="grid lg:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {/* WhatsApp */}
        <RevealSection>
          <a
            href="https://wa.me/8792727104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full py-6 text-white bg-green-500">
              <WhatsAppIcon className="w-5 h-5" />
              Start WhatsApp Chat
            </Button>
          </a>
        </RevealSection>

        {/* Info */}
        <RevealSection>
          <div className="space-y-6">
            {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <Icon />
                <div>
                  <p className="text-xs">{label}</p>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Quick Cards */}
      <section className="py-12 px-6">
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {QUICK_CARDS.map(({ icon: Icon, heading, email, sub }) => (
            <div key={heading} className="border p-6 rounded-xl">
              <Icon />
              <h3>{heading}</h3>
              <p>{sub}</p>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold">Our Office</h2>
        <p>Bangalore, Karnataka, India</p>

        <a
          href="https://maps.app.goo.gl/nTqHFjG7vTrryrQu7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-4">Get Directions</Button>
        </a>
      </section>
    </div>
  );
}
