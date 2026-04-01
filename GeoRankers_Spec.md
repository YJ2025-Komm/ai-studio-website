# GeoRankers: Design & Content Specification

This document provides a comprehensive blueprint for replicating the GeoRankers B2B SaaS landing page. It includes design principles, UI components, and the complete copy used across the platform.

---

## 1. Project Overview
**Name:** GeoRankers
**Tagline:** AI Visibility Intelligence for B2B SaaS
**Core Value Prop:** Helping brands monitor and optimize their visibility within AI-generated search answers (ChatGPT, Gemini, Perplexity).

---

## 2. Design System

### 2.1 Typography
- **Primary Font:** `Plus Jakarta Sans`
- **Headings:** Extra Bold (800) or Black (900), tight tracking (`tracking-tight`), leading `1.1`.
- **Body:** Medium (500) or Semi-Bold (600), leading `relaxed`.
- **Micro-labels:** Black (900), Uppercase, wide tracking (`tracking-widest` or `tracking-[0.2em]`).

### 2.2 Color Palette
- **Brand Blue:** `#3b82f6` (Primary)
- **Brand Violet:** `#8b5cf6` (Secondary)
- **Slate Scale:**
  - `slate-900`: Primary Text / Dark Backgrounds
  - `slate-800`: Footer / Dark Sections
  - `slate-600`: Secondary Text
  - `slate-400`: Muted Labels
  - `slate-50`: Background Accents
- **Accents:**
  - `orange-500`: Statistical Highlights
  - `red-500`: Critical Alerts / Missed Opportunities
  - `green-500`: Success Signals / Operational Status

### 2.3 UI Components & Styles
- **Gradients:**
  - `gradient-primary`: `linear-gradient(135deg, #3b82f6, #8b5cf6)`
  - `gradient-dark`: `linear-gradient(135deg, #1e3a8a, #4c1d95)`
- **Glassmorphism:** `bg-white/70 backdrop-blur-md border border-white/20`
- **Cards:** `rounded-[2.5rem]` or `rounded-[3rem]`, subtle borders, `shadow-sm`.
- **Interactions:**
  - `hover-lift`: `translate-y-[-6px]` with smooth shadow transition.
  - `active-scale`: `scale-95` on click.
- **Animations:**
  - `float`: Gentle vertical oscillation (6s duration).
  - `pulse/ping`: Status indicators for "Live" or "Critical" items.

---

## 3. Component Breakdown & Copy

### 3.1 Header
- **Logo:** "G" in a gradient square + "GeoRankers" (Black 900).
- **Links:** Home, Features, Pricing, Resources (Dropdown: Blogs, GEO Guide, FAQ, Help Docs).
- **CTAs:** Login (Text), Book a Demo (Secondary Button), Try for Free (Primary Button).

### 3.2 Hero Section
- **Badge:** "The New Era of Strategic Visibility" (with ping animation).
- **Headline:** "Your Buyers Choose Vendors Inside **AI Answers**"
- **Sub-headline:** "ChatGPT, Gemini, and Perplexity now answer high-intent buying questions directly. They summarize categories and shortlist vendors before a single click happens."
- **Pull Quote:** "If your brand is not mentioned in those answers, **you are not part of the decision.**"
- **Mockup:** A dark "AI Search Simulation" window showing a chat interface where GeoRankers is recommended as the #2 choice for "Enterprise SEO tools".

### 3.3 Statistics Section
- **Headline:** "The AI Search Revolution By the Numbers"
- **Stats:**
  - `60%`: Zero-Click Search (Searches ending without a visit).
  - `35%`: Traffic Drop (Average organic decline for SaaS).
  - `45%`: Session Growth (Users relying on AI assistants).
  - `5x`: Higher Value (Conversion intent from AI discovery).

### 3.4 The "Visibility Gap" (Agitation)
- **Headline:** "What You Cannot See Is Already Costing You."
- **Points:**
  - **Invisible in High Intent Queries:** Ranking on Google != Appearing in AI recommendations.
  - **Competitor Domain Dominance:** Rivals strengthening citation profiles.
  - **Positioning Misalignment:** AI models misinterpreting brand value.
- **Visual:** A "Mention Rate" comparison showing Competitor A at 88% and "Your Brand" at 12% (labeled "MISSED OPPORTUNITY").

### 3.5 The Intelligence Stack (Features)
- **Layer 1: Visibility Data Layer**
  - *AI Visibility Scanner:* Capturing mentions, rank, and citations.
  - *Citation Graph Engine:* Mapping authority overlap and source concentration.
- **Layer 2: Interpretation Intelligence**
  - *GEO Score:* Normalized visibility and trust metric.
  - *Narrative Gap Detection:* Identifying inconsistent positioning across web assets.
  - *Competitive Mapping:* Seeing where rivals dominate.
- **Layer 3: Execution Layer**
  - *Prescriptive Action Engine:* Prioritized, execution-ready recommendations.

### 3.6 Pricing Plans
- **Launch ($41/mo):** 3 Seed Prompts, 25 AI Prompts, ChatGPT only, 1 Seat.
- **Grow ($129/mo):** 6 Seed Prompts, 50 AI Prompts, Multi-model (Gemini, AIO), 3 Seats, Report Export.
- **Enterprise (Custom):** Custom volume, Dedicated GEO Specialist, Custom Integrations.

---

## 4. Technical Implementation Notes
- **Framework:** React 18+ with TypeScript.
- **Styling:** Tailwind CSS (v4 preferred).
- **Icons:** Lucide-React or custom SVGs for specific brand elements.
- **Responsive:** Mobile-first, with bento-grid expansions for desktop.
