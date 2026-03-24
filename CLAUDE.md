# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Koenig Solutions — Microsoft Power Platform Certification Training landing page. A single-page, high-converting marketing site built with Next.js 14, TypeScript, and Tailwind CSS.

## Commands

```bash
npm run dev    # Dev server (auto-clears .next cache before starting)
npm run build  # Production build
npm run start  # Production preview (auto-clears .next cache)
npm run lint   # ESLint
```

The `dev` and `start` scripts use `node -e "require('fs').rmSync('.next',{recursive:true,force:true})"` to prevent stale chunk errors. Always use `npm run dev`, not `npx next dev` directly.

## Architecture

- **Framework:** Next.js 14.2.5 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS 3.4.1 + inline styles for brand tokens
- **Fonts:** Syne (headings, `--font-syne`) + DM Sans (body, `--font-dm-sans`) via `next/font/google`
- **No API routes, middleware, or external data fetching** — entirely static

### File Layout

- `app/layout.tsx` — Root layout, font loading, global metadata/OpenGraph
- `app/page.tsx` — Main page composing 19 components + JSON-LD schemas (FAQPage, Course)
- `app/globals.css` — CSS variables, utility classes (`.glass-card`, `.text-shimmer`, `.btn-primary`, `.animate-on-scroll`, etc.), keyframe animations
- `components/` — 20 client components, each self-contained with `"use client"` directive
- `tailwind.config.ts` — Extended brand colors, custom gradients, shadows, animations

### Page Section Order (with background type)

Hero (dark) → RelatedTech (white) → CourseListings (white) → ContactForm (light blue) → TrustBar (white) → UniqueOfferings (white) → Awards (light) → CourseOverview (white) → KeyFeatures (dark) → Curriculum (white) → ToolsGrid (light) → CareerPaths (dark) → Instructor (white) → Testimonials (light) → AdditionalInfo (white) → FAQ (white) → FinalCTA (dark)

## Brand Color System (Critical)

Three immutable brand tokens — never substitute:

| Token  | Hex       | Usage                          |
|--------|-----------|--------------------------------|
| Dark   | `#093148` | Dark backgrounds, headings     |
| Accent | `#0694D1` | CTAs, links, highlights        |
| Light  | `#E4F7FF` | Text on dark, light fills      |

Derived scales exist in `tailwind.config.ts` (`deep.*`, `sky.*`, `ice.*`). Never use the old palette (`#2563EB`, `#7C3AED`).

## Component Conventions

**Color constant** — every component defines at top:
```typescript
const C = { dark: "#093148", accent: "#0694D1", light: "#E4F7FF" };
```
Use inline `style={{ color: C.accent }}` for brand colors (avoids Tailwind JIT purge issues with dynamic values).

**Scroll animations** — components use IntersectionObserver to add `visible` class to `.animate-on-scroll` elements. Standard pattern:
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.05 }
  );
  ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
```

**Light vs dark sections** — white/light sections use `color: "#374151"` for body text, `color: C.dark` for headings, card bg `"#FAFCFF"` or `"#F0F9FF"`. Dark sections use glassmorphism (`.glass-card`) and `rgba` overlays.

**Heading shimmer** — blue text in section headings uses `className="text-shimmer"` (dark bg) or `className="text-shimmer-dark"` (light bg) for animated highlight effect.

## Key CSS Classes (globals.css)

- `.glass-card` / `.glass-card-light` — frosted glass cards for dark sections
- `.text-shimmer` / `.text-shimmer-dark` — animated gradient text for headings
- `.gradient-text` — static gradient text
- `.btn-primary` — gradient CTA button with shimmer pseudo-element
- `.btn-outline` — bordered secondary button
- `.section-badge` — small pill label (e.g., "❓ FAQ")
- `.blueprint-bg` — subtle grid pattern overlay
- `.animate-on-scroll` — fade-up on viewport entry
- `.accordion-content` — max-height transition for expand/collapse
- `.animate-scroll` — infinite horizontal scroll (logo marquees)

## Frontend Design & UI Rules

### Brand Colors

- **Primary:** #0694d1
- **Dark:** #093148
- Do not introduce new colors unless explicitly instructed.

### Typography

- **Headings (h1–h6):** GTWalsheimPro-Medium
- **Body / regular text:** GTWalsheimPro
- Heading font family must always be GTWalsheimPro-Medium.

### Font size
- p element use font size 16px and where require shorter font size then use 14px always.

### Content Rules

- Do not change existing content unless explicitly described.
- If instructed to update an existing design, do not create a new design.
- Only modify what is explicitly requested.

### Layout & Sizing

- Use px for width, height, padding, and margin.
- Large images may use percentage (%) widths where appropriate.
- Avoid fluid sizing unless specified.

### Design Principles

- Design must be clean, modern, and minimal.
- Maintain consistent spacing and hierarchy.
- Avoid unnecessary decorative elements.

### SEO & Performance

- Always follow SEO best practices.
- Headings must follow descending order (h1 → h2 → h3 …).
- Use semantic HTML elements correctly.
- Ensure no CLS, LCP, or FCP performance issues.
- Images must include proper dimensions and alt attributes.
co-pilot-microsoft-sin.cshtml
### Responsive Breakpoints

Design must support the following breakpoints in order:

1. 1440px (default)
2. 1280px
3. 992px
4. 768px
5. 700px
6. 375px
7. 360px

### Bootstrap Usage

- Bootstrap may be used for grid, UI components, and tables.
- Do not modify Bootstrap core classes.
- Always apply styling via custom class names.
- Custom classes must be meaningful and consistent.
