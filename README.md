# Companion - Premium AI Data Automation Platform

A high-performance, premium SaaS landing page for the AI automation cluster platform **Companion**. This application is engineered for speed, responsiveness, and visual polish, built from the ground up without pre-compiled component libraries to satisfy strict hackathon performance constraints.

---

## 🚀 Architectural Highlights & Performance Optimizations

### 1. Isolated Zero-Re-Render Pricing Engine (`PricingEngine.jsx`)
To maintain sub-millisecond page responsiveness and prevent layout recalculations:
- **Matrix Calculations:** A configuration matrix maps regional conversion tariffs (USD, EUR, INR) and a flat `20%` discount for annual billing:
  ```javascript
  const configMatrix = {
    base: { starter: 29, pro: 99, max: 249 },
    discountMultiplier: 0.8,
    rates: { USD: 1, EUR: 0.92, INR: 83 },
    symbols: { USD: '$', EUR: '€', INR: '₹' }
  };
  ```
- **State Isolation:** The component completely bypasses React's `useState` hooks for currency and interval selections, avoiding re-renders.
- **Direct DOM Mutation:** Local mouse clicks mutate values directly on text nodes using `useRef` (`starterPriceRef.current.innerHTML = ...`). This guarantees instantaneous updates with zero React VDOM overhead.

### 2. Bento-to-Accordion Layout Lock (`BentoAccordion.jsx`)
- **Desktop Grid:** A clean 3-column asymmetric Bento Grid displaying core modules.
- **Mobile Accordion:** Auto-collapsing accordion cards featuring native CSS Grid transitions (`grid-template-rows: 0fr` to `1fr`), animating height seamlessly from `0` to `auto` without layout thrashing.
- **Context Lock Listener:** A global resize hook listens to viewport transitions. If the window collapses below the mobile breakpoint (`768px`), it programmatically reads the last hovered desktop bento node index from a silent `useRef` and locks it as the open accordion card.

### 3. Native Cursor Spotlight Hover Overlay (Zero Re-render)
- Every Bento grid card is mapped to a dedicated ref.
- A native `onMouseMove` event listener calculates pointer offsets relative to the card's bounding box and binds them to local CSS variables (`--mouse-x` and `--mouse-y`) on the element's style attribute.
- A radial gradient background overlay reads these variables to display a glowing spotlight orb that tracks the user's cursor seamlessly without triggering React re-renders.

### 4. Background and Initial Load Choreography
- **Animated Perspective Grid:** A scrolling perspective grid (`.bg-tech-grid`) runs concurrently with floating radial glows (`.bg-glow-1`, `.bg-glow-2`, `.bg-glow-3`) using GPU-accelerated CSS animations.
- **Staggered Entry Reveal:** Keyframe-driven entry choreography reveals the Hero elements sequentially (Badge -> Title -> Subtitle -> CTAs) starting at `100ms` and completing within a strict `500ms` window to keep Time to Interactive (TTI) low.

---

## 🛠️ Tech Stack & Constraints
- **Core:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (utilizing the new `@tailwindcss/postcss` plugin architecture)
- **SVG Management:** Configured vector illustrations (`search.svg`, `arrow-trending-up.svg`, `context.svg`, `sync.svg`) loaded inside contrast-enhancing `bg-arctic` badges.
- **Dependency Hygiene:** No Framer Motion, Radix UI, Shadcn, or other CSS-in-JS runtimes. All interactions are built natively.

---

## 💻 Local Setup & Execution

Follow these steps to run or compile the project locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v20+ recommended) and `npm` installed.

### 1. Install Dependencies
Install all core React packages and Tailwind CSS dev tools:
```bash
npm install
```

### 2. Run Local Development Server
Launch the local dev environment with hot module replacement (HMR) active:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Production Build
Compile and package the application into a highly optimized, minified production bundle:
```bash
npm run build
```
This outputs the build files to the `/dist` directory. The CSS compiles to a single minified file (approx. 37 kB) containing all active Tailwind utility classes.

### 4. Preview Production Build
Spin up a local server to preview the compiled build exactly as it will behave in production:
```bash
npm run preview
```
