/**
 * CSS Utility Functions
 * 
 * Helper functions for dynamic CSS class generation and style utilities.
 * Promotes consistent styling and reduces code duplication.
 * 
 * @fileoverview CSS and styling utility functions
 * @author Javier Argüeso
 * @version 1.0.0
 */

/**
 * Conditionally joins CSS class names
 * 
 * @param classes - Array of class names or conditional objects
 * @returns Joined class string
 * 
 * @example
 * ```typescript
 * const className = cn('base-class', isActive && 'active', 'another-class');
 * // Result: "base-class active another-class"
 * ```
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generates CSS custom properties from an object
 * 
 * @param vars - Object with CSS variable names and values
 * @returns CSS custom properties string
 * 
 * @example
 * ```typescript
 * const cssVars = generateCSSVars({ 
 *   primaryColor: '#ff0000', 
 *   fontSize: '16px' 
 * });
 * // Result: "--primary-color: #ff0000; --font-size: 16px;"
 * ```
 */
export function generateCSSVars(vars: Record<string, string | number>): string {
  return Object.entries(vars)
    .map(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `--${cssKey}: ${value};`;
    })
    .join(' ');
}

/**
 * Converts pixel values to rem units
 * 
 * @param pixels - Pixel value to convert
 * @param baseSize - Base font size in pixels (default: 16)
 * @returns Rem value string
 * 
 * @example
 * ```typescript
 * pxToRem(24); // "1.5rem"
 * pxToRem(32, 18); // "1.778rem"
 * ```
 */
export function pxToRem(pixels: number, baseSize: number = 16): string {
  return `${(pixels / baseSize).toFixed(3)}rem`;
}

/**
 * Creates responsive CSS values using clamp()
 * 
 * @param min - Minimum value
 * @param preferred - Preferred value (can include viewport units)
 * @param max - Maximum value
 * @returns CSS clamp() string
 * 
 * @example
 * ```typescript
 * clamp('1rem', '2vw', '2rem'); // "clamp(1rem, 2vw, 2rem)"
 * ```
 */
export function clamp(min: string, preferred: string, max: string): string {
  return `clamp(${min}, ${preferred}, ${max})`;
}

/**
 * Generates a CSS grid template with responsive columns
 * 
 * @param minColumnWidth - Minimum column width
 * @param gap - Gap between columns
 * @returns CSS grid template string
 * 
 * @example
 * ```typescript
 * responsiveGrid('300px', '1rem'); 
 * // "repeat(auto-fit, minmax(300px, 1fr))"
 * ```
 */
export function responsiveGrid(minColumnWidth: string, gap?: string): string {
  const template = `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
  return gap ? `${template}; gap: ${gap};` : template;
}

/**
 * Creates a CSS gradient from color stops
 * 
 * @param direction - Gradient direction
 * @param stops - Array of color stops
 * @returns CSS gradient string
 * 
 * @example
 * ```typescript
 * gradient('45deg', [
 *   { color: '#ff0000', position: '0%' },
 *   { color: '#0000ff', position: '100%' }
 * ]);
 * // "linear-gradient(45deg, #ff0000 0%, #0000ff 100%)"
 * ```
 */
export function gradient(
  direction: string, 
  stops: Array<{ color: string; position?: string }>
): string {
  const colorStops = stops
    .map(stop => `${stop.color}${stop.position ? ` ${stop.position}` : ''}`)
    .join(', ');
  
  return `linear-gradient(${direction}, ${colorStops})`;
}

/**
 * Generates CSS animation keyframes
 * 
 * @param name - Animation name
 * @param keyframes - Object with percentage keys and style values
 * @returns CSS keyframes string
 * 
 * @example
 * ```typescript
 * keyframes('fadeIn', {
 *   '0%': { opacity: '0' },
 *   '100%': { opacity: '1' }
 * });
 * ```
 */
export function keyframes(
  name: string, 
  keyframes: Record<string, Record<string, string>>
): string {
  const frames = Object.entries(keyframes)
    .map(([percentage, styles]) => {
      const styleString = Object.entries(styles)
        .map(([prop, value]) => `${prop}: ${value};`)
        .join(' ');
      return `${percentage} { ${styleString} }`;
    })
    .join(' ');
  
  return `@keyframes ${name} { ${frames} }`;
}

/**
 * Creates CSS media query string
 * 
 * @param breakpoint - Breakpoint value
 * @param type - Media query type ('min' | 'max')
 * @returns Media query string
 * 
 * @example
 * ```typescript
 * mediaQuery('768px', 'min'); // "@media (min-width: 768px)"
 * mediaQuery('1024px', 'max'); // "@media (max-width: 1024px)"
 * ```
 */
export function mediaQuery(breakpoint: string, type: 'min' | 'max' = 'min'): string {
  return `@media (${type}-width: ${breakpoint})`;
}

/**
 * Validates CSS color format
 * 
 * @param color - Color string to validate
 * @returns True if valid CSS color
 * 
 * @example
 * ```typescript
 * isValidColor('#ff0000'); // true
 * isValidColor('rgb(255, 0, 0)'); // true
 * isValidColor('invalid'); // false
 * ```
 */
export function isValidColor(color: string): boolean {
  const css = new Option().style;
  css.color = color;
  return css.color !== '';
}

/**
 * Converts hex color to RGB values
 * 
 * @param hex - Hex color string
 * @returns RGB object or null if invalid
 * 
 * @example
 * ```typescript
 * hexToRgb('#ff0000'); // { r: 255, g: 0, b: 0 }
 * ```
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}