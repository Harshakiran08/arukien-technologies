import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────

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
  image: string;
}

// ─── Data (ALL 8 CARDS) ─────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Dev",
    description:
      "Complete redesign and rebuild of a high-traffic e-commerce platform with improved UX and faster load times.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #0A2540, #00d4d8)",
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
      "ML model predicting quarterly sales with 94% accuracy integrated into CRM.",
    tags: ["Python", "TensorFlow", "AWS"],
    gradient: "linear-gradient(135deg, #1a237e, #3949ab)",
    glowColor: "rgba(57,73,171,0.3)",
    image:
      "https://www.farmtoplate.io/wp-content/uploads/2025/06/banner-AI.jpg",
    client: "DataDriven Inc",
  },
  {
    id: 3,
    title: "HealthTrack App",
    category: "Mobile",
    description:
      "Health monitoring app with wearable integration and real-time sync.",
    tags: ["React Native", "Firebase"],
    gradient: "linear-gradient(135deg, #006064, #00e5ff)",
    glowColor: "rgba(0,229,255,0.25)",
    image:
      "https://i.pinimg.com/736x/34/52/63/345263820a4db94f29a4e336fa40213d.jpg",
    client: "MedVentures",
  },
  {
    id: 4,
    title: "Cloud Migration",
    category: "Cloud",
    description:
      "Migrated legacy systems to AWS microservices reducing costs.",
    tags: ["AWS", "Docker"],
    gradient: "linear-gradient(135deg, #263238, #455a64)",
    glowColor: "rgba(69,90,100,0.3)",
    image:
      "https://www.qiminfo.ch/wp-content/uploads/2025/11/Migration-cloud-1024x569.jpg",
    client: "FinanceFirst",
  },
  {
    id: 5,
    title: "UI/UX Redesign",
    category: "Design",
    description:
      "Complete brand and UI redesign for fintech startup.",
    tags: ["Figma", "Tailwind"],
    gradient: "linear-gradient(135deg, #0288d1, #1565c0)",
    glowColor: "rgba(2,136,209,0.3)",
    image:
      "https://riayathisolutions.com/wp-content/uploads/2025/10/design-thumb.jpg",
    client: "FinTech",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    category: "AI/ML",
    description:
      "Real-time dashboard with KPI tracking and reporting.",
    tags: ["React", "D3.js"],
    gradient: "linear-gradient(135deg, #4a148c, #7b1fa2)",
    glowColor: "rgba(123,31,162,0.3)",
    image:
      "https://www.slideteam.net/wp/wp-content/uploads/2024/01/Real-time-analytics-dashboard-for-measuring-sales-performance-1.png",
    client: "Analytics Pro",
  },
  {
    id: 7,
    title: "Marketplace Platform",
    category: "Web Dev",
    description:
      "Multi-vendor marketplace connecting buyers and sellers.",
    tags: ["Next.js", "Stripe"],
    gradient: "linear-gradient(135deg, #0d47a1, #1976d2)",
    glowColor: "rgba(25,118,210,0.3)",
    image:
      "https://www.yo-kart.com/blog/wp-content/uploads/2023/07/Top-Multi-vendor-eCommerce-Marketplace-Platforms-to-Start-Online-Business-in-2023-1.png",
    client: "TradeBridge",
  },
  {
    id: 8,
    title: "IoT Fleet System",
    category: "Cloud",
    description:
      "Fleet tracking system with predictive maintenance alerts.",
    tags: ["IoT", "AWS"],
    gradient: "linear-gradient(135deg, #00695c, #546e7a)",
    glowColor: "rgba(84,110,122,0.3)",
    image:
      "https://www.scnsoft.com/blog-pictures/internet-of-things/iot-revolutionized-fleet-management.png",
    client: "LogiFleet",
  },
];

// ─── Scroll Animation ──────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Card ──────────────────────────────────────────────────

function ProjectCard({ project, index }: any) {
  const { ref, visible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
    >
      <div className="relative h-40 md:h-44 lg:h-48">
        <img
          src={project.image}
          className="w-full h-full object-cover"
        />

        {/* LIGHT overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <span className="absolute bottom-3 left-3 bg-white px-3 py-1 text-sm rounded-full">
          {project.category}
        </span>

        <ExternalLink className="absolute top-3 right-3 text-white" />
      </div>

      <div className="p-4">
        <h2 className="font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-500">Client: {project.client}</p>
        <p className="text-sm mt-2">{project.description}</p>

        <div className="flex gap-2 mt-2 flex-wrap">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-100">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
