/**
 * SEO Utility Functions
 * 
 * Helper functions for SEO optimization, metadata generation,
 * and structured data management.
 * 
 * @fileoverview SEO and metadata utility functions
 * @author Javier Argüeso
 * @version 1.0.0
 */

import type { SEOConfig } from '../types/core';

/**
 * Generates HTML meta tags from SEO configuration
 * 
 * @param config - SEO configuration object
 * @returns Array of HTML meta tag strings
 * 
 * @example
 * ```typescript
 * const metaTags = generateMetaTags({
 *   title: "My Page",
 *   description: "Page description",
 *   keywords: ["web", "development"]
 * });
 * ```
 */
export function generateMetaTags(config: SEOConfig): string[] {
  const tags: string[] = [
    // Basic meta tags
    `<meta name="description" content="${escapeHtml(config.description)}">`,
    `<meta name="keywords" content="${config.keywords.join(', ')}">`,
    `<meta name="author" content="${escapeHtml(config.author)}">`,
    
    // Open Graph tags
    `<meta property="og:title" content="${escapeHtml(config.title)}">`,
    `<meta property="og:description" content="${escapeHtml(config.description)}">`,
    `<meta property="og:type" content="website">`,
    
    // Twitter Card tags
    `<meta name="twitter:card" content="${config.twitterCard || 'summary'}">`,
    `<meta name="twitter:title" content="${escapeHtml(config.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(config.description)}">`,
    
    // Additional SEO tags
    '<meta name="robots" content="index, follow">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<meta charset="UTF-8">',
  ];

  // Conditional tags
  if (config.canonical) {
    tags.push(`<link rel="canonical" href="${config.canonical}">`);
  }

  if (config.ogImage) {
    tags.push(
      `<meta property="og:image" content="${config.ogImage}">`,
      `<meta name="twitter:image" content="${config.ogImage}">`
    );
  }

  return tags.filter(Boolean);
}

/**
 * Generates JSON-LD structured data script tag
 * 
 * @param data - Structured data object
 * @returns HTML script tag with JSON-LD
 * 
 * @example
 * ```typescript
 * const structuredData = generateStructuredData({
 *   "@context": "https://schema.org",
 *   "@type": "Person",
 *   "name": "John Doe"
 * });
 * ```
 */
export function generateStructuredData(data: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
}

/**
 * Creates optimized page title with proper length and keywords
 * 
 * @param title - Base title
 * @param siteName - Site name to append
 * @param separator - Separator between title and site name
 * @returns Optimized title string
 * 
 * @example
 * ```typescript
 * const title = optimizeTitle("About", "My Site", " | ");
 * // Result: "About | My Site"
 * ```
 */
export function optimizeTitle(
  title: string, 
  siteName?: string, 
  separator: string = ' | '
): string {
  let optimizedTitle = title.trim();
  
  if (siteName && !title.includes(siteName)) {
    optimizedTitle = `${title}${separator}${siteName}`;
  }
  
  // Truncate if too long (Google displays ~60 characters)
  if (optimizedTitle.length > 60) {
    optimizedTitle = optimizedTitle.substring(0, 57) + '...';
  }
  
  return optimizedTitle;
}

/**
 * Validates and optimizes meta description
 * 
 * @param description - Meta description text
 * @returns Optimized description
 * 
 * @example
 * ```typescript
 * const desc = optimizeDescription("This is a very long description...");
 * ```
 */
export function optimizeDescription(description: string): string {
  let optimized = description.trim();
  
  // Remove extra whitespace
  optimized = optimized.replace(/\s+/g, ' ');
  
  // Ensure proper length (Google displays ~160 characters)
  if (optimized.length > 160) {
    // Try to cut at word boundary
    const truncated = optimized.substring(0, 157);
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastSpace > 120) {
      optimized = truncated.substring(0, lastSpace) + '...';
    } else {
      optimized = truncated + '...';
    }
  }
  
  return optimized;
}

/**
 * Generates sitemap entry for a page
 * 
 * @param url - Page URL
 * @param priority - Page priority (0.0 to 1.0)
 * @param changefreq - Change frequency
 * @param lastmod - Last modification date
 * @returns Sitemap XML entry
 */
export function generateSitemapEntry(
  url: string,
  priority: number = 0.5,
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly',
  lastmod?: Date
): string {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${(lastmod || new Date()).toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority.toFixed(1)}</priority>
    </url>
  `.trim();
}

/**
 * Validates SEO configuration completeness
 * 
 * @param config - SEO configuration to validate
 * @returns Validation result with errors
 * 
 * @example
 * ```typescript
 * const validation = validateSEOConfig(seoConfig);
 * if (!validation.isValid) {
 *   console.log(validation.errors);
 * }
 * ```
 */
export function validateSEOConfig(config: Partial<SEOConfig>): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!config.title) {
    errors.push('Title is required');
  } else if (config.title.length > 60) {
    warnings.push('Title is longer than 60 characters');
  }

  if (!config.description) {
    errors.push('Description is required');
  } else if (config.description.length > 160) {
    warnings.push('Description is longer than 160 characters');
  }

  if (!config.keywords || config.keywords.length === 0) {
    warnings.push('No keywords specified');
  }

  if (!config.author) {
    warnings.push('Author not specified');
  }

  // Image optimization
  if (config.ogImage && !config.ogImage.includes('1200x630')) {
    warnings.push('OG image should be 1200x630 pixels for optimal display');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Escapes HTML characters in strings
 * 
 * @param text - Text to escape
 * @returns HTML-escaped text
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Generates robots.txt content
 * 
 * @param rules - Robots.txt rules
 * @returns Robots.txt content string
 */
export function generateRobotsTxt(rules: {
  userAgent?: string;
  allow?: string[];
  disallow?: string[];
  sitemap?: string;
}): string {
  const lines: string[] = [];
  
  lines.push(`User-agent: ${rules.userAgent || '*'}`);
  
  if (rules.allow) {
    rules.allow.forEach(path => lines.push(`Allow: ${path}`));
  }
  
  if (rules.disallow) {
    rules.disallow.forEach(path => lines.push(`Disallow: ${path}`));
  }
  
  if (rules.sitemap) {
    lines.push('', `Sitemap: ${rules.sitemap}`);
  }
  
  return lines.join('\n');
}