/**
 * Application Constants
 * 
 * Core application constants including developer information,
 * social links, and content configuration.
 * 
 * @fileoverview Application-wide constants and configuration
 * @author Javier Argüeso
 * @version 1.0.0
 */

/**
 * Developer personal information
 */
export const DEVELOPER = {
  NAME: 'Javier Argüeso',
  ROLE: 'DevOps Engineer',
  LOCATION: 'Badajoz, España',
  MOTTO: 'Destroy Every Version On Production Servers',
  EDUCATION: 'Ingeniería Informática - Universidad de Extremadura',
  EMAIL: 'contact@javierarguesodev.com',
} as const;

/**
 * Social media links and usernames
 */
export const SOCIAL_LINKS = {
  GITHUB: {
    USERNAME: 'srcheesedev',
    URL: 'https://github.com/srcheesedev',
    DISPLAY: '@srcheesedev',
  },
  LINKEDIN: {
    USERNAME: 'javier-argueso-soto',
    URL: 'https://linkedin.com/in/javier-argueso-soto',
    DISPLAY: 'Javier Argüeso',
  },
  INSTAGRAM: {
    USERNAME: 'srcheese.dev',
    URL: 'https://instagram.com/srcheese.dev',
    DISPLAY: '@srcheese.dev',
  },
} as const;

/**
 * Professional certifications
 */
export const CERTIFICATIONS = [
  'Google Cloud Associate Engineer',
  'Google Cloud Professional DevOps Engineer', 
  'Microsoft AZ-400: DevOps Engineer Expert',
] as const;

/**
 * Technical skills organized by category
 */
export const SKILLS = {
  CLOUD: ['Google Cloud Platform', 'Amazon Web Services', 'Microsoft Azure'],
  AUTOMATION: ['Kubernetes', 'Docker', 'Jenkins'],
  PROGRAMMING: ['Python', 'Bash', 'TypeScript'],
  CI_CD: ['GitLab CI/CD', 'Azure DevOps', 'GitHub Actions'],
  INFRASTRUCTURE: ['Terraform', 'Ansible', 'CloudFormation'],
  MONITORING: ['Prometheus', 'Grafana', 'DataDog'],
} as const;

/**
 * Professional interests
 */
export const INTERESTS = {
  TECHNICAL: ['Cloud Architecture', 'Infrastructure as Code', 'DevSecOps', 'Site Reliability Engineering'],
  PERSONAL: ['Metal Music', 'Craft Beer', 'Artisan Cheese', 'Open Source'],
} as const;

/**
 * Work experience timeline
 */
export const EXPERIENCE = [
  {
    company: 'Minsait',
    period: '2023-Present',
    role: 'Senior DevOps Engineer',
    technologies: ['Google Cloud', 'Kubernetes', 'Python', 'Terraform'],
    focus: 'Cloud Architecture & Security Automation',
  },
  {
    company: 'Plexus Tech', 
    period: '2021-2023',
    role: 'DevOps Engineer',
    technologies: ['Azure', 'AWS', 'Jenkins', 'Docker'],
    focus: 'CI/CD Pipelines & Container Orchestration',
  },
] as const;

/**
 * Code filenames for code card components
 */
export const CODE_FILES = {
  PYTHON: 'developer_profile.py',
  YAML: 'experience-pipeline.yml',
  BASH: 'deployment.sh',
  TYPESCRIPT: 'portfolio.ts',
} as const;

/**
 * UI text constants for consistent messaging
 */
export const UI_TEXT = {
  ABOUT: {
    TITLE: "About Me",
    SUBTITLE: "Professional journey through code"
  },
  NAVIGATION: {
    HOME: "Home",
    ABOUT: "About",
    EXPERIENCE: "Experience",
    CONTACT: "Contact"
  },
  ACTIONS: {
    DOWNLOAD_CV: "Download CV",
    GET_IN_TOUCH: "Get in touch",
    VIEW_PROJECT: "View project",
    LEARN_MORE: "Learn more"
  },
  ARIA_LABELS: {
    MAIN_NAVIGATION: "Main navigation",
    SOCIAL_LINKS: "Social media links",
    CODE_EXAMPLE: "Code example showing",
    CLOSE_DIALOG: "Close dialog",
    TOGGLE_MENU: "Toggle navigation menu"
  }
} as const;

/**
 * Site metadata
 */
export const SITE = {
  NAME: 'Javier Argüeso Portfolio',
  DESCRIPTION: 'DevOps Engineer Portfolio',
  URL: 'https://javierarguesodev.com',
  REPOSITORY: 'https://github.com/srcheesedev/portfolio',
  VERSION: '2.0.0',
} as const;

/**
 * Content sections configuration
 */
export const SECTIONS = {
  HERO: {
    ID: 'hero',
    TITLE: 'Welcome',
    DESCRIPTION: 'DevOps Engineer & Cloud Architect',
  },
  ABOUT: {
    ID: 'about',
    TITLE: 'About Me', 
    DESCRIPTION: 'Professional journey through code',
  },
  SKILLS: {
    ID: 'skills',
    TITLE: 'Technical Skills',
    DESCRIPTION: 'Technologies and tools I work with',
  },
  EXPERIENCE: {
    ID: 'experience', 
    TITLE: 'Experience',
    DESCRIPTION: 'Professional background and achievements',
  },
  CONTACT: {
    ID: 'contact',
    TITLE: 'Get In Touch',
    DESCRIPTION: 'Let\'s connect and collaborate',
  },
} as const;