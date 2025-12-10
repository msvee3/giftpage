# GitHub Copilot Instructions for GiftPage AI

## Project Overview

GiftPage AI is a modern web application for creating personalized digital gift webpages for special occasions like birthdays, anniversaries, weddings, graduations, and more. The application allows users to create stunning, shareable digital experiences powered by AI.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: React 19
- **Linting**: ESLint with Next.js config

## Project Structure

```
giftpage/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products listing page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header (client component)
│   └── Footer.tsx         # Footer component
├── public/               # Static assets (images, icons, etc.)
├── .github/              # GitHub configuration and workflows
└── [config files]        # TypeScript, ESLint, Tailwind configs
```

## Development Commands

- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Code Conventions

### TypeScript

- Use TypeScript for all new files
- Enable strict mode (already configured in `tsconfig.json`)
- Use type inference where possible, explicit types when needed
- Prefer interfaces over types for object shapes
- Use the `@/*` path alias for imports (e.g., `@/components/Header`)

### React/Next.js

- Use the App Router (not Pages Router)
- Default to Server Components unless client interactivity is needed
- Add `"use client"` directive only when necessary (e.g., for hooks like `useState`, `useEffect`)
- Use Next.js built-in components: `<Link>`, `<Image>`, etc.
- Place page components in `app/` directory
- Place reusable components in `components/` directory
- Export metadata from layout.tsx and page.tsx files for SEO

### Styling

- Use Tailwind CSS utility classes for styling
- Follow the existing design system with custom CSS variables defined in `globals.css`:
  - Primary: Purple (`#7c3aed`)
  - Secondary: Cyan (`#06b6d4`)
  - Accent: Pink (`#ec4899`)
  - Background: Dark blue (`#0f172a`)
- Use custom utility classes:
  - `.gradient-text` - For gradient text effects
  - `.glass-card` - For glassmorphism card backgrounds
  - `.glow` / `.glow-hover` - For glowing effects
  - `.btn-primary` - For primary action buttons
- Maintain responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`)

### File Naming

- Use PascalCase for React components: `Header.tsx`, `Footer.tsx`
- Use lowercase with hyphens for routes/folders: `about/`, `contact/`
- Use `page.tsx` for route pages
- Use `layout.tsx` for layouts

### Code Style

- Use arrow functions for components
- Use double quotes for JSX attributes, single quotes for TypeScript/JavaScript strings
- Prefer const over let
- Use template literals for string interpolation
- Add comments for complex logic or non-obvious code
- Use descriptive variable and function names

## Component Guidelines

### Client vs Server Components

- **Server Components (default)**:
  - Static content
  - Data fetching
  - SEO-critical content
  - No interactivity needed

- **Client Components** (add `"use client"`):
  - Event handlers (onClick, onChange, etc.)
  - State management (useState, useReducer)
  - Effects (useEffect)
  - Browser APIs (localStorage, window, etc.)
  - Third-party libraries that use hooks

### Accessibility

- Use semantic HTML elements
- Include `aria-label` for icon buttons
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Add alt text to images

## Testing

Currently, there is no testing infrastructure in this project. When adding tests:
- Use Jest and React Testing Library (standard for Next.js)
- Place tests adjacent to components with `.test.tsx` extension
- Focus on user-facing behavior, not implementation details

## Git and Version Control

- Write clear, descriptive commit messages
- Keep commits focused on a single change
- Use conventional commit format when possible:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks

## Deployment

- The application is designed to be deployed on Vercel (Next.js creators)
- Ensure all builds pass before merging (`npm run build`)
- Ensure linting passes before committing (`npm run lint`)

## Important Notes

- This is a client-facing application - prioritize user experience and performance
- Maintain the AI-powered, modern aesthetic with gradients and glassmorphism
- Keep the design responsive across all device sizes
- Optimize images and assets for web performance
- Consider SEO implications for all new pages and content
- Use Next.js Image component for optimized image loading

## Working with Issues

When assigned an issue:
1. Read the full issue description and understand the requirements
2. Check if there are existing similar implementations in the codebase
3. Follow the existing code patterns and conventions
4. Test changes in development server before committing
5. Ensure the build completes successfully
6. Verify linting passes
7. Write clear commit messages explaining the changes

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
