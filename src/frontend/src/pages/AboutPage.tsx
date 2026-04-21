import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronRight,
  Eye,
  Globe,
  Heart,
  Lightbulb,
  Linkedin,
  Rocket,
  Shield,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Scroll-reveal hook ─────────────────────────────────────────────────────────
function useReveal(threshold = 0.15) {
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
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Data ───────────────────────────────────────────────────────────────────────
const STATS = [
  { label: "Founded", value: "2016", icon: BookOpen },
  { label: "Team Members", value: "50+", icon: Users },
  { label: "Countries", value: "12+", icon: Globe },
  { label: "Projects", value: "150+", icon: Rocket },
];

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We build honest, transparent partnerships grounded in trust and ethical business practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Continuous improvement drives us to deliver cutting-edge solutions that stay ahead of the curve.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards, delivering quality that exceeds expectations every time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working closely with clients and each other, we achieve more together than we ever could alone.",
  },
  {
    icon: Zap,
    title: "Impact",
    desc: "Our technology creates real, measurable differences for businesses and the communities they serve.",
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "We listen first, understanding challenges deeply before crafting solutions that truly fit.",
  },
];

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Arjun Kumar",
    role: "CEO & Founder",
    initials: "AK",
    gradientFrom: "#0A2540",
    gradientTo: "#00BCD4",
    bio: "Visionary leader with 15+ years in tech. Arjun founded Arukien with a mission to make enterprise technology accessible and impactful.",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    initials: "PS",
    gradientFrom: "#00BCD4",
    gradientTo: "#1565C0",
    bio: "Deep expertise in AI and cloud architecture. Priya spearheads the technical direction and drives platform innovation.",
  },
  {
    name: "Rahul Verma",
    role: "Head of Engineering",
    initials: "RV",
    gradientFrom: "#3F51B5",
    gradientTo: "#0A2540",
    bio: "Full-stack engineering expert who builds robust, scalable systems and mentors a team of 30+ engineers.",
  },
  {
    name: "Sarah Mitchell",
    role: "VP of Design",
    initials: "SM",
    gradientFrom: "#00897B",
    gradientTo: "#00BCD4",
    bio: "Award-winning designer passionate about human-centred experiences that delight users and drive conversions.",
  },
  {
    name: "David Osei",
    role: "Head of AI/ML",
    initials: "DO",
    gradientFrom: "#1565C0",
    gradientTo: "#7B1FA2",
    bio: "PhD in Machine Learning. David leads AI research initiatives and deploys intelligent systems for Fortune 500 clients.",
  },
  {
    name: "Maya Patel",
    role: "VP of Marketing",
    initials: "MP",
    gradientFrom: "#00BCD4",
    gradientTo: "#00897B",
    bio: "Growth strategist with a knack for turning technical stories into compelling brand narratives that resonate globally.",
  },
];

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

