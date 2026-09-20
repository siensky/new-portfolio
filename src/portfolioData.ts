export const profile = {
  name: "Sienna Lansky",
  status: "Open to full-stack roles",
  tagline: {
    lead: "Full-stack developer.",
    rest: " Building modern web applications with a focus on thoughtful architecture and interfaces that feel effortless to use.",
  },
  contactText:
    "I'm looking for a full-stack developer role where I can build, learn and genuinely contribute.",
  email: "siennalansky@gmail.com",
  github: "https://github.com/siensky",
  linkedin: "#",
};

export const about = {
  lead: "I'm working hard to become the best full-stack developer I can be. I'm curious by nature, I like picking up new tools and ideas, and I look forward to the experiences and lessons that come with every new project.",
  body: "I'm 25, based in southern Stockholm, and studying Full-Stack JavaScript at Chas Academy. This year I got to work as a backend developer on a real client project — a CRM and order system for Hälsogruppen — building access control, third-party integrations and tests alongside a live team. The years before my studies taught me to take responsibility, work well with others and settle quickly into new environments, and a year of travelling gave me a broader perspective that I bring into the code. Now I'm looking for a role where I can keep building, contribute from day one and keep growing as a developer.",
};

export const facts = [
  { label: "Based in", value: "Southern Stockholm · Open to hybrid" },
  {
    label: "Focus",
    value: "Full-stack apps, APIs, microservices & third-party integrations",
  },
  {
    label: "Core stack",
    value: "TypeScript · React · Node.js · Fastify · Prisma · PostgreSQL",
  },
  {
    label: "Also working with",
    value:
      "PHP · Laravel · React Native · Docker · RabbitMQ · Socket.IO · WebSockets · MongoDB · AWS S3 · OAuth · JWT · CI/CD · Nginx · Linux · PM2",
  },
];

export interface Project {
  name: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
  ongoing?: boolean;
}

export const projects: Project[] = [
  {
    name: "Invoicing Platform",
    tech: ["Bun", "Fastify", "Python", "React", "PostgreSQL", "RabbitMQ", "Docker"],
    description:
      "A multi-tenant invoicing platform with isolated company accounts, separate React frontends for businesses and customers, and four backend services split across TypeScript/Bun/Fastify and Python/FastAPI. Includes OCR-based payment matching, recurring invoices, and BankID and Stripe payments, backed by PostgreSQL and RabbitMQ with a transactional outbox and idempotency for reliable processing. Covered by unit and end-to-end tests running in a Dockerized GitHub Actions pipeline with type checking and database migration checks.",
    github: "https://github.com/siensky/faktureringssystemet",
  },
  {
    name: "Snabbmat",
    tech: ["Bun", "PostgreSQL", "RabbitMQ", "React", "Docker"],
    description:
      "An event-driven food-ordering platform built with microservices and separate React interfaces for customers, kitchen staff and admins — covering the full flow from cart and simulated payment to preparation and pickup. Uses JWT for staff roles, Redis caching, and RabbitMQ for order events and email notifications, with unit and end-to-end tests running in GitHub Actions.",
    github: "https://github.com/siensky/snabbmat",
  },
  {
    name: "Library – backend API",
    tech: ["Bun", "PostgreSQL", "Auth0"],
    description:
      "A backend API for a library system with full CRUD for books and authors. Authentication with Auth0, role-based access and a complete lending system for borrowing and returning books.",
    github: "https://github.com/siensky/library",
    live: "https://library-production-911d.up.railway.app/",
  },
  {
    name: "Spa app with web shop",
    tech: ["React", "Vite", "Node"],
    description:
      "A spa application with an integrated web shop, booking system and cart. Built to give users a smooth experience all the way from booking a treatment to buying products online.",
    github: "https://github.com/siensky/glowspa",
    live: "https://glowspa.vercel.app/",
  },
  {
    name: "Library in PHP",
    tech: ["PHP", "MySQL"],
    description:
      "A practice project in PHP where I built the equivalent endpoints for a library system. Focused on working with data from an existing database — listing books and authors, plus book-lending functionality.",
    live: "https://library-php-1.onrender.com",
  },
  {
    name: "Wine catalogue in vanilla JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive web project built with HTML, CSS and vanilla JavaScript during a bootcamp at Chas Academy. Focused on frontend fundamentals without a framework, with attention to WCAG and user-friendly design. Fetches data from an API and has a mobile-friendly menu.",
    github: "https://github.com/siensky/examinationsuppgift",
    live: "https://wines-bice.vercel.app/",
  },
];

export interface ExperienceEntry {
  org: string;
  title: string;
  description: string;
  year: string;
}

export const education: ExperienceEntry[] = [
  {
    org: "Chas Academy",
    title: "Full-Stack Developer, Open Source – JavaScript",
    description:
      "Two-year vocational program: JavaScript fundamentals, frameworks and component-based development, backend and API design with a security focus, quality-assured and accessible development, project-based product development, and advanced full-stack, testing and DevOps.",
    year: "2025 — 2027",
  },
  {
    org: "Värmdö Gymnasium",
    title: "Natural Sciences – journalism & research",
    description: "",
    year: "2017 — 2020",
  },
];

export const work: ExperienceEntry[] = [
  {
    org: "Hälsogruppen · via Leetcode",
    title: "Backend Developer",
    description:
      "Backend developer on a CRM and order system for a freelance client. Built role-based access control, superadmin features and protected routes in Bun/Fastify, worked with PostgreSQL in a layered architecture, and integrated payments (Capway), shipping (PostNord) and file storage (S3). Wrote unit and end-to-end tests and took part in code reviews.",
    year: "Jun — Sep 2026",
  },
  {
    org: "Riddermark Bil",
    title: "Buyer, Salesperson & Administrator",
    description:
      "Bought and sold cars for private customers and businesses. Also handled administrative tasks such as contract management and payments.",
    year: "2024 — 2025",
  },
  {
    org: "Vårdcentralen Hökarängen",
    title: "Care Assistant & Receptionist",
    description:
      "Administrative work with mail, invoices, bookings, phone and patient registration. Also carried out home visits as part of home healthcare.",
    year: "2018 — 2024",
  },
];
