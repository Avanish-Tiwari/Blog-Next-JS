# Next.js Blog Application

A modern, server-side rendered blog application built with Next.js, featuring markdown support, static site generation, and dynamic routing.

## Features

- **Static Site Generation (SSG)**: Pages are pre-rendered at build time for optimal performance
- **Markdown Support**: Blog posts are written in markdown format
- **Dynamic Routing**: Clean URLs for blog posts using Next.js dynamic routes
- **Responsive Design**: Mobile-friendly layout with modern CSS modules
- **SEO Optimized**: Meta tags and proper HTML structure for better search engine visibility
- **Date Formatting**: Clean date display using date-fns library
- **Image Optimization**: Next.js Image component for optimized image loading

## Tech Stack

- **Framework**: Next.js
- **Language**: JavaScript
- **Styling**: CSS Modules
- **Markdown Processing**: gray-matter, remark
- **Date Handling**: date-fns
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── components/         # Reusable UI components
├── lib/               # Utility functions and data processing
├── pages/             # Next.js pages and API routes
├── posts/             # Markdown blog posts
├── public/            # Static assets
└── styles/            # CSS modules and global styles
```

## Getting Started

1. Clone the repository
```bash
git clone <your-repo-url>
cd nextjs-blog
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Creating New Blog Posts

1. Add a new markdown file in the `posts` directory
2. Include frontmatter with title and date:
```markdown
---
title: 'Your Post Title'
date: 'YYYY-MM-DD'
---
```

3. Write your content in markdown format

## Deployment

The easiest way to deploy this project is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy your site

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
