/**
 * UI Constants and Design Tokens
 * 
 * Centralized design system constants following atomic design principles.
 * Ensures consistency across all UI components and prevents magic numbers.
 * 
 * @fileoverview Design system constants and UI tokens
 * @author Javier Argüeso
 * @version 1.0.0
 */

/**
 * Color palette following semantic naming convention
 */
export const COLORS = {
  // Syntax highlighting colors for code components
  SYNTAX: {
    KEYWORD: '#ff7b72',      // Python keywords - red
    FUNCTION: '#d2a8ff',     // Function names - purple  
    STRING: '#a5d6ff',       // Strings - light blue
    VARIABLE: '#ffa657',     // Variables - orange
    PUNCTUATION: '#f0f6fc',  // Punctuation - white
    COMMENT: '#8b949e',      // Comments - gray
    VALUE: '#f85149',        // YAML scalar values - red
    KEY: '#79c0ff',          // YAML keys - light blue
  },
  
  // Background colors
  BACKGROUND: {
    PRIMARY: '#0f0f0f',
    SECONDARY: '#1a1a1a', 
    CODE_EDITOR: '#1d1e22',
    GRADIENT: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
  },
  
  // Text colors
  TEXT: {
    PRIMARY: '#f0f6fc',
    SECONDARY: '#8b949e',
    ACCENT: '#79c0ff',
    GRADIENT: 'linear-gradient(135deg, #79c0ff 0%, #a5d6ff 100%)',
  },
  
  // Interactive elements
  INTERACTIVE: {
    HOVER: '#6e7281',
    SHADOW: 'rgba(0, 0, 0, 0.5)',
  }
} as const;

/**
 * Typography scale following major third ratio (1.25)
 */
export const TYPOGRAPHY = {
  FONT_FAMILY: {
    MONO: "'Courier New', monospace",
    SANS: "'Lato', sans-serif",
  },
  
  FONT_SIZE: {
    XS: '12px',
    SM: '14px', 
    BASE: '16px',
    LG: '18px',
    XL: '20px',
    '2XL': '24px',
    '3XL': '30px',
    '4XL': '36px',
    '5XL': '48px',
  },
  
  FONT_WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
    EXTRABOLD: 800,
    BLACK: 900,
  },
  
  LINE_HEIGHT: {
    TIGHT: 1.2,
    NORMAL: 1.4,
    RELAXED: 1.6,
  },
  
  LETTER_SPACING: {
    TIGHT: '-0.025em',
    NORMAL: '0',
    WIDE: '0.025em',
    WIDER: '0.05em',
    WIDEST: '0.1em',
  }
} as const;

/**
 * Spacing scale based on 4px grid system
 */
export const SPACING = {
  XS: '4px',
  SM: '8px', 
  MD: '16px',
  LG: '24px',
  XL: '32px',
  '2XL': '48px',
  '3XL': '64px',
  '4XL': '96px',
} as const;

/**
 * Border radius scale
 */
export const BORDER_RADIUS = {
  NONE: '0',
  SM: '4px',
  MD: '8px',
  LG: '12px',
  XL: '16px',
  FULL: '50%',
} as const;

/**
 * Shadow levels for depth hierarchy
 */
export const SHADOWS = {
  SM: '0 1px 2px rgba(0, 0, 0, 0.05)',
  MD: '0 4px 6px rgba(0, 0, 0, 0.1)',
  LG: '0 10px 15px rgba(0, 0, 0, 0.1)',
  XL: '0 20px 25px rgba(0, 0, 0, 0.1)',
  CODE_EDITOR: '0px 4px 30px rgba(0, 0, 0, 0.5)',
} as const;

/**
 * Z-index scale for proper layering
 */
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  SM: '480px',
  MD: '768px', 
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

/**
 * Animation timing and easing functions
 */
export const ANIMATION = {
  DURATION: {
    FAST: '0.15s',
    NORMAL: '0.2s',
    SLOW: '0.3s',
  },
  
  EASING: {
    EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
    EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)', 
    EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  }
} as const;

/**
 * Code editor specific constants
 */
export const CODE_EDITOR = {
  MAX_WIDTH: '400px',
  INDENT: {
    LEVEL_1: '20px',
    LEVEL_2: '40px', 
    LEVEL_3: '60px',
  },
  ICON_SIZE: '20px',
} as const;