import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type ProjectCategory =
  | "All"
  | "Web Dev"
  | "AI/ML"
  | "Mobile"
  | "Cloud"
  | "Design";

interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  tags: string[];
  gradient: string;
  client: string;
  glowColor: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Dev",
    description:
      "Complete redesign and rebuild of a high-traffic e-commerce platform with improved UX and 60% faster load times.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0A2540 0%, #0e7ab0 50%, #00d4d8 100%)",
    glowColor: "rgba(0,212,216,0.25)",
    image: "https://www.aceinfoway.com/blog/wp-content/uploads/2021/11/Redesign-Your-Website-to-Do-What-Your-Customers-Want.jpg",
    client: "RetailCo Ltd",
  },
  {
    id: 2,
    title: "AI-Powered Sales Forecasting",
    category: "AI/ML",
    description:
      "Machine learning model that predicts quarterly sales with 94% accuracy, integrated into existing CRM.",
    tags: ["Python", "TensorFlow", "AWS", "REST API"],
    gradient: "linear-gradient(135deg, #0d1b3e 0%, #1a237e 50%, #3949ab 100%)",
    glowColor: "rgba(57,73,171,0.3)",
    image: "https://www.farmtoplate.io/wp-content/uploads/2025/06/banner-AI.jpg",
    client: "DataDriven Inc",
  },
  {
    id: 3,
    title: "HealthTrack Mobile App",
    category: "Mobile",
    description:
      "Cross-platform health monitoring app with real-time data sync, wearable integration, and AI health insights.",
    tags: ["React Native", "Firebase", "HealthKit"],
    gradient: "linear-gradient(135deg, #006064 0%, #00acc1 50%, #00e5ff 100%)",
    glowColor: "rgba(0,229,255,0.25)",
    image: "https://i.pinimg.com/736x/34/52/63/345263820a4db94f29a4e336fa40213d.jpg",
    client: "MedVentures",
  },
  {
    id: 4,
    title: "Cloud Migration & DevOps Overhaul",
    category: "Cloud",
    description:
      "Migrated legacy monolith to microservices on AWS, reducing infrastructure costs by 45% and deployment time by 80%.",
    tags: ["AWS", "Kubernetes", "Terraform", "Docker"],
    gradient: "linear-gradient(135deg, #0A2540 0%, #263238 50%, #455a64 100%)",
    glowColor: "rgba(69,90,100,0.3)",
    image: "https://www.qiminfo.ch/wp-content/uploads/2025/11/Migration-cloud-1024x569.jpg",
    client: "FinanceFirst Corp",
  },
  {
    id: 5,
    title: "Brand Identity & UI Redesign",
    category: "Design",
    description:
      "Complete brand overhaul including logo design, design system, and website UI/UX for a fintech startup.",
    tags: ["Figma", "Tailwind CSS", "React", "Framer Motion"],
    gradient: "linear-gradient(135deg, #00bcd4 0%, #0288d1 50%, #1565c0 100%)",
    glowColor: "rgba(2,136,209,0.3)",
    image: "https://riayathisolutions.com/wp-content/uploads/2025/10/design-thumb.jpg",
    client: "FinTech Startup",
  },
  {
    id: 6,
    title: "Real-Time Analytics Dashboard",
    category: "AI/ML",
    description:
      "Executive-level analytics dashboard with real-time KPI tracking, custom widgets, and automated report generation.",
    tags: ["React", "D3.js", "Python", "WebSockets"],
    gradient: "linear-gradient(135deg, #1a0545 0%, #4a148c 50%, #7b1fa2 100%)",
    glowColor: "rgba(123,31,162,0.3)",
    image: "https://www.slideteam.net/wp/wp-content/uploads/2024/01/Real-time-analytics-dashboard-for-measuring-sales-performance-1.png",
    client: "Analytics Pro",
  },
  {
    id: 7,
    title: "Multi-Vendor Marketplace",
    category: "Web Dev",
    description:
      "B2B marketplace platform connecting 200+ vendors with buyers, featuring smart matching and escrow payments.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    gradient: "linear-gradient(135deg, #0A2540 0%, #0d47a1 50%, #1976d2 100%)",
    glowColor: "rgba(25,118,210,0.3)",
    image: "https://www.yo-kart.com/blog/wp-content/uploads/2023/07/Top-Multi-vendor-eCommerce-Marketplace-Platforms-to-Start-Online-Business-in-2023-1.png",
    client: "TradeBridge",
  },
  {
    id: 8,
    title: "IoT Fleet Management System",
    category: "Cloud",
    description:
      "IoT-connected fleet tracking system with predictive maintenance alerts and fuel optimization AI.",
    tags: ["IoT", "AWS IoT Core", "Python", "React"],
    gradient: "linear-gradient(135deg, #004d40 0%, #00695c 50%, #546e7a 100%)",
    glowColor: "rgba(84,110,122,0.3)",
    image: "https://www.scnsoft.com/blog-pictures/internet-of-things/iot-revolutionized-fleet-management.png",
    client: "LogiFleet Inc",
  },
];

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Dev",
  "AI/ML",
  "Mobile",
  "Cloud",
  "Design",
];

