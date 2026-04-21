# Portfolio - Julián Andrés Rodríguez G.

Project to implement an interactive web portfolio based on a Figma design. Built to deepen frontend web development skills, React rendering, Git workflow, and Vercel deployment.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Architecture & Design System

### Atomic Design Structure

The project follows **Atomic Design** principles to ensure scalability, reusability, and maintainability:

```
src/components/
├── atoms/              # Basic building blocks
│   ├── Avatar.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Divider.tsx
│   ├── Modal.tsx
│   ├── ProgressBar.tsx
│   └── SocialIcon.tsx
├── molecules/          # Simple component groups
│   ├── ContactItem.tsx
│   ├── EducationCard.tsx
│   ├── ExtraSkillItem.tsx
│   ├── KnowledgeCard.tsx
│   ├── ProfileHeader.tsx
│   ├── ProjectCard.tsx
│   └── SkillBar.tsx
├── organisms/          # Complex components
│   ├── ContactsList.tsx
│   ├── EducationSection.tsx
│   ├── ExtraSkillsList.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── KnowledgeSection.tsx
│   ├── LeftSidebar.tsx
│   ├── PortfolioSection.tsx
│   ├── RightSidebar.tsx
│   └── SkillsSection.tsx
└── templates/          # Page-level compositions
    └── HomeTemplate.tsx
```

### Design Decisions

**Color Palette:**
- Primary: `#FFB400` (Vibrant Yellow) - Used for buttons, badges, and highlights
- Text: `#333333` (Dark Gray) - Main content text
- Accents: `#9ca3af` (Light Gray) - Secondary elements and dividers
- Background: `#f3f4f6` / `#ffffff` - Page and card backgrounds

**Layout:**
- Three-column responsive design: Fixed Left Sidebar → Scrollable Center → Fixed Right Sidebar
- Breakpoints: `md:` (768px), `lg:` (1024px) for responsive adaptation
- Mobile-first approach with progressive enhancement

**Typography:**
- Font family: Geist Sans (via Google Fonts)
- Headings: Bold, uppercase tracking for emphasis
- Body: Regular weight with line-height 1.5+ for readability

## Features & Sections

### Left Sidebar (Fixed)
- **Profile Card:** Avatar, name, and professional title
- **Contact Information:** Location, phone, email with icons
- **Skills Display:** Language proficiency and programming language mastery with progress bars
- **Extra Skills:** Soft and hard skills with visual indicators

### Center Content (Scrollable)
- **Hero Section:** Personalized greeting, professional photo, call-to-action button with creative modal
- **My Knowledge:** 6-card grid showcasing technical expertise areas (Frontend, Backend, Databases, Cloud, Architecture, Agile)
- **Education Timeline:** Academic background with institutions, dates, and descriptions
- **Portfolio Carousel:** Horizontal scrollable showcase of 3 featured projects with modal details
- **Footer:** Copyright information and social links (mobile-visible)

### Right Sidebar (Fixed, Desktop Only)
- **Social Links:** Interactive circular icons for GitHub, LinkedIn, Twitter, Instagram
- Vertical layout with smooth hover transitions
- Hidden on mobile, icons relocated to footer

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/julian-guerra92/julian-andres-rodriguez-guerra-portafolio.git
cd julian-andres-rodriguez-guerra-portafolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

### Component Guidelines

- **Atoms:** Stateless, reusable UI primitives
- **Molecules:** Simple compositions of atoms with minimal logic
- **Organisms:** Complex components combining molecules and atoms
- **Templates:** Page-level layouts combining organisms

### Styling

All components use **Tailwind CSS** utility classes. Custom animations (e.g., modal entry) are defined inline using CSS-in-JS to maintain component encapsulation.

## Responsive Design

The portfolio is fully responsive across all devices:

- **Mobile (< 768px):** Single-column layout, collapsed sidebars, footer social links visible
- **Tablet (768px - 1023px):** Partial sidebar visibility, adjusted spacing
- **Desktop (≥ 1024px):** Full three-column layout, all sidebars visible

## Important Links

- **Production URL (Vercel):** [julian-andres-rodriguez-guerra-portafolio.vercel.app](https://julian-andres-rodriguez-guerra-port.vercel.app/)
- **GitHub Repository:** [github.com/julian-guerra92/julian-andres-rodriguez-guerra-portafolio](https://github.com/julian-guerra92/julian-andres-rodriguez-guerra-portafolio)
