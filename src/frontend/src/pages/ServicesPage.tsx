import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Scroll Reveal ----------
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ---------- DATA ----------
const SERVICES = [
  {
    id: "web",
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern high-performance websites and apps.",
    benefits: ["Scalable architecture", "SEO optimized", "Fast performance"],
    technologies: ["React", "Node.js"],
  },
  {
    id: "ai",
    icon: <Brain className="w-8 h-8" />,
    title: "AI & ML",
    description: "Smart automation & AI solutions.",
    benefits: ["Predictive analytics", "NLP", "Automation"],
    technologies: ["Python", "TensorFlow"],
  },
  {
    id: "mobile",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "iOS & Android apps with great UX.",
    benefits: ["Cross-platform", "Fast UI", "Secure"],
    technologies: ["React Native", "Flutter"],
  },
  {
    id: "cloud",
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure.",
    benefits: ["CI/CD", "Monitoring", "Cost optimization"],
    technologies: ["AWS", "Docker"],
  },
  {
    id: "marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Grow your business online.",
    benefits: ["SEO", "Ads", "Analytics"],
    technologies: ["Google Ads", "Meta Ads"],
  },
];

// ---------- Reveal ----------
function Reveal({ children }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

// ---------- MAIN ----------
export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-muted-foreground mt-4">
          Technology solutions tailored to your business
        </p>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <Reveal key={service.id}>
            <div className="border rounded-xl p-6 hover:shadow-lg transition">
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <ul className="text-sm mb-4 space-y-1">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button size="sm" className="gap-2">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
