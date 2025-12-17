# Portfolio Design Guidelines for Sakshi's Interactive Portfolio

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolio leaders like Linear's clean animations, Stripe's sophisticated minimalism, and award-winning portfolios on Awwwards. This portfolio balances professional polish with engaging interactivity to showcase multi-domain technical expertise.

**Core Principles**:
- Animation-rich but purposeful: Every animation serves to guide attention or reveal information
- Progressive disclosure: Information unfolds as users interact (accordions, flip cards)
- Mobile-first responsive design with touch-optimized interactions
- Modular component architecture for role-specific content

## Typography System

**Font Stack**: 
- Primary: Inter or DM Sans (Google Fonts) - clean, modern sans-serif for body text
- Accent: Space Grotesk or Poppins - bold headings with personality
- Mono: JetBrains Mono - for technical content and code references

**Hierarchy**:
- Hero/H1: 3xl to 6xl (responsive), font-bold
- Section Headers/H2: 2xl to 4xl, font-bold  
- Subsection/H3: xl to 2xl, font-semibold
- Body: base to lg, font-normal
- Captions/Meta: sm to base, font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 8, 12, 16, 24 for consistency
- Component padding: p-4 (mobile), p-8 (tablet), p-12 (desktop)
- Section spacing: py-16 (mobile), py-24 (desktop)
- Card gaps: gap-4 to gap-8
- Micro-spacing: space-y-2, space-y-4

**Grid Structure**:
- Container: max-w-7xl mx-auto px-4
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl
- Multi-column grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### 1. Hero/About Me Section
- Full viewport height (h-screen) with gradient overlay
- Animated typing effect for roles (DevOps → Cloud → SDE → SRE → Frontend)
- Profile image with animated border/glow effect
- Hook line: "Building the infrastructure of tomorrow, one pipeline at a time"
- Scroll indicator with bounce animation
- Floating tech icons (Docker, Kubernetes, AWS, React) with subtle drift animation

### 2. Technical Skills - Expandable Accordion System
- 5 role cards arranged vertically
- Each card: Icon + Title + Arrow indicator
- On click: Smooth height expansion with stagger animation
- Expanded state reveals:
  - Grid of skill badges (3-4 columns)
  - Featured project cards (2-column on desktop)
  - Certification thumbnails (horizontal scroll on mobile)
  - Download resume button (role-specific)
  - Contact row (5 icon buttons)
- Collapse other sections when one expands

### 3. Interpersonal Skills - 3D Flip Cards
- Grid layout: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Cards flip 180° on hover (CSS 3D transform)
- Front: Skill name + icon
- Back: Real-world example with micro-copy
- Skills: Team Skills, Leadership, Communication, Problem Solving, Critical Thinking, Decision Making

### 4. Education Timeline
- Vertical timeline with connecting line
- 3 nodes: B.Tech (animated GPA counter), 12th, 10th
- Each node: Institution, Year, Score with badge
- Scroll-triggered fade-in from left/right alternating

### 5. Projects & Research - Flip Card Grid
- Grid: 2-3 columns (responsive)
- Cards flip on hover revealing:
  - Front: Project name + minimal description
  - Back: Tech stack badges + "View Details" link
- Projects: DevOps Quest, E-Commerce, FOODISTA, Patient Care, UPI Research, Smart Rings

### 6. Coding Profiles Dashboard
- 4 cards in 2x2 grid (mobile: vertical stack)
- Each card: Platform logo + username + stats preview
- Hover: Scale up + shadow increase
- Click: External redirect with smooth transition
- Platforms: LeetCode, HackerRank, CodeChef, GeeksForGeeks

### 7. Certifications & Badges Gallery
- Masonry grid or horizontal carousel
- Certificate cards with:
  - Badge/certificate image (aspect-ratio-square)
  - Issuer name (Oracle, Microsoft)
  - Credential ID
  - Verification link button
- Lightbox on click for full certificate view

### 8. Resume Download Modal
- Floating button (bottom-right, fixed position)
- On click: Modal with 5 role options in grid
- Each option: Icon + Role name + one-click download
- Modal: Backdrop blur + slide-up animation

### 9. Contact Section
- 5 contact methods in horizontal row (mobile: 2-column grid)
- Each: Large icon + label
- Interactions:
  - Phone: Opens tel: link
  - WhatsApp: Opens WhatsApp with pre-filled message
  - Email: Opens mailto: with subject line
  - LinkedIn/GitHub: External links
- Hover: Icon bounce + scale

## Navigation

**Sticky Header**: 
- Logo/Name (left) + Nav links (right)
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections with offset
- Active section indicator

## Animation Strategy

**Entry Animations** (use Intersection Observer):
- Fade-in-up for text blocks (100ms stagger)
- Scale-in for cards
- Slide-in from sides for timeline items

**Micro-interactions**:
- Button hover: Scale 1.05 + shadow increase
- Card hover: Lift effect (translateY -4px)
- Icon hover: Rotate or bounce
- Link underline: Slide-in from left

**Page Transitions**:
- Smooth scroll behavior
- Section fade-in on scroll into view
- Parallax effect on hero background (subtle)

**Performance**: Use CSS transforms and opacity only, avoid animating layout properties

## Images

**Hero Section**: 
- Large background image: Abstract tech visualization, circuit board pattern, or cloud/server infrastructure graphic (full-width, fixed attachment for parallax)
- Profile photo: Professional headshot with transparent background, positioned over gradient overlay (circular crop with animated border glow)

**Project Cards**: 
- Placeholder for each project showing interface mockups or architecture diagrams
- Use subtle grayscale with hover revealing full saturation

**Certification Section**: 
- Actual certificate images (Oracle OCI GenAI, Azure Fundamentals badges)
- Badge images prominently displayed

**Tech Stack Icons**: 
- Use Font Awesome or Heroicons for consistency (Docker, Kubernetes, AWS, Azure, React, Git, etc.)

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)
- Touch targets: Minimum 44px for mobile interactions

## Accessibility

- Semantic HTML5 (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Keyboard navigation for all interactive elements
- Focus indicators (ring-2 offset-2)
- Reduced motion media query for users preferring minimal animation
- Alt text for all images
- Contrast ratios meeting WCAG AA standards