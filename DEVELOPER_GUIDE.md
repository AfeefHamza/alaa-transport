# ALAA Transport Website - Developer Guide

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Main page with all sections
│   ├── globals.css             # Global styles with theme tokens
│   └── ...                     # Other pages
├── components/
│   ├── header.tsx              # Navigation header with sticky behavior
│   ├── hero.tsx                # Hero section with image and CTAs
│   ├── about.tsx               # About section with features
│   ├── services.tsx            # Services grid with animations
│   ├── fleet.tsx               # Fleet showcase with vehicles
│   ├── mission.tsx             # Mission and values section
│   ├── clients.tsx             # Client testimonials
│   ├── contact.tsx             # Contact form and info
│   └── footer.tsx              # Footer with links
├── lib/
│   ├── animations.ts           # Framer Motion animation presets
│   ├── image-utils.ts          # Image optimization utilities
│   └── utils.ts                # General utility functions
├── public/
│   ├── images/                 # High-quality image assets
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # XML sitemap
└── package.json                # Dependencies (includes framer-motion)
```

## Key Technologies

### Animation Library: Framer Motion
All animations are powered by Framer Motion v11. Key animation patterns:

#### 1. Scroll-Based Animations
```tsx
import { fadeInUp } from '@/lib/animations';

<motion.section {...fadeInUp}>
  Content animates in when scrolling into view
</motion.section>
```

#### 2. Staggered Animations
```tsx
import { staggerContainer, staggerItem } from '@/lib/animations';

<motion.div variants={staggerContainer} initial="initial" whileInView="whileInView">
  {items.map((item) => (
    <motion.div key={item} variants={staggerItem}>
      {/* Each item animates in sequence */}
    </motion.div>
  ))}
</motion.div>
```

#### 3. Hover Interactions
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## Component Development Guidelines

### 1. Use Client Components
Always use `'use client'` at the top for components with animations:
```tsx
'use client';

import { motion } from 'framer-motion';
```

### 2. Import Animations
```tsx
import { fadeInUp, slideInLeft, staggerContainer } from '@/lib/animations';
```

### 3. Add Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  fill
  className="object-cover"
  priority={false}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 4. Shadow Classes
Use Tailwind shadow scale for depth:
- `shadow-md`: Light shadow (cards)
- `shadow-lg`: Medium shadow (hover states)
- `shadow-xl`: Heavy shadow (prominent elements)

## Styling System

### Color Tokens
All colors defined in `globals.css`:

**Light Mode:**
- `--primary`: Red (#E74C3C)
- `--secondary`: Black (#000)
- `--background`: White (#FFF)
- `--foreground`: Dark gray text
- `--muted`: Light gray backgrounds

**Dark Mode:**
- Colors automatically adjust via CSS variables

### Typography
- **Heading Font**: Geist (sans-serif)
- **Body Font**: Geist (sans-serif)
- **Sizes**: Follow Tailwind scale (sm, base, lg, xl, 2xl, etc.)

### Spacing
All spacing uses Tailwind scale:
- Padding: `p-4`, `px-6`, `py-8`
- Margin: `m-4`, `mx-auto`
- Gap: `gap-4`, `gap-x-2`, `gap-y-6`

## Performance Best Practices

### Image Optimization
1. Use Next.js Image component
2. Specify `width` and `height`
3. Add `priority={true}` only for above-the-fold images
4. Use responsive `sizes` attribute
5. Images are automatically optimized by Next.js

### Animation Performance
1. Animations use GPU acceleration (transform, opacity)
2. Use `viewport` to only animate when in view
3. Avoid animating layout (use transform instead)
4. Keep animations under 1 second for smoothness

### Code Splitting
- Components automatically split with Next.js
- Framer Motion loaded as needed
- Heavy animations trigger only on user interaction

## SEO Best Practices

### Maintained SEO Features
- ✅ Proper heading hierarchy (H1 → H6)
- ✅ Alt text on all images
- ✅ Meta tags in layout
- ✅ Open Graph tags
- ✅ JSON-LD LocalBusiness schema
- ✅ robots.txt and sitemap.xml
- ✅ Semantic HTML

### When Adding Content
1. Use proper heading hierarchy
2. Add descriptive alt text to images
3. Use semantic HTML tags
4. Keep content structure logical
5. Use aria-labels for screen readers

## Accessibility Guidelines

### Color Contrast
- Primary text: 7:1 contrast ratio (AAA)
- Secondary text: 4.5:1 contrast ratio (AA)
- Interactive elements: Clear focus states

### Keyboard Navigation
- All buttons and links keyboard accessible
- Focus rings visible (primary color)
- Tab order logical

### Screen Readers
- Alt text descriptive and concise
- ARIA labels on custom components
- Semantic HTML used throughout

## Adding New Sections

### Template
```tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function NewSection() {
  return (
    <section id="section-id" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Section Title
          </h2>
          <p className="text-lg text-foreground/70">Description</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              {/* Content */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

## Common Patterns

### Card with Hover Lift
```tsx
<motion.div
  className="p-8 rounded-xl border border-border shadow-md"
  whileHover={{ y: -8 }}
>
  {/* Content */}
</motion.div>
```

### Button with Feedback
```tsx
<motion.button
  className="px-8 py-3 bg-primary text-white rounded-lg"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Grid with Stagger
```tsx
<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-8"
  variants={staggerContainer}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true, margin: '0px 0px -100px 0px' }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

## Testing

### What to Test
1. Animations on low-end devices (60 FPS target)
2. Image loading speeds (use Lighthouse)
3. Mobile responsiveness (320px - 2560px)
4. Form submission flow
5. All navigation links
6. Accessibility with screen readers

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## Deployment

### Production Build
```bash
pnpm install
pnpm build
pnpm start
```

### Vercel Deployment
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel automatically builds and deploys
4. Environment variables handled by Vercel

### Environment Variables
None required for this website (no backend services).

## Maintenance

### Regular Tasks
- Monitor Lighthouse scores
- Test on new browsers/devices
- Update dependencies (framer-motion, Next.js)
- Monitor image optimization

### Updating Content
1. Update component text
2. Replace images in `/public/images/`
3. Test on mobile and desktop
4. Verify all links still work
5. Check Lighthouse scores

## Troubleshooting

### Animations Not Showing
- Check if component has `'use client'`
- Verify Framer Motion is imported
- Check if using `whileInView` viewport settings
- Test in browser DevTools

### Image Not Loading
- Verify path starts with `/`
- Check image exists in `/public/images/`
- Use Next.js Image component
- Check alt text is descriptive

### Performance Issues
- Check image sizes (use optimized formats)
- Reduce animation complexity
- Use DevTools to profile
- Check for memory leaks

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web Accessibility](https://www.w3.org/WAI/)

---

**Last Updated**: April 2026
**Maintained By**: Development Team
