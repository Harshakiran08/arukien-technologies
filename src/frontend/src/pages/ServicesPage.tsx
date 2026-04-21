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

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Types ─────────────────────────────────────────────────────────────────────
interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  technologies: string[];
  accentClass: string;
  iconBgClass: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const SERVICES: ServiceDetail[] = [
  {
    id: "web-development",
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description:
      "We build modern, high-performance web applications using cutting-edge technologies. From responsive websites to complex enterprise platforms, our web development team delivers pixel-perfect results.",
    benefits: [
      "Custom-built, scalable architecture",
      "Mobile-first responsive design",
      "SEO-optimized codebase",
      "Performance-tuned for fast load times",
      "Ongoing maintenance and support",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    accentClass: "border-primary",
    iconBgClass: "from-primary/20 to-accent/10",
  },
  {
    id: "ai-ml",
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Machine Learning Solutions",
    description:
      "Harness the power of artificial intelligence to automate processes, gain predictive insights, and make smarter business decisions. Our AI team builds custom ML models tailored to your industry.",
    benefits: [
      "Predictive analytics & forecasting",
      "Natural language processing (NLP)",
      "Computer vision integration",
      "Automated workflow intelligence",
      "Custom ML model development",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    accentClass: "border-accent",
    iconBgClass: "from-accent/20 to-primary/10",
  },
  {
    id: "mobile-development",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "We design and develop native and cross-platform mobile applications for iOS and Android. Our apps are built for performance, usability, and seamless user experience.",
    benefits: [
      "Native iOS and Android development",
      "Cross-platform with React Native",
      "Intuitive UX/UI design",
      "Offline-first architecture",
      "App Store optimization",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Flutter"],
    accentClass: "border-primary",
    iconBgClass: "from-primary/20 to-accent/10",
  },
  {
    id: "cloud-devops",
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description:
      "Accelerate your digital transformation with our cloud solutions and DevOps practices. We design, migrate, and manage scalable cloud infrastructure on AWS, Azure, and GCP.",
    benefits: [
      "Cloud migration & architecture",
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "24/7 monitoring and incident response",
      "Cost optimization strategies",
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    accentClass: "border-accent",
    iconBgClass: "from-accent/20 to-primary/10",
  },
  {
    id: "digital-marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Marketing",
    description:
      "Drive growth with data-driven digital marketing strategies. From SEO and paid advertising to content marketing and social media, we build campaigns that deliver measurable ROI.",
    benefits: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Social media management",
      "Content strategy & creation",
      "Analytics and performance reporting",
    ],
    technologies: ["Google Analytics", "Google Ads", "Meta Ads", "HubSpot"],
    accentClass: "border-primary",
    iconBgClass: "from-primary/20 to-accent/10",
  },
];

const STATS = [
  { value: "25+", label: "Projects Delivered" },
  { value: "40", label: "Clients Worldwide" },
  { value: "2+", label: "Years Experience" },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function RevealSection({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const { ref, visible } = useScrollReveal();

  const translate =
    direction === "left"
      ? "translateX(-40px)"
      : direction === "right"
        ? "translateX(40px)"
        : "translateY(32px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-card border border-border rounded-xl px-8 py-6 text-center hover-lift shadow-subtle hover:border-primary/30 hover:shadow-elevated transition-smooth">
      <p className="text-3xl font-display font-bold text-primary mb-1">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceDetail;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="mb-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div
        className={`bg-card border border-border rounded-2xl overflow-hidden border-l-4 ${service.accentClass} hover-lift shadow-subtle hover:shadow-elevated`}
      >
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}
        >
          {/* Icon Panel */}
          <div
            className={`lg:w-80 flex-shrink-0 bg-gradient-to-br ${service.iconBgClass} p-10 flex flex-col items-center justify-center gap-6 relative`}
            data-ocid={`services.${service.id}.icon_panel`}
          >
            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/5 blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-accent/5 blur-xl" />

            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center text-primary relative z-10 shadow-subtle">
              {service.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-center text-foreground relative z-10">
              {service.title}
            </h3>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 justify-center relative z-10">
              {service.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary border-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div className="flex-1 p-8 lg:p-10">
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              {service.description}
            </p>

            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">
              Key Benefits
            </h4>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                data-ocid={`services.${service.id}.cta_button`}
              >
                <Button
                  variant="ghost"
                  className="text-primary hover:text-accent hover:bg-primary/10 px-0 gap-1 transition-smooth group"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div data-ocid="services.page" className="min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative py-28 overflow-hidden bg-muted/30"
        data-ocid="services.hero.section"
      >
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            aria-label="Breadcrumb"
            data-ocid="services.breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-primary transition-colors accent-underline"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Services</span>
          </nav>

          <div className="max-w-3xl">
            <RevealSection direction="up">
              <Badge
                variant="secondary"
                className="mb-5 bg-primary/10 text-primary border-primary/20 px-4 py-1 text-xs tracking-wider uppercase"
              >
                What We Offer
              </Badge>
              <h1 className="font-display font-bold text-5xl sm:text-6xl text-foreground leading-tight mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive technology solutions tailored to your business
                needs
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── INTRO & STATS ── */}
      <section
        className="py-16 bg-background"
        data-ocid="services.intro.section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <RevealSection>
              <p className="text-base text-muted-foreground leading-relaxed">
                From web development to AI-powered solutions, Arukien
                Technologies provides end-to-end technology services that drive{" "}
                <span className="text-foreground font-medium">
                  real business results
                </span>
                . We partner with companies of all sizes to deliver modern,
                scalable, and impactful digital experiences.
              </p>
            </RevealSection>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            data-ocid="services.stats.section"
          >
            {STATS.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 120}>
                <StatCard value={stat.value} label={stat.label} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-16 bg-muted/20" data-ocid="services.list.section">
        {" "}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
                Technology Solutions Built to Scale
              </h2>
              <div className="w-16 h-1 rounded-full bg-primary mx-auto" />
            </div>
          </RevealSection>

          <div data-ocid="services.list">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-background" data-ocid="services.cta.section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div
              className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
              style={{
                background:
                  "linear-gradient(135deg, #f0f6ff 0%, #e8f4fd 50%, #f5f9ff 100%)",
                border: "1px solid oklch(0.88 0.03 240)",
                boxShadow: "0 4px 32px oklch(0.60 0.12 240 / 0.10)",
              }}
            >
              {/* Light decorative accents */}
              <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <Badge
                  variant="secondary"
                  className="mb-5 bg-primary/10 text-primary border-primary/20 px-4 py-1 text-xs tracking-wider uppercase"
                >
                  Work With Us
                </Badge>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">
                  Let's discuss how our services can help you achieve your
                  goals. Our team is ready to build your vision.
                </p>
                <Link to="/contact" data-ocid="services.cta.primary_button">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 rounded-xl hover-lift gap-2 shadow-elevated"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
