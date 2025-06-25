# Luna Station Press Website Migration - Copilot Instructions

## Project Context
This project migrates Luna Station Press from WordPress to the Astro framework with Tailwind CSS styling. We're converting a small publishing site (about 15 books) to a modern static site generator. This is a personal creative project for a sci-fi/fantasy magazine and book publisher.

## Tech Stack Specifics
- **Framework**: Astro with static site generation
- **Styling**: Tailwind CSS utility classes
- **Migration Source**: WordPress site with simple structure (pages, posts, books)
- **Content**: Markdown files exported from WordPress

## Astro-Specific Guidelines
- Use `.astro` file extension for components
- Implement proper frontmatter for data fetching and metadata
- Use Astro's component syntax and directives
- Prefer static generation over client-side rendering
- Keep components focused and reusable

## Tailwind CSS Approach
- Use utility classes over custom CSS
- Mobile-first responsive design with breakpoint prefixes (sm:, md:, lg:, xl:)
- Prefer flexbox and grid utilities for layouts
- Use semantic color names and consistent spacing scale
- Keep utility combinations readable and maintainable

## HTML Cleanup & Modernization
- Strip outdated WordPress theme classes and inline styles
- Convert old table-based layouts to modern flexbox/grid
- Remove unnecessary wrapper divs and clearfix hacks
- Use proper semantic HTML5 elements (article, section, nav, etc.)
- Ensure proper heading hierarchy (h1, h2, h3, etc.)
- Add meaningful alt attributes to all images
- Clean up 10-year-old WordPress cruft

## Content Migration Strategy
- Export WordPress content to markdown files
- Clean up markdown formatting and remove WordPress-specific shortcodes
- Organize content into logical file structures for Astro
- Maintain SEO-friendly URLs where possible
- Preserve book metadata and categorization

## Component Architecture
- Create reusable components for book listings, individual book pages
- Build consistent navigation and footer components
- Design responsive card layouts for book displays
- Implement clean, accessible forms for contact pages

## Performance & SEO
- Leverage Astro's static generation for fast loading
- Optimize images for web delivery
- Maintain clean, semantic markup for accessibility
- Ensure proper meta tags and structured data
- Keep bundle sizes minimal with selective JavaScript

## Publishing Workflow
- Design for easy content updates via markdown files
- Consider future integration with submission systems
- Maintain clean separation between content and presentation
- Plan for potential future features (search, filtering, etc.)