/**
 * SEO Configuration
 * 
 * Centralized SEO configuration for optimal search engine optimization.
 * Includes meta tags, structured data, and Open Graph configuration.
 * 
 * @fileoverview SEO configuration and metadata management
 * @author Javier Argüeso
 * @version 1.0.0
 */

/**
 * Base SEO configuration interface
 */
export interface SEOConfig {
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly author: string;
  readonly canonical?: string;
  readonly ogImage?: string;
  readonly twitterCard?: 'summary' | 'summary_large_image';
  readonly structuredData?: Record<string, unknown>;
}

/**
 * Main site SEO configuration
 */
export const SITE_SEO: SEOConfig = {
  title: "Javier Argüeso - DevOps Engineer",
  description: "DevOps Engineer specializing in cloud infrastructure, automation, CI/CD pipelines, and modern deployment strategies. Based in Badajoz, Spain. Expert in Python, Kubernetes, AWS, and Terraform.",
  keywords: [
    "DevOps Engineer",
    "Cloud Infrastructure", 
    "Infrastructure as Code",
    "CI/CD Pipelines",
    "Kubernetes",
    "AWS",
    "Terraform",
    "Python",
    "Docker",
    "Automation",
    "Site Reliability Engineering",
    "Cloud Architecture",
    "Javier Argüeso",
    "Badajoz Spain",
    "Software Engineer"
  ] as const,
  author: "Javier Argüeso",
  ogImage: "/porfolio/IMG_20250526_105648_239.avif",
  twitterCard: "summary_large_image",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Javier Argüeso",
    "jobTitle": "DevOps Engineer",
    "description": "DevOps Engineer specializing in cloud infrastructure and automation",
    "url": "https://srcheesedev.github.io/porfolio",
    "image": "/porfolio/IMG_20250526_105648_239.avif",
    "sameAs": [
      "https://github.com/srcheesedev",
      "https://linkedin.com/in/javier-argueso-soto",
      "https://instagram.com/srcheese.dev"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Badajoz",
      "addressCountry": "Spain"
    },
    "knowsAbout": [
      "DevOps",
      "Cloud Computing",
      "Infrastructure as Code",
      "Kubernetes",
      "AWS",
      "Python",
      "CI/CD"
    ]
  }
} as const;

/**
 * Page-specific SEO configurations
 */
export const PAGE_SEO = {
  home: {
    ...SITE_SEO,
    title: "Javier Argüeso - DevOps Engineer",
    description: "Experienced DevOps Engineer creating scalable cloud infrastructure. Specializing in automation, CI/CD, and modern deployment strategies. View my portfolio and technical expertise."
  },
  about: {
    ...SITE_SEO,
    title: "About - Javier Argüeso",
    description: "Learn about my DevOps engineering journey, technical skills, and professional experience in cloud infrastructure, automation, and modern development practices."
  }
} as const;

/**
 * Generate meta tags for HTML head
 */
export const generateMetaTags = (config: SEOConfig): string[] => [
  `<meta name="description" content="${config.description}">`,
  `<meta name="keywords" content="${config.keywords.join(', ')}">`,
  `<meta name="author" content="${config.author}">`,
  `<meta property="og:title" content="${config.title}">`,
  `<meta property="og:description" content="${config.description}">`,
  `<meta property="og:type" content="website">`,
  config.ogImage ? `<meta property="og:image" content="${config.ogImage}">` : '',
  `<meta name="twitter:card" content="${config.twitterCard || 'summary'}">`,
  `<meta name="twitter:title" content="${config.title}">`,
  `<meta name="twitter:description" content="${config.description}">`,
  config.ogImage ? `<meta name="twitter:image" content="${config.ogImage}">` : ''
].filter(Boolean);