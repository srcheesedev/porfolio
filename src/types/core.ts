/**
 * TypeScript Type Definitions
 * 
 * Comprehensive type definitions for the portfolio application.
 * Ensures type safety and better developer experience.
 * 
 * @fileoverview Type definitions and interfaces
 * @author Javier Argüeso
 * @version 1.0.0
 */

/**
 * Base component props that all components should extend
 */
export interface BaseProps {
  /** Optional CSS class name for styling */
  className?: string;
  /** Optional HTML id attribute */
  id?: string;
  /** Optional data attributes */
  'data-testid'?: string;
}

/**
 * SEO metadata configuration
 */
export interface SEOConfig {
  /** Page title for browser tab and search results */
  readonly title: string;
  /** Meta description for search engines */
  readonly description: string;
  /** Keywords for SEO optimization */
  readonly keywords: readonly string[];
  /** Content author */
  readonly author: string;
  /** Canonical URL for duplicate content prevention */
  readonly canonical?: string;
  /** Open Graph image URL */
  readonly ogImage?: string;
  /** Twitter card type */
  readonly twitterCard?: 'summary' | 'summary_large_image';
  /** Structured data for rich snippets */
  readonly structuredData?: Record<string, unknown>;
}

/**
 * Social media link configuration
 */
export interface SocialLink {
  /** Platform username/handle */
  readonly username: string;
  /** Full URL to profile */
  readonly url: string;
  /** Display name or handle */
  readonly display: string;
  /** Optional icon component */
  readonly icon?: string;
}

/**
 * Professional experience entry
 */
export interface Experience {
  /** Company name */
  readonly company: string;
  /** Employment period */
  readonly period: string;
  /** Job title/role */
  readonly role: string;
  /** Technologies used */
  readonly technologies: readonly string[];
  /** Primary focus or achievements */
  readonly focus: string;
  /** Optional company logo */
  readonly logo?: string;
  /** Optional project highlights */
  readonly projects?: readonly string[];
}

/**
 * Technical skill category
 */
export interface SkillCategory {
  /** Category name (e.g., 'Cloud', 'Programming') */
  readonly name: string;
  /** List of skills in this category */
  readonly skills: readonly string[];
  /** Optional icon for the category */
  readonly icon?: string;
  /** Skill proficiency level */
  readonly level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

/**
 * Code card component props
 */
export interface CodeCardProps extends BaseProps {
  /** Programming language for syntax highlighting */
  language: 'python' | 'yaml' | 'typescript' | 'bash';
  /** Filename to display in header */
  filename: string;
  /** Code content to display */
  content: string;
  /** Optional title override */
  title?: string;
  /** Whether to show line numbers */
  showLineNumbers?: boolean;
  /** Maximum height before scrolling */
  maxHeight?: string;
}

/**
 * Hero section props
 */
export interface HeroProps extends BaseProps {
  /** Main title text */
  title: string;
  /** Subtitle or tagline */
  subtitle: string;
  /** Optional background image */
  backgroundImage?: string;
  /** Call-to-action button configuration */
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
}

/**
 * Section component props
 */
export interface SectionProps extends BaseProps {
  /** Section identifier */
  section: 'hero' | 'about' | 'skills' | 'experience' | 'contact';
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Whether section is currently in viewport */
  inView?: boolean;
  /** Children components */
  children?: any;
}

/**
 * Layout component props
 */
export interface LayoutProps {
  /** SEO configuration for the page */
  seo: SEOConfig;
  /** Page content */
  children: any;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Navigation item
 */
export interface NavItem {
  /** Display label */
  readonly label: string;
  /** Link href or section ID */
  readonly href: string;
  /** Whether this is an external link */
  readonly external?: boolean;
  /** Optional icon */
  readonly icon?: string;
}

/**
 * Theme configuration
 */
export interface Theme {
  /** Theme name */
  readonly name: 'dark' | 'light';
  /** Color palette */
  readonly colors: {
    readonly primary: string;
    readonly secondary: string;
    readonly background: string;
    readonly text: string;
    readonly accent: string;
  };
  /** Typography settings */
  readonly typography: {
    readonly fontFamily: string;
    readonly fontSize: string;
    readonly lineHeight: number;
  };
}

/**
 * Utility types for better type inference
 */

/** Extract keys from const objects */
export type KeyOf<T> = keyof T;

/** Make all properties optional recursively */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/** Make specific properties required */
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** Extract the value type from an array */
export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer E)[] ? E : never;

/**
 * Event handler types for common interactions
 */
export type ClickHandler = (event: MouseEvent) => void;
export type SubmitHandler = (event: SubmitEvent) => void;
export type ChangeHandler = (event: Event) => void;