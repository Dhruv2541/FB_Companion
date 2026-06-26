import { useState, useEffect, useRef } from 'react';

const items = [
  {
    title: 'AI Semantic Search Engine',
    tag: 'Search & Index',
    desc: 'Parse and index unstructured databases at scale using advanced vector search. Retrieve context in sub-milliseconds with flawless recall.',
    icon: '/FB_Companion/assets/search.svg',
    color: 'border-saffron/20 bg-saffron/5 hover:border-saffron/40',
    dotColor: 'bg-saffron',
    accentColor: 'text-saffron'
  },
  {
    title: 'Pipeline Diagnostics & Analytics',
    tag: 'Analytics',
    desc: 'Monitor throughput, diagnose pipeline bottlenecks, and visualize latency profiles in real-time with zero overhead.',
    icon: '/FB_Companion/assets/arrow-trending-up.svg',
    color: 'border-forsythia/20 bg-forsythia/5 hover:border-forsythia/40',
    dotColor: 'bg-forsythia',
    accentColor: 'text-forsythia'
  },
  {
    title: 'Self-Healing Automation Nodes',
    tag: 'Auto-Recovery',
    desc: 'Intelligent nodes automatically recover workflows, roll back corrupt states, and rerun failing operations without human intervention.',
    icon: '/FB_Companion/assets/context.svg',
    color: 'border-mystic/20 bg-mystic/5 hover:border-mystic/40',
    dotColor: 'bg-mystic',
    accentColor: 'text-mystic'
  },
  {
    title: 'Multi-Source Context Sync',
    tag: 'Database Linker',
    desc: 'Seamlessly orchestrate data syncing between dozens of external databases, storage APIs, and local buffers concurrently.',
    icon: '/FB_Companion/assets/sync.svg',
    color: 'border-arctic/20 bg-arctic/5 hover:border-arctic/40',
    dotColor: 'bg-arctic',
    accentColor: 'text-arctic'
  }
];

export default function BentoAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  
  // Silent index ref for desktop hovers & clicks (avoids re-rendering the whole page during hover)
  const activeIndexRef = useRef(0);
  const wasMobileRef = useRef(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // Bento card refs for cursor spotlight tracing
  const cardRef0 = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3];

  // Mouse move spotlight handler (zero re-render)
  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // Resize handler to synchronize index when transitioning from desktop to mobile
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint is 768px in standard setups
      
      // If we just shrunk below the mobile breakpoint, read ref and open that panel
      if (isMobile && !wasMobileRef.current) {
        setOpenIndex(activeIndexRef.current);
      }
      
      wasMobileRef.current = isMobile;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler for desktop card hovers/clicks
  const handleDesktopHover = (index) => {
    activeIndexRef.current = index;
  };

  // Handler for mobile accordion clicks
  const handleAccordionClick = (index) => {
    const nextIndex = openIndex === index ? -1 : index;
    setOpenIndex(nextIndex);
    if (nextIndex !== -1) {
      activeIndexRef.current = nextIndex;
    }
  };

  return (
    <section id="features" className="py-24 border-t border-mystic/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-mono text-3xl md:text-4xl text-arctic font-bold uppercase tracking-tight mb-4">
            Engineered Core Architecture
          </h2>
          <p className="text-mystic/70 max-w-2xl text-base">
            Companion wraps powerful data operations in a low-latency, self-healing framework. Explore the stack below.
          </p>
        </div>

        {/* MOBILE ACCORDION (hidden on desktop md:) */}
        <div className="block md:hidden space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-xl transition-all duration-hover-slow ease-out overflow-hidden ${
                  isOpen ? 'border-forsythia/30 bg-nocturnal/20' : 'border-mystic/10 bg-oceanic/40'
                }`}
              >
                {/* Header */}
                <button
                  id={`accordion-trigger-${index}`}
                  onClick={() => handleAccordionClick(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-mono font-bold text-arctic focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${item.dotColor}`} aria-hidden="true" />
                    <span>{item.title}</span>
                  </div>
                  <img
                    src="/FB_Companion/assets/arrow-path.svg"
                    className={`w-5 h-5 opacity-60 transition-transform duration-reflow-fast ease-in-out ${
                      isOpen ? 'rotate-180 text-forsythia' : ''
                    }`}
                    alt="Toggle Panel icon"
                    aria-hidden="true"
                  />
                </button>

                {/* Collapsible Panel with Native Grid Transition */}
                <div
                  id={`accordion-panel-${index}`}
                  className={`accordion-wrapper ${isOpen ? 'open' : ''}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${index}`}
                >
                  <div className="accordion-inner">
                    <div className="p-5 text-mystic/70 text-sm border-t border-mystic/5 space-y-4">
                      <p>{item.desc}</p>
                      <div className="flex items-center gap-3 bg-oceanic/60 p-3 rounded-lg border border-mystic/5">
                        <div className="w-7 h-7 rounded bg-arctic p-1 flex items-center justify-center shadow-sm">
                          <img 
                            src={item.icon} 
                            className="w-full h-full object-contain" 
                            alt={`${item.title} asset`} 
                            aria-hidden="true"
                          />
                        </div>
                        <span className={`font-mono text-xs font-bold uppercase tracking-wider ${item.accentColor}`}>
                          Module: {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP BENTO GRID (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {items.map((item, index) => {
            // We alternate column spans to make a clean Bento Grid layout
            const colSpan = (index === 0 || index === 3) ? 'col-span-2' : 'col-span-1';
            const cardRef = cardRefs[index];
            
            return (
              <article
                key={index}
                ref={cardRef}
                id={`bento-card-${index}`}
                onMouseEnter={() => handleDesktopHover(index)}
                onClick={() => handleDesktopHover(index)}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                className={`border p-8 rounded-2xl flex flex-col justify-between transition-all duration-hover-slow ease-out hover:shadow-xl hover:-translate-y-1 group cursor-pointer relative overflow-hidden ${colSpan} ${item.color}`}
              >
                {/* Spotlighting Hover Orb */}
                <div 
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 200, 1, 0.15), transparent 40%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${item.accentColor} border ${item.accentColor === 'text-saffron' ? 'border-saffron/20 bg-saffron/5' : item.accentColor === 'text-forsythia' ? 'border-forsythia/20 bg-forsythia/5' : item.accentColor === 'text-mystic' ? 'border-mystic/20 bg-mystic/5' : 'border-arctic/20 bg-arctic/5'} px-3 py-1 rounded-full`}>
                      {item.tag}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-arctic border border-mystic/10 p-2.5 flex items-center justify-center transition-colors duration-hover-fast group-hover:border-forsythia/50 shadow-inner">
                      <img
                        src={item.icon}
                        className="w-full h-full object-contain"
                        alt={`${item.title} icon`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h3 className="font-mono text-xl font-bold text-arctic mb-3 group-hover:text-forsythia transition-colors duration-hover-fast">
                    {item.title}
                  </h3>
                  <p className="text-mystic/70 text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-mono text-mystic/40 group-hover:text-arctic transition-colors duration-hover-fast relative z-10">
                  <span>Explore Module Specs</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-hover-fast">→</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
