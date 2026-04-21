export interface NavLink {
  label: string;
  to: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  imageUrl?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarInitials: string;
  avatarGradient: string;
}

export interface Page {
  title: string;
  description: string;
  slug: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
