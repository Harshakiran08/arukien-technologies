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
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Dev",
    description:
      "Complete redesign and rebuild of a high-traffic e-commerce platform with improved UX and 60% faster load times.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0A2540 0%, #0e7ab0 50%, #00d4d8 100%)",
    glowColor: "rgba(0,212,216,0.25)",
    image:
      "https://www.aceinfoway.com/blog/wp-content/uploads/2021/11/Redesign-Your-Website-to-Do-What-Your-Customers-Want.jpg",
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
    image:
      "https://www.farmtoplate.io/wp-content/uploads/2025/06/banner-AI.jpg",
    client: "DataDriven Inc",
  }
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
      <div className="relative h-52 overflow-hidden">
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
