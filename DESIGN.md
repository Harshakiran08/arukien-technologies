# Design Brief

**Arukien Technologies** — Premium B2B corporate tech business website. Five-page responsive site (Home, About, Services, Portfolio, Contact) with deep navy primary, cyan gradient accents, glassmorphism cards, and choreographed scroll-reveal animations.

## Tone & Aesthetic

Bold corporate minimalism with tech precision + glassmorphism depth. Inspiration: Linear, Stripe, Apple. Navy + cyan restricted palette forces visual decisiveness. Every interactive element elevates on hover (cards lift, buttons scale, text gains accent glow).

## Color Palette

| Role | OKLCH (Light) | OKLCH (Dark) | Purpose |
|------|---------------|--------------|---------|
| Primary | `0.32 0.15 263` | `0.62 0.22 237` | Deep navy (#0A2540 equiv.), buttons, nav, CTAs |
| Secondary | `0.62 0.22 237` | `0.18 0.01 260` | Vibrant cyan accent, service icons, highlights |
| Accent | `0.65 0.2 235` | `0.7 0.24 235` | Elevated cyan for ring focus, active states |
| Background | `0.96 0.01 0` | `0.1 0.01 260` | Cream light / deep navy dark (260° hue) |
| Foreground | `0.15 0.02 260` | `0.93 0.01 0` | Navy text light / nearly white dark |
| Card | `0.98 0 0` | `0.14 0.02 260` | Elevated surfaces, glossy white light / navy dark |
| Muted | `0.9 0.02 0` | `0.18 0.01 260` | Disabled, secondary text, subtle backgrounds |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Error/warning reds |
| Border | `0.88 0.01 0` | `0.23 0.02 260` | Subtle edges |

## Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display | Plus Jakarta Sans | 600 | Headlines, hero title, page headings, section titles |
| Body | DM Sans | 400 | Paragraph, descriptions, labels, form text |
| Mono | Geist Mono | 400 | Code, technical data, inline highlights |

## Logo & Brand Identity

Hexagon/circuit-inspired "A" lettermark: minimal geometric design combining sharp angles (tech DNA) with navy-to-cyan gradient. 2–3 versions: full lockup (mark + wordmark), sidebar mark only, favicon (solid navy). Used in header, hero section, footer, contact cards.

## Elevation & Depth

- **Header**: Sticky, bg-card, border-b border-border, shadow-subtle on scroll activation
- **Hero**: Full-bleed, gradient-hero (navy → cyan), minimal text, high contrast, entrance slide-up
- **Content sections**: Alternate bg-background (odd) / bg-card (even) for visual rhythm
- **Glassmorphism cards**: bg-card/0.7 + backdrop-blur-12px, border-border/0.2, hover-lift (shadow-elevated + -translate-y-1)
- **CTA zones**: bg-accent, centered, high contrast, hover scale-105
- **Footer**: bg-muted/30, border-t, same visual weight as header

## Structural Zones

| Zone | Light BG | Dark BG | Effect | Notes |
|------|----------|---------|--------|-------|
| Header | `bg-card` | `bg-card` | `border-b` | Sticky, logo + nav + mobile menu |
| Hero | gradient-hero | gradient-hero | — | Full-bleed, slide-up entrance |
| Services/Features | `bg-background` | `bg-background` | — | Grid cards, glass-effect, staggered fade-in |
| About/Section | `bg-card` | `bg-card` | — | Elevation break, images + prose |
| Portfolio | `bg-background` | `bg-background` | — | Masonry/grid, hover-scale on cards |
| Contact | `bg-card` | `bg-card` | — | Form container, subtle glass effect |
| CTA Banner | `bg-accent` | `bg-accent` | — | High contrast, centered content |
| Footer | `bg-muted/30` | `bg-muted/30` | `border-t` | Links + socials, secondary text |

## Spacing & Rhythm

- **Horizontal**: `px-6 md:px-8 lg:px-12` per section
- **Vertical sections**: `py-12 md:py-16 lg:py-20`
- **Card gap**: `gap-6` in grids, `gap-4` dense areas
- **Type scale**: h1 `text-4xl md:text-5xl`, h2 `text-2xl md:text-3xl`, body `text-base`

## Component Patterns

- **Navigation**: Flex row, sticky, logo + links (md:flex hidden sm:hidden mobile burger)
- **Buttons**: Semantic colors (primary/secondary/accent), rounded-md, font-semibold, transition-smooth, hover: shadow-elevated scale-105
- **Cards**: rounded-md, glass-effect, shadow-subtle base, hover-lift cascade
- **Forms**: bg-input, border-border, focus:ring-2 ring-accent, rounded-sm
- **Links**: text-accent, accent-underline hover effect
- **Gradients**: Primary → Accent on hero, text, buttons; Subtle opacity for glass overlays

## Motion Choreography

- **Entrance**: Page load → header fade-in (0.2s) → hero slide-up (0.5s) → content stagger fade-up (0.3s–0.8s cascade)
- **Hover**: Cards → shadow-elevated + -translate-y-1, buttons → scale-105, links → accent underline glow
- **Scroll**: Sections reveal on enter viewport with fade-up (Intersection Observer pattern)
- **Transitions**: All interactive: transition-smooth (0.3s cubic-bezier), no bounce
- **Ambient**: Optional float (3s, ±8px) on hero accent shapes, pulse-subtle (2s) on badge elements

## Constraints & Guardrails

- **No generic purple** — navy + cyan only, no gradients outside hero/CTA
- **Max 3 colors per section** (primary + secondary + accent)
- **AA+ WCAG contrast** on all text (tested dark mode primary)
- **Glassmorphism sparingly** — frosted effect on cards/modals only, not full-page blur
- **Mobile-first responsive** — test 375px (sm), 768px (md), 1024px (lg)
- **Dark mode default** — light mode secondary support, consistent toggle
- **No neon/glow effects** — shadow-glow for accent accents only (max 20px blur)

## Signature Details

Cyan accent appears as subtle glow on focus states (ring-accent shadow), gradient text in hero CTA, and hover underlines on links. Negative space around hero section creates breathing room. Navy undertone in all dark-mode backgrounds (260° hue) maintains cohesive tech identity without visible tinting. Glassmorphism cards reflect premium, modern aesthetic. Staggered scroll-reveal animations create dynamic rhythm without distraction.

## Multi-Page Architecture

- **Home**: Hero + services grid + testimonials + CTA banner
- **About**: Company story + mission/vision + team grid + achievements timeline
- **Services**: Detailed service cards (6 offerings), benefits, use cases
- **Portfolio**: Project grid (images + tags + descriptions), filter/sort (optional)
- **Contact**: Contact form + company info + embedded map (optional)
All pages inherit header/footer, navigation, and consistent animation choreography.
