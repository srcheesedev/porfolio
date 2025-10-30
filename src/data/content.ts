/**
 * Portfolio content configuration
 * Contains all static content for the hero section
 * 
 * @author Javier Argüeso
 * @version 1.0.0
 */

import type { PortfolioContent } from '../types/content';

export const content: PortfolioContent = {
  title: "DEVOPS ENGINEER",
  subtitle: "JAVIER ARGÜESO", 
  text: "Destroy Every Version On Production Servers",
  image: "/portfolio/IMG_20250526_105648_239.jpg",
  author: "srcheese.dev",
  realName: "Javier",
  location: "LOST, EARTH",
  socialLinks: {
    instagram: "https://instagram.com/srcheese.dev",
    linkedin: "https://linkedin.com/in/javier-argueso-soto", 
    github: "https://github.com/srcheesedev"
  }
} as const;

/**
 * SEO metadata for better search engine optimization
 */
export const seoMetadata = {
  title: "Javier Argüeso - DevOps Engineer | Portfolio",
  description: "DevOps Engineer specializing in infrastructure automation, CI/CD pipelines, and cloud solutions. Based in Badajoz, Spain.",
  keywords: [
    "DevOps Engineer",
    "Infrastructure Automation", 
    "CI/CD Pipelines",
    "Cloud Solutions",
    "Lost",
    "Earth",
    "Javier Argüeso"
  ],
  author: "Javier Argüeso"
} as const;
