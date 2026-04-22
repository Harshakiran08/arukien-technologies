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
  image: string; // ✅ FIXED
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
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
      "Cross-platform health monitoring app with real-time data sync and AI insights.",
    tags: ["React Native", "Firebase", "HealthKit"],
    gradient: "linear-gradient(135deg, #006064 0%, #00acc1 50%, #00e5ff 100%)",
    glowColor: "rgba(0,229,255,0.25)",
    image: "https://i.pinimg.com/736x/34/52/63/345263820a4db94f29a4e336fa40213d.jpg",
    client: "MedVentures",
  },
  {
    id: 4,
    title: "Cloud Migration & DevOps",
    category: "Cloud",
    description:
      "Migrated legacy systems to AWS microservices, reducing costs and improving speed.",
    tags: ["AWS", "Docker", "Kubernetes"],
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
      "Complete brand overhaul including logo, UI system, and website design.",
    tags: ["Figma", "Tailwind", "React"],
    gradient: "linear-gradient(135deg, #00bcd4 0%, #0288d1 50%, #1565c0 100%)",
    glowColor: "rgba(2,136,209,0.3)",
    image: "https://riayathisolutions.com/wp-content/uploads/2025/10/design-thumb.jpg",
    client: "FinTech Startup",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    category: "AI/ML",
    description:
      "Real-time dashboard with advanced KPI tracking and reporting tools.",
    tags: ["React", "D3.js", "Python"],
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
      "Marketplace platform connecting vendors and buyers with smart features.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0A2540 0%, #0d47a1 50%, #1976d2 100%)",
    glowColor: "rgba(25,118,210,0.3)",
    image: "https://www.yo-kart.com/blog/wp-content/uploads/2023/07/Top-Multi-vendor-eCommerce-Marketplace-Platforms-to-Start-Online-Business-in-2023-1.png",
    client: "TradeBridge",
  },
  {
    id: 8,
    title: "IoT Fleet Management",
    category: "Cloud",
    description:
      "IoT-based tracking system with predictive analytics for fleets.",
    tags: ["IoT", "AWS", "React"],
    gradient: "linear-gradient(135deg, #004d40 0%, #00695c 50%, #546e7a 100%)",
    glowColor: "rgba(84,110,122,0.3)",
    image: "https://www.scnsoft.com/blog-pictures/internet-of-things/iot-revolutionized-fleet-management.png",
    client: "LogiFleet Inc",
  },
];

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────

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
      { threshold: 0.1 }
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
      className="bg-white border rounded-2xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* 🔥 IMAGE SECTION */}
      <div className="relative h-40 md:h-44 lg:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: project.gradient, opacity: 0.5 }}
        />

        {/* Category Badge */}
        <span className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </span>

        {/* Icon */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-500">Client: {project.client}</p>

        <p className="mt-3 text-gray-600">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