const TIMELINE: TimelineEvent[] = [
  {
    year: "2016",
    title: "Company Founded",
    desc: "Launched with 5 engineers and a bold vision to transform technology consulting for modern businesses.",
  },
  {
    year: "2017",
    title: "First AI Platform",
    desc: "Delivered our first AI-powered analytics platform for retail clients, setting the bar for data-driven decision making.",
  },
  {
    year: "2019",
    title: "Global Expansion",
    desc: "Expanded operations to 3 countries and surpassed 50 enterprise clients across diverse industries.",
  },
  {
    year: "2021",
    title: "ISO 27001 Certified",
    desc: "Achieved ISO 27001 certification and celebrated 100+ successfully delivered projects worldwide.",
  },
  {
    year: "2023",
    title: "Cloud Center of Excellence",
    desc: "Launched our cloud migration center of excellence, helping enterprises modernize their infrastructure.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    desc: "Reached 150+ projects across 12 countries, recognized among the top IT firms by global analysts.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const Icon = stat.icon;
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover-lift shadow-subtle hover:border-primary/30 hover:shadow-elevated transition-smooth">
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <p className="font-display font-bold text-2xl text-foreground leading-none">
          {stat.value}
        </p>
        <p className="font-body text-sm text-muted-foreground mt-0.5">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

function ValueCard({
  val,
  index,
}: {
  val: (typeof VALUES)[number];
  index: number;
}) {
  const Icon = val.icon;
  return (
    <div
      className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3 shadow-subtle transition-smooth hover:border-primary/40 hover:-translate-y-1 hover:shadow-elevated"
      data-ocid={`about.value.item.${index + 1}`}
    >
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon size={20} className="text-primary" />
      </div>
      <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
        {val.title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">
        {val.desc}
      </p>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div
      className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover-lift shadow-subtle hover:border-primary/30 hover:shadow-elevated transition-smooth"
      data-ocid={`about.team.item.${index + 1}`}
    >
      {/* Avatar */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl shadow-elevated ring-2 ring-primary/20"
        style={{
          background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
        }}
      >
        {member.initials}
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
          {member.name}
        </h3>
        <p className="font-body text-primary text-sm font-medium mt-0.5">
          {member.role}
        </p>
      </div>
      <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3">
        {member.bio}
      </p>
      <button
        type="button"
        aria-label={`${member.name} LinkedIn`}
        className="mt-auto w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth text-primary"
        data-ocid={`about.team.linkedin.${index + 1}`}
      >
        <Linkedin size={16} />
      </button>
    </div>
  );
}

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const { ref, visible } = useReveal(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
      data-ocid={`about.timeline.item.${index + 1}`}
    >
      {/* Content box */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] transition-all duration-700 ${
          visible
            ? "opacity-100 translate-x-0"
            : isLeft
              ? "opacity-0 -translate-x-10"
              : "opacity-0 translate-x-10"
        }`}
        style={{ transitionDelay: `${index * 60}ms` }}
      >
        <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-smooth shadow-subtle ml-10 md:ml-0">
          <span className="font-display font-bold text-primary text-sm tracking-wider">
            {event.year}
          </span>
          <h3 className="font-display font-semibold text-foreground text-base mt-1 leading-snug">
            {event.title}
          </h3>
          <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">
            {event.desc}
          </p>
        </div>
      </div>

      {/* Centre dot — hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-subtle">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-subtle">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Empty spacer for the opposite side (desktop only) */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  // Section reveals
  const introReveal = useReveal();
  const vmReveal = useReveal();
  const valuesReveal = useReveal();
  const teamReveal = useReveal();
  const timelineReveal = useReveal();

  return (
    <div data-ocid="about.page">
      {/* ── 1. PAGE HERO ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-12"
        data-ocid="about.hero.section"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.01 240) 0%, oklch(0.99 0.005 260) 50%, oklch(0.96 0.015 230) 100%)",
        }}
      >
        {/* Subtle glow blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: "oklch(0.22 0.07 260)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full blur-[100px] opacity-[0.08] pointer-events-none"
          style={{ background: "oklch(0.60 0.15 200)" }}
        />

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-sm font-body text-muted-foreground mb-6"
          aria-label="breadcrumb"
          data-ocid="about.breadcrumb"
        >
          <Link
            to="/"
            className="hover:text-foreground transition-fast accent-underline"
            data-ocid="about.breadcrumb.home_link"
          >
            Home
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-primary font-medium">About</span>
        </nav>

        <div className="container mx-auto px-6 lg:px-8 text-center z-10">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            About <span className="gradient-text">Arukien Technologies</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Building the Future, One Innovation at a Time
          </p>
        </div>
      </section>

      {/* ── 2. COMPANY INTRODUCTION ─────────────────────────────────────── */}
      <section className="py-20 bg-background" data-ocid="about.intro.section">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            ref={introReveal.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              introReveal.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left: story */}
            <div className="space-y-5">
              <div>
                <span className="inline-block font-body text-primary text-xs font-semibold uppercase tracking-widest mb-3">
                  Our Story
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
                  A Decade of{" "}
                  <span className="gradient-text">Digital Excellence</span>
                </h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                Founded in 2016, Arukien Technologies is a global IT solutions
                company with a singular purpose — to help businesses unlock
                their true potential through technology. What started as a small
                team of five engineers has grown into an international force
                spanning twelve countries.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We specialize in delivering cutting-edge technology solutions
                that drive digital transformation for businesses worldwide. From
                AI-powered platforms to cloud migrations and bespoke software,
                our expertise spans the full spectrum of modern technology.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our team of expert engineers, designers, and strategists work
                together to create impactful, scalable solutions tailored to
                each client's unique challenges. We don't just ship code — we
                build lasting partnerships.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                At Arukien, we believe technology should empower people and
                businesses to achieve more. That belief shapes every decision we
                make, every product we build, and every relationship we form.
              </p>
            </div>

            {/* Right: stat cards */}
            <div
              className="grid grid-cols-2 gap-4"
              data-ocid="about.intro.stats"
            >
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: introReveal.visible
                      ? `${i * 100}ms`
                      : "0ms",
                    opacity: introReveal.visible ? 1 : 0,
                    transform: introReveal.visible
                      ? "translateY(0)"
                      : "translateY(16px)",
                  }}
                >
                  <StatCard stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VISION & MISSION ─────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden bg-muted/30"
        data-ocid="about.vision_mission.section"
      >
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block font-body text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Purpose
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Vision & Mission
            </h2>
          </div>

          <div
            ref={vmReveal.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 ${
              vmReveal.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Vision */}
            <div
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover-lift shadow-subtle hover:border-primary/30 hover:shadow-elevated"
              data-ocid="about.vision.card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-xl mb-3">
                  Our Vision
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To be the global leader in innovative technology solutions,
                  empowering businesses to thrive in the digital era and shape a
                  future where technology serves humanity.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover-lift shadow-subtle hover:border-primary/30 hover:shadow-elevated"
              data-ocid="about.mission.card"
              style={{ transitionDelay: vmReveal.visible ? "100ms" : "0ms" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-xl mb-3">
                  Our Mission
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To deliver world-class IT services with excellence, integrity,
                  and innovation — creating lasting value for our clients,
                  partners, and communities around the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ──────────────────────────────────────────────── */}
      <section className="py-20 bg-background" data-ocid="about.values.section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block font-body text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              What Drives Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Our Core Values
            </h2>
          </div>

          <div
            ref={valuesReveal.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              valuesReveal.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-ocid="about.values.list"
          >
            {VALUES.map((val, i) => (
              <div
                key={val.title}
                style={{
                  transitionDelay: valuesReveal.visible ? `${i * 80}ms` : "0ms",
                  opacity: valuesReveal.visible ? 1 : 0,
                  transform: valuesReveal.visible
                    ? "translateY(0)"
                    : "translateY(16px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <ValueCard val={val} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TEAM SECTION ─────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30" data-ocid="about.team.section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block font-body text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              The People
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Meet Our Leadership Team
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto text-base leading-relaxed">
              A diverse group of visionaries, engineers, and strategists united
              by a passion for technology and excellence.
            </p>
          </div>

          <div
            ref={teamReveal.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              teamReveal.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-ocid="about.team.list"
          >
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                style={{
                  transitionDelay: teamReveal.visible ? `${i * 90}ms` : "0ms",
                  opacity: teamReveal.visible ? 1 : 0,
                  transform: teamReveal.visible
                    ? "translateY(0)"
                    : "translateY(16px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <TeamCard member={member} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TIMELINE ─────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-background"
        data-ocid="about.timeline.section"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-body text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Milestones
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Our Journey
            </h2>
          </div>

          <div
            ref={timelineReveal.ref}
            className="relative max-w-3xl mx-auto"
            data-ocid="about.timeline.list"
          >
            {/* Vertical line — desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />

            {/* Vertical line — mobile */}
            <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-10">
              {TIMELINE.map((event, i) => (
                <TimelineItem key={event.year} event={event} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden bg-background"
        data-ocid="about.cta.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, #f0f6ff 0%, #e8f4fd 50%, #f5f9ff 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, oklch(0.70 0.10 220 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
            Ready to Build Something{" "}
            <span className="text-primary">Amazing Together?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let's turn your vision into reality. Our team is ready to help you
            navigate the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                type="button"
                className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover-lift transition-smooth shadow-elevated hover:bg-primary/90"
                data-ocid="about.cta.contact_button"
              >
                Get in Touch
              </button>
            </Link>
            <Link to="/services">
              <button
                type="button"
                className="px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-body font-semibold text-base hover:bg-primary/10 hover:border-primary/60 transition-smooth"
                data-ocid="about.cta.services_button"
              >
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
