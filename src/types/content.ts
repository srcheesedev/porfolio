/**
 * Type definitions for portfolio content
 * Ensures type safety and better developer experience
 */

export interface SocialLinks {
  readonly instagram: string;
  readonly linkedin: string;
  readonly github: string;
}

export interface PortfolioContent {
  readonly title: string;
  readonly subtitle: string;
  readonly text: string;
  readonly image: string;
  readonly author: string;
  readonly realName: string;
  readonly location: string;
  readonly socialLinks: SocialLinks;
}

export interface SEOMetadata {
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: string[];
  readonly author?: string;
}