// ─── Scroll-Reveal Hook ───────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      data-ocid={`portfolio.item.${index + 1}`}
      className="bg-card border border-border rounded-2xl overflow-hidden hover-lift group cursor-pointer shadow-subtle hover:border-primary/30 hover:shadow-elevated"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
    >
      {/* Gradient Image Placeholder */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ background: project.gradient }}
        aria-hidden="true"
      >
        {/* Overlay dims on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth" />
        {/* External link icon on hover */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
          <ExternalLink className="w-4 h-4 text-foreground" />
        </div>
        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/80 border border-border text-foreground">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col gap-3">
        {/* Title + client */}
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-smooth">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 font-body">
            Client: <span className="text-foreground/70">{project.client}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-smooth"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCtaVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div data-ocid="portfolio.page" className="min-h-screen">
      {/* ── Hero Section ── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden bg-muted/30"
        data-ocid="portfolio.hero.section"
      >
        {/* Background subtle tint */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.22 0.07 260 / 0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Decorative dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.22 0.07 260 / 0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <nav
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-accent transition-smooth accent-underline"
              data-ocid="portfolio.breadcrumb.home_link"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-foreground font-medium">Portfolio</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Showcasing our most impactful work across industries — from
              enterprise platforms to intelligent AI systems.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex items-center justify-center gap-8 md:gap-16 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section
        className="bg-background border-b border-border/40 sticky top-16 z-30"
        data-ocid="portfolio.filters.section"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`portfolio.filter.${cat.toLowerCase().replace("/", "-").replace(" ", "-")}`}
                onClick={() => setActiveFilter(cat)}
                className={[
                  "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth border",
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40",
                ].join(" ")}
              >
                {cat}
                {cat !== "All" && (
                  <span
                    className={`ml-1.5 text-xs ${activeFilter === cat ? "opacity-80" : "opacity-50"}`}
                  >
                    ({PROJECTS.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section
        className="bg-background py-16 md:py-24"
        data-ocid="portfolio.grid.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Results count */}
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-8"
          >
            Showing{" "}
            <span className="text-foreground font-medium">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeFilter !== "All" && (
              <>
                {" "}
                in <span className="text-accent">{activeFilter}</span>
              </>
            )}
          </motion.p>

          {/* Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            data-ocid="portfolio.grid.list"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Empty state (shouldn't occur with current data, but defensive) */}
          {filtered.length === 0 && (
            <div
              className="text-center py-24 bg-card border border-border rounded-2xl"
              data-ocid="portfolio.empty_state"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        ref={ctaRef}
        className="relative py-24 md:py-32 overflow-hidden bg-muted/30"
        data-ocid="portfolio.cta.section"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.22 0.07 260 / 0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 border border-primary/30 rounded-full text-primary mb-6">
              Work With Us
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Have a project <span className="gradient-text">in mind?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Let's discuss your ideas and build something remarkable together.
              Our team is ready to turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" data-ocid="portfolio.cta.start_button">
                <Button
                  size="lg"
                  className="gradient-hero text-primary-foreground font-semibold px-8 py-6 rounded-xl hover-lift shadow-elevated group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/services" data-ocid="portfolio.cta.services_link">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:border-primary/50 hover:bg-primary/5 px-8 py-6 rounded-xl hover-lift"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
