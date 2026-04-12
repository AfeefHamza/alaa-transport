# ALAA Transport - Quick Reference Guide

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# Navigate to http://localhost:3000
```

## File Locations

| Task | File Location |
|------|---------------|
| Add new page | `/app/page.tsx` (or create new route) |
| Update header | `/components/header.tsx` |
| Update colors | `/app/globals.css` (search for `--primary`) |
| Update metadata | `/app/layout.tsx` (search for `metadata`) |
| Add animations | Use presets from `/lib/animations.ts` |
| High-quality images | Place in `/public/images/` |
| SEO sitemaps | `/public/robots.txt`, `/public/sitemap.xml` |

## Common Tasks

### Add Animation to a Section
```tsx
'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

<motion.section {...fadeInUp}>
  Your content here
</motion.section>
```

### Add Image with Optimization
```tsx
import Image from 'next/image';

<Image
  src="/images/example.jpg"
  alt="Descriptive text"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Create Animated Button
```tsx
<motion.button
  className="px-6 py-3 bg-primary text-white rounded-lg"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Make Card with Hover Effect
```tsx
<motion.div
  className="p-8 rounded-xl border shadow-md"
  whileHover={{ y: -8 }}
>
  Card content
</motion.div>
```

### Create Staggered Grid
```tsx
import { staggerContainer, staggerItem } from '@/lib/animations';

<motion.div
  className="grid grid-cols-3 gap-4"
  variants={staggerContainer}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Color Palette

| Color | Usage | CSS Variable |
|-------|-------|--------------|
| Red | Primary actions, CTA buttons | `--primary` (#E74C3C) |
| Black | Text, headings, dark sections | `--secondary` (#000) |
| White | Backgrounds, cards | `--background` (#FFF) |
| Light Gray | Muted text, borders | `--muted` (#F5F5F5) |
| Accent | Highlights, focus states | Uses primary |

## Spacing Scale

```
p-1 = 0.25rem (4px)
p-2 = 0.5rem (8px)
p-4 = 1rem (16px)      ← Common padding
p-6 = 1.5rem (24px)    ← Large padding
p-8 = 2rem (32px)      ← Extra large
p-12 = 3rem (48px)     ← Massive

Use gap-4, gap-6, gap-8 for spacing between grid items
```

## Typography

| Element | Class | Size |
|---------|-------|------|
| Page Title | text-4xl md:text-5xl font-bold | 36px → 48px |
| Section Title | text-3xl md:text-4xl font-bold | 30px → 36px |
| Subsection | text-xl md:text-2xl font-bold | 20px → 24px |
| Body Text | text-base | 16px |
| Small Text | text-sm | 14px |

## Responsive Breakpoints

```
Mobile: < 640px (sm)
Tablet: 640px - 1024px (md)
Desktop: > 1024px (lg)
Large Desktop: > 1280px (xl)

Usage: md:text-4xl (4xl on desktop, smaller on mobile)
```

## Shadows

```
shadow-sm:  0 1px 2px
shadow-md:  0 4px 6px      ← Cards
shadow-lg:  0 10px 15px    ← Hover state
shadow-xl:  0 20px 25px    ← Prominent
shadow-2xl: 0 25px 50px    ← Extra prominent
```

## Animation Presets

### Scroll-Triggered
```
fadeInUp      - Fade in + move up
slideInLeft   - Slide in from left
slideInRight  - Slide in from right
```

### Interaction
```
whileHover: { scale: 1.05 }    - Scale 5% on hover
whileHover: { y: -8 }          - Lift 8px up
whileTap: { scale: 0.95 }      - Scale down on press
```

### Grid/List
```
staggerContainer - Parent for staggered animations
staggerItem      - Individual items in list
```

## SEO Checklist

- [ ] Page has H1 heading
- [ ] All images have alt text
- [ ] Meta description set (< 160 chars)
- [ ] Open Graph tags present
- [ ] robots.txt configured
- [ ] sitemap.xml updated
- [ ] Links have descriptive text
- [ ] Mobile responsive ✓

## Performance Checklist

- [ ] All images optimized (< 500KB each)
- [ ] Hero image has `priority={true}`
- [ ] Other images lazy loaded
- [ ] No layout shift (CLS < 0.1)
- [ ] Lighthouse Performance > 90
- [ ] No unnecessary re-renders

## Contact Information

**Phone**: +971 55 941 4300
**Email**: alaa.passtransport@gmail.com
**Location**: Al Hail, Fujairah, UAE

## Key URLs

| Section | ID |
|---------|-----|
| About | #about |
| Services | #services |
| Fleet | #fleet |
| Contact | #contact |

## Browser Support

- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome)

## Useful Commands

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Type checking
pnpm tsc

# Clean build
rm -rf .next && pnpm build
```

## Common Mistakes to Avoid

❌ **Don't**: Use `hover:` without `transition-all`
✅ **Do**: Add `transition-all` to enable smooth states

❌ **Don't**: Place images outside `/public/`
✅ **Do**: Always use `/public/images/` for images

❌ **Don't**: Skip alt text on images
✅ **Do**: Write descriptive alt text

❌ **Don't**: Use hardcoded colors
✅ **Do**: Use CSS variables (--primary, --secondary)

❌ **Don't**: Animate layout with animate
✅ **Do**: Use transform for animations (scale, rotate, x, y)

## Emergency Fixes

### Site Not Loading
1. Check `/app/page.tsx` is in place
2. Verify `/app/layout.tsx` exists
3. Run `pnpm install`
4. Clear `.next` folder: `rm -rf .next`

### Animations Not Working
1. Ensure file starts with `'use client'`
2. Check `framer-motion` is installed
3. Verify imports from `@/lib/animations`
4. Check viewport settings on motion components

### Styles Not Applied
1. Check class names in `globals.css`
2. Verify Tailwind prefixes (md:, lg:)
3. Clear cache: `pnpm build --no-cache`
4. Restart dev server

### Images Not Loading
1. Check path starts with `/`
2. Verify image in `/public/images/`
3. Check file extension (.jpg, .png)
4. Clear browser cache

---

**Last Updated**: April 2026
**Quick Help**: Check DEVELOPER_GUIDE.md for detailed info
