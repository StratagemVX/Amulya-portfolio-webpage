# Amulya M.G — Personal Engineering & AI/ML Portfolio

> Responsive developer portfolio showcasing AI/ML experience, projects, education, skills, interactive particle visuals, Supabase client integration, and downloadable PDF resume (`public/ATS Friendly Resume Amulya MG.pdf`), built with React 18, TypeScript, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)

---

## Executive Overview

A personal portfolio website built for **Amulya M.G.** highlighting technical skills, experience, education, languages, projects, and contact sections via modular React components (`src/components/`) and client-side Supabase configuration (`src/integrations/supabase/client.ts`).

> **Quality & Security Remediation Status (`main` vs. Open Draft PR #2 — `maintenance/repository-quality-improvements`):**
> - **PR #2** adds strict Supabase URL/key configuration validation helpers (`src/lib/security.ts`, `src/integrations/supabase/client.ts`), adds `.env.example` placeholders, upgrades vulnerable dependencies in `package-lock.json`, adds `typecheck` & `test` scripts with `vitest` (`src/lib/security.test.ts`), and adds `.github/workflows/quality.yml` (verified passing in CI).

---

## Architecture & Directory Structure

```text
Amulya-portfolio-webpage/
├── .github/workflows/quality.yml    # CI: npm ci, audit, typecheck, lint, test, build (PR #2)
├── public/
│   ├── ATS Friendly Resume Amulya MG.pdf
│   ├── profile.png
│   └── robots.txt
├── src/
│   ├── components/                  # Navbar, HeroSection, AboutSection, ExperienceSection,
│   │                                # EducationSection, ProjectsSection, SkillsSection,
│   │                                # LanguagesSection, ContactSection, Footer, ParticleBackground, ui/
│   ├── integrations/supabase/       # client.ts, types.ts
│   ├── lib/                         # security.ts & security.test.ts (PR #2), utils.ts
│   ├── pages/                       # Index.tsx, NotFound.tsx
│   └── App.tsx
├── .env.example                     # VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY (PR #2)
├── package.json
└── README.md
```

---

## Setup, Environment & Verification (`package.json`)

```bash
git clone https://github.com/StratagemVX/Amulya-portfolio-webpage.git
cd Amulya-portfolio-webpage

npm ci --ignore-scripts
cp .env.example .env
npm run dev
```

### Environment Variables (PR #2 `.env.example`)
| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL (`https://<project>.supabase.co`) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase public publishable/anon key |

### Available Package Scripts
| Script | Command | Notes |
|---|---|---|
| `npm run dev` | `vite` | Start Vite dev server |
| `npm run build` | `vite build` | Production build |
| `npm run typecheck` | `tsc --noEmit` | Added in PR #2 |
| `npm run lint` | `eslint .` | ESLint checks |
| `npm test` | `vitest run` | Added in PR #2 (`src/lib/security.test.ts`) |
| `npm run preview` | `vite preview` | Preview built output |

---

## Contributor Attribution

- **Portfolio Subject:** Amulya M.G
- **Engineering Contributor:** Chethan Kumar B S (`StratagemVX`)
- **Related Early Draft:** [StratagemVX/amulya-s-ai-world](https://github.com/StratagemVX/amulya-s-ai-world)
- **GitHub:** [https://github.com/StratagemVX](https://github.com/StratagemVX)
- **Portfolio:** [https://chethan-kumar-portfolio.vercel.app/](https://chethan-kumar-portfolio.vercel.app/)
