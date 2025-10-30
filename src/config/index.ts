/**
 * Configuration Barrel Exports
 * 
 * Central export point for all configuration files.
 * Provides clean imports and better dependency management.
 * 
 * @fileoverview Configuration module exports
 * @author Javier Argüeso
 * @version 1.0.0
 */

// SEO Configuration
export type { SEOConfig } from './seo';
export { SITE_SEO, PAGE_SEO } from './seo';