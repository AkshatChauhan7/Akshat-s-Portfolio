# Professional Portfolio

A modern, responsive personal portfolio website built with Next.js 14, showcasing AI/ML engineering expertise and software development projects. Features server-side rendering, type-safe development, and optimized performance with a focus on user experience and accessibility.

## Tech Stack

- **Next.js 14** - App Router with Server Components
- **TypeScript** - Type-safe development and enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Declarative animations and smooth page transitions
- **Heroicons** - Beautiful hand-crafted SVG icons

## Key Features

- **Server Components**: Leverages Next.js 14 App Router for optimal performance and SEO
- **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Performance Optimized**: Automatic image optimization, code splitting, and lazy loading
- **Smooth Animations**: Motion-driven UI with Framer Motion for enhanced user engagement
- **Contact Integration**: Secure form handling with Web3Forms API integration
- **Modern UI**: Glassmorphism design system with dark theme
- **Accessibility**: WCAG compliant with semantic HTML structure

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with metadata and font optimization
│   └── page.tsx             # Landing page with component composition
├── components/
│   ├── layout/              # Layout components and wrappers
│   ├── navigation/          # Navigation and routing components
│   │   └── Navigation.tsx
│   ├── sections/            # Page sections and main content blocks
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── [additional sections]
│   └── ui/                  # Reusable UI components
│       ├── CursorFollower.tsx
│       └── ScrollProgress.tsx
└── utils/                   # Utility functions and configurations
    ├── certificates.ts
    └── leetcode.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/AkshatChauhan7/Akshat-s-Portfolio.git

# Navigate to project directory
cd Akshat-s-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Starts the development server with hot reloading
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production server
- `npm run lint` - Runs ESLint for code quality checks
- `npm run type-check` - Performs TypeScript type checking without compilation

## Development Workflow

1. **Development**: Use `npm run dev` for local development with hot reloading
2. **Type Checking**: Run `npm run type-check` to validate TypeScript types
3. **Linting**: Execute `npm run lint` to ensure code quality standards
4. **Production Build**: Generate optimized build with `npm run build`
5. **Deployment**: Deploy to Vercel or similar platform with `npm run start`

## Performance Considerations

- Implements Next.js 14 App Router for automatic code splitting
- Uses Server Components to reduce client-side JavaScript bundle
- Optimizes images with Next.js built-in Image component
- Employs dynamic imports for component lazy loading
- Minimizes runtime dependencies and bundle size

## Contact

- **GitHub**: [AkshatChauhan7](https://github.com/AkshatChauhan7)
- **Live Demo**: [Portfolio Website](https://akshat-portfolio-livid-zeta.vercel.app)

## License

This project is private and proprietary.