# ALAA Transport - Fresh Aesthetic Design System

## Overview
Updated design system featuring a modern dark theme with premium styling, glass-morphism effects, and sophisticated color gradients.

## Color Palette

### Primary Colors
- **Primary Red**: oklch(0.55 0.238 12.9) - Rich, vibrant red for CTAs and accents
- **Secondary Black**: oklch(0.25 0 0) - Deep black for text and contrast
- **Background Dark**: oklch(0.08 0 0) - Near-black background for modern aesthetic
- **Foreground Light**: oklch(0.95 0 0) - Almost white for text contrast

### Usage
```css
/* Background Layers */
--background: oklch(0.08 0 0);        /* Main dark background */
--card: oklch(0.12 0 0);              /* Slightly lighter cards */
--muted: oklch(0.25 0 0);             /* Muted text/elements */

/* Text Colors */
--foreground: oklch(0.95 0 0);        /* Primary text */
--secondary-foreground: oklch(0.95 0 0); /* Secondary text */

/* Interactive */
--primary: oklch(0.55 0.238 12.9);    /* Red accent */
--border: oklch(0.2 0 0);             /* Subtle borders */
```

## Button Components

### `.btn-primary`
Modern gradient button with elevated shadow and hover effects.
- **Gradient**: Linear gradient (135deg) from #c93b3b to #8b2626
- **Hover**: Elevates 3px with increased shadow
- **Active**: Slight 1px elevation for press feedback

```jsx
<a href="#contact" className="btn-primary">
  Get a Quote
</a>
```

### `.btn-secondary`
Border-based button with hover background fill.
- **Border**: 2px current color
- **Hover**: 10% background fill, 2px elevation
- **Use Case**: Secondary CTAs, WhatsApp links

```jsx
<a href="https://wa.me/..." className="btn-secondary">
  WhatsApp
</a>
```

### `.btn-outline`
Minimal outline button for tertiary actions.
- **Border**: 1px current color
- **Hover**: Scale 1.05 with subtle background
- **Use Case**: Subtle navigation, secondary links

## Typography

### Font Stack
- **Heading**: Geist (default system font)
- **Body**: Geist (default system font)
- **Mono**: Geist Mono

### Sizes
- **H1**: 3xl-4xl font-bold
- **H2**: 2xl-3xl font-bold
- **H3**: lg-xl font-bold
- **Body**: base-lg with leading-relaxed

### Gradient Text
Apply gradient text for eye-catching headlines:
```jsx
<h2 className="gradient-text">Premium Transportation</h2>
```

## Glass Morphism Cards

### `.glass-card`
Modern frosted glass effect for cards and containers.
- **Background**: rgba(255, 255, 255, 0.05) with 10px blur
- **Border**: 1px rgba(255, 255, 255, 0.1)
- **Hover**: Increased opacity, red border glow, shadow

```jsx
<div className="glass-card">
  <h3>Service Title</h3>
  <p>Description</p>
</div>
```

## Animations & Transitions

### CSS Classes
- `.transition-smooth` - 300ms all transitions
- `.transition-smooth-lg` - 500ms all transitions
- `.hover-lift` - Scale + shadow + translate effects
- `.hover-glow` - Red shadow glow on hover

### Keyframe Animations
- `fadeIn` - 0.8s opacity animation
- `slideUp` - 0.8s slide up with fade
- `slideDown` - 0.8s slide down with fade

```jsx
<div className="animate-fade-in">Content</div>
```

## Header

### Logo Component
- **Animated scale** on hover (110%)
- **ALAA text** appears on desktop only
- **Transitions**: 300ms smooth color change

### Navigation
- **Sticky positioning** with backdrop blur
- **Dark background** with 95% opacity
- **Smooth color transitions** on hover

## Sections Background Gradients

| Section | Background |
|---------|-----------|
| Hero | Full height image |
| About | background/50 (semi-transparent) |
| Services | background (solid dark) |
| Fleet | background (solid dark) |
| Mission | background/50 (semi-transparent) |
| Testimonials | Gradient from dark |
| Contact | background/50 (semi-transparent) |
| Footer | secondary/95 with backdrop blur |

## Logo Integration

The ALAA Transport logo is now integrated with:
- **File**: ALAA Logo Reworked NO BG.png
- **Size**: 40x40px in header
- **Animation**: Hover scale effect (110%)
- **Appearance**: Triangle design with red and black colors

## Accessibility

- **Contrast Ratio**: WCAG AA+ compliant
- **Text Colors**: oklch(0.95 0 0) on dark backgrounds
- **Focus States**: Visible focus rings on interactive elements
- **Button Sizes**: Minimum 44x44px touch target

## Dark Theme Consistency

The entire site uses a cohesive dark theme:
- Dark charcoal backgrounds (oklch 0.08-0.12)
- High-contrast text (oklch 0.95)
- Red accent color for interactive elements
- Subtle borders for definition without harshness
- Glass morphism for depth and modernity

## Performance Optimizations

- CSS-only animations (no JavaScript required)
- GPU-accelerated transforms (scale, translate)
- Backdrop blur for modern browsers
- Optimized gradient calculations
- Minimal color space conversions
