# GiftPage AI - Copilot Instructions

## Project Overview

GiftPage AI is a modern web application that enables users to create personalized, shareable digital gift pages for special occasions. The platform transforms celebrations into stunning digital experiences by combining AI-powered design with collaborative features for photos, videos, and heartfelt messages.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom gradient utilities
- **Development**: ESLint with Next.js configuration
- **Package Manager**: npm

## Project Structure

```
/app                 # Next.js App Router pages
  /about            # About page
  /contact          # Contact page  
  /products         # Products page
  page.tsx          # Home page
  layout.tsx        # Root layout
  globals.css       # Global styles
/components         # Reusable React components
  Header.tsx        # Navigation header
  Footer.tsx        # Footer component
/public             # Static assets
```

## Development Workflow

### Available Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Before Making Changes

1. Always run `npm run dev` first to ensure the app builds successfully
2. Run `npm run lint` to check for existing linting issues
3. Test changes locally before committing

## Coding Standards

### TypeScript

- **Strict mode enabled** - All TypeScript strict checks are enforced
- Use explicit typing where possible
- Avoid `any` type unless absolutely necessary
- Use TypeScript interfaces for component props

### React Components

- **Use functional components only** - No class components
- **Server components by default** - Only add `"use client"` when needed for:
  - State management (useState, useReducer)
  - Event handlers
  - Browser APIs
  - React hooks
- Follow React 19 best practices
- Use Next.js built-in components (Link, Image) over native HTML elements

### Component Example

```tsx
// Server Component (default)
export default function ProductCard({ title, description }: Props) {
  return <div>...</div>;
}

// Client Component (when needed)
"use client";

import { useState } from "react";

export default function InteractiveButton() {
  const [isOpen, setIsOpen] = useState(false);
  return <button onClick={() => setIsOpen(!isOpen)}>...</button>;
}
```

### Styling with Tailwind CSS

- Use Tailwind utility classes for all styling
- Custom classes defined in `globals.css`:
  - `.gradient-text` - Gradient text effect
  - `.glass-card` - Glassmorphism card style
  - `.btn-primary` - Primary button style
  - `.glow`, `.glow-hover` - Glow effects
  - `.neural-bg` - Neural network background
  - Custom animations: `animate-float`, `animate-particle`

- **Color Palette**: 
  - Background: `bg-[#0f172a]` (dark slate)
  - Glass effects: `bg-white/10`, `backdrop-blur-lg`
  - Gradients: purple-500, cyan-500, pink-500
  - Text: white, gray-300, gray-400, gray-500

### File Naming

- React components: PascalCase (e.g., `Header.tsx`, `ProductCard.tsx`)
- Pages in /app: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Directories: lowercase

### Code Style

- Use double quotes for JSX attributes
- Use template literals for string interpolation
- Prefer arrow functions for component definitions
- Use destructuring for props
- Add proper spacing and indentation (2 spaces)

## Common Patterns

### Navigation Links

```tsx
import Link from "next/link";

<Link href="/products" className="...">
  Products
</Link>
```

### Responsive Design

- Mobile-first approach using Tailwind breakpoints
- Use `sm:`, `md:`, `lg:` prefixes for responsive utilities
- Test on multiple screen sizes

### Accessibility

- Include `aria-label` for icon-only buttons
- Use semantic HTML elements
- Ensure proper heading hierarchy
- Add alt text for images

## Testing Approach

- Manual testing through `npm run dev`
- Visual verification of UI changes
- Test responsive behavior at different breakpoints
- Verify all navigation links work correctly

## Issue Types Best Suited for AI Assistance

**Good Tasks:**
- UI component creation
- Adding new pages following existing patterns
- Styling updates and refinements
- Adding accessibility improvements
- Documentation updates
- Bug fixes in UI components

**Tasks Requiring Human Review:**
- Database integration
- Authentication/authorization
- Payment processing
- Complex state management
- Architecture changes
- Security-sensitive features

## Additional Context

- The app uses Next.js App Router (not Pages Router)
- All pages use Server Components unless client interactivity is needed
- The design follows a dark theme with vibrant gradient accents
- Focus on creating visually appealing, modern UIs with smooth animations
- Prioritize accessibility and responsive design
