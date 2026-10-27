# Akshat Jain — Portfolio Website (React Edition)

My personal portfolio website, rebuilt with a modern frontend stack to showcase my projects, skills, and certifications in Software Development and Data Science.

🔗 **Live Site:** https://portfolio-q81d.onrender.com

## Features

- Fully responsive, animated single-page portfolio with smooth scroll navigation
- Dark mode toggle with saved preference (persists across visits)
- Scroll-triggered reveal animations and hover micro-interactions throughout
- Dedicated case-study page for every project — overview, key features, tech stack, and a screenshot gallery with a lightbox viewer
- "Model & Results" section on ML projects (PhishGuard AI, Student Performance Analyzer) with real benchmark comparison tables
- Working contact form (Formspree) with client-side validation and inline status feedback
- Floating scroll-to-top button and mobile-friendly collapsible navigation

## Tech Stack

- **Frontend:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** React Icons
- **Form Handling:** Formspree

## Getting Started

```bash
# install dependencies
npm install

# start local dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
├── public/
│   ├── images/            # Project thumbnails and site images
│   └── screenshots/       # Screenshots used on project case-study pages
├── src/
│   ├── components/        # Reusable UI components (Navbar, Hero, About, Skills, etc.)
│   ├── data/               # Central content — projects.js, siteData.js
│   ├── hooks/               # Custom hooks (dark mode)
│   ├── pages/               # Route-level pages (Home, ProjectDetail)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

Adding a new project only requires adding an entry to `src/data/projects.js` — the portfolio grid and its case-study page are generated automatically.

## Deployment

This is a static Vite app — deploy the `dist/` folder (after `npm run build`) to any static host:

- **Render:** New → Static Site → Build command `npm run build`, publish directory `dist`
- **Netlify / Vercel:** Import the repo, build command `npm run build`, publish directory `dist`
- **GitHub Pages:** Build locally and push the `dist/` folder, or use a GitHub Action

## About Me

B.Tech in Computer Science (Cyber Security), Gurugram University. Interested in Software Development, Data Science, and Machine Learning.

- **Email:** jakshat726@gmail.com
- **LinkedIn:** [linkedin.com/in/akshat-jain-b4b6bb291](https://www.linkedin.com/in/akshat-jain-b4b6bb291)
- **GitHub:** [github.com/Akshat-2109](https://github.com/Akshat-2109)
