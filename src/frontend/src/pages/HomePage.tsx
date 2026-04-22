import { Button } from "@/components/ui/button";
import type { Service, Testimonial } from "@/types/index";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronDown,
  Cloud,
  Code2,
  Headphones,
  Palette,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────────
function useScrollReveal(threshold = 0.15) {
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
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    id: "web-dev",
    icon: "Code2",
    title: "Web Development",
    description:
      "Modern, scalable web applications built with the latest technologies",
  },
  {
    id: "ai-ml",
    icon: "Brain",
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and predictive analytics to drive business decisions",
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services",
  },
  {
    id: "marketing",
    icon: "BarChart3",
    title: "Digital Marketing",
    description: "Data-driven campaigns that maximize reach and ROI",
  },
  {
    id: "design",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-centered design that converts visitors into loyal customers",
  },
];

const serviceIcons: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Cloud,
  BarChart3,
  Palette,
};

const stats = [
  { value: "42+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Uptime SLA" },
];

const whyUs = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Cutting-edge solutions using the latest technologies and frameworks",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "99.9% uptime SLA with 24/7 monitoring and support",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Solutions designed to grow with your business needs",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Dedicated support team available round-the-clock",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechVentures Inc",
    content:
      "Arukien Technologies transformed our entire digital infrastructure. Their team's expertise in cloud solutions saved us 40% in operational costs.",
    rating: 5,
    avatarInitials: "SJ",
    avatarGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "t2",
    name: "Michael Chen",
    role: "CEO",
    company: "DataFlow Systems",
    content:
      "The AI implementation by Arukien gave us predictive analytics that increased our revenue by 30% in the first quarter.",
    rating: 5,
    avatarInitials: "MC",
    avatarGradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "t3",
    name: "Priya Patel",
    role: "Director",
    company: "GlobalRetail Co",
    content:
      "Outstanding UI/UX work. Our app's user engagement tripled after Arukien's redesign. Highly recommended!",
    rating: 5,
    avatarInitials: "PP",
    avatarGradient: "from-teal-500 to-cyan-600",
  },
];

// ─── Section: Hero ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      data-ocid="home.hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.01 240) 0%, oklch(0.99 0.005 260) 50%, oklch(0.96 0.015 230) 100%)",
      }}
    >
      {/* Subtle grid decorative background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="oklch(0.32 0.15 263)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Subtle glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: "oklch(0.22 0.07 260)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.08]"
          style={{ background: "oklch(0.60 0.15 200)" }}
        />
      </div>

      {/* Hero content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
          <Sparkles size={14} />
          <span className="font-display font-semibold tracking-wide">
            IT Solutions for Tomorrow
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-6">
          Innovating the <span className="gradient-text">Future with</span>
          <br />
          Technology
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Arukien Technologies delivers cutting-edge IT solutions — from AI and
          cloud infrastructure to digital transformation — empowering businesses
          to grow smarter and faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services">
            <Button
              data-ocid="home.hero.get_started_button"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-primary/30 transition-smooth hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              data-ocid="home.hero.contact_button"
              size="lg"
              variant="outline"
              className="border-border text-foreground bg-card hover:bg-muted/50 font-display font-semibold px-8 py-6 text-base rounded-lg transition-smooth hover:-translate-y-0.5 shadow-subtle"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground transition-all duration-1000 delay-500 ${
          loaded ? "opacity-60" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <span className="text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown
          size={18}
          className="animate-bounce"
          style={{ animationDuration: "1.5s" }}
        />
      </div>
    </section>
  );
}

// ─── Section: About Preview ────────────────────────────────────────────────────
function AboutPreviewSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      data-ocid="home.about.section"
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div
            className={`transition-all duration-700 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-primary text-sm font-display font-semibold uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
              About Arukien Technologies
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Arukien Technologies is a forward-thinking IT solutions company
                dedicated to driving digital transformation for businesses
                worldwide. Founded with a vision to bridge technology and
                business strategy, we deliver end-to-end technology solutions
                that create measurable impact.
              </p>
              <p>
                Our team of expert engineers, designers, and strategists work
                collaboratively to solve complex challenges — from cloud
                architecture to AI-powered analytics — tailoring every solution
                to your unique needs.
              </p>
              <p>
                With over 8 years of experience and 150+ successful projects
                across industries, we are your trusted technology partner for
                sustainable growth.
              </p>
            </div>
            <Link
              to="/about"
              data-ocid="home.about.learn_more_link"
              className="inline-flex items-center gap-2 mt-8 text-primary font-display font-semibold accent-underline hover:gap-3 transition-smooth"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  data-ocid={`home.about.stat.${i + 1}`}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover-lift shadow-subtle"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="font-display font-bold text-4xl text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm font-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Services Overview ────────────────────────────────────────────────
function ServicesOverviewSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      data-ocid="home.services.section"
      className="py-24 px-6 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-primary text-sm font-display font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
            Our Core Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.id}
                data-ocid={`home.services.card.${i + 1}`}
                className={`bg-card border border-border rounded-2xl p-6 hover-lift group cursor-default transition-all duration-700 shadow-subtle hover:border-primary/30 hover:shadow-elevated ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-500 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to="/services"
            data-ocid="home.services.view_all_link"
            className="inline-flex items-center gap-2 text-primary font-display font-semibold accent-underline hover:gap-3 transition-smooth"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Why Choose Us ────────────────────────────────────────────────────
function WhyChooseSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      data-ocid="home.why.section"
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-primary text-sm font-display font-semibold uppercase tracking-widest mb-3">
            Our Advantages
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
            Why Choose Arukien?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-ocid={`home.why.card.${i + 1}`}
                className={`bg-card border border-border rounded-2xl p-6 text-center hover-lift group shadow-subtle hover:border-primary/30 hover:shadow-elevated transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Testimonials ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      data-ocid="home.testimonials.section"
      className="py-24 px-6 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-primary text-sm font-display font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-ocid={`home.testimonials.card.${i + 1}`}
              className={`bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover-lift shadow-subtle hover:border-primary/30 hover:shadow-elevated transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + i * 130}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={`star-${t.id}-${s}`}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white bg-gradient-to-br ${t.avatarGradient} shrink-0`}
                >
                  {t.avatarInitials}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs truncate">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: CTA Banner ───────────────────────────────────────────────────────
function CTABannerSection() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      data-ocid="home.cta.section"
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #f0f6ff 0%, #e8f4fd 50%, #f5f9ff 100%)",
            border: "1px solid oklch(0.88 0.03 240)",
            boxShadow: "0 4px 32px oklch(0.60 0.12 240 / 0.10)",
          }}
        >
          {/* Light decorative accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{ background: "oklch(0.70 0.12 220)" }}
            />
          </div>

          <div className="relative z-10">
            <p className="text-primary text-sm font-display font-semibold uppercase tracking-widest mb-4">
              Ready to Get Started?
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Let's Build Something
              <br />
              <span className="text-primary">Amazing Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Ready to transform your business with technology? Our team is here
              to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  data-ocid="home.cta.start_project_button"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 py-6 text-base rounded-xl shadow-lg transition-smooth hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  data-ocid="home.cta.explore_services_button"
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10 font-display font-semibold px-8 py-6 text-base rounded-xl transition-smooth hover:-translate-y-0.5"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── HomePage ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div data-ocid="home.page">
      <HeroSection />
      <AboutPreviewSection />
      <ServicesOverviewSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTABannerSection />
    </div>
  );
}
