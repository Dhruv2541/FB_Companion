import BentoAccordion from './components/BentoAccordion';
import PricingEngine from './components/PricingEngine';

export default function App() {
  return (
    <>
      {/* Continuous Animated Background Glows */}
      <div className="bg-glow-container" aria-hidden="true">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-glow-3"></div>
      </div>
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-[-1]"></div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-oceanic/70 border-b border-mystic/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <img
              src="/FB_Companion/export-cropped.svg"
              className="w-8 h-8 object-contain transition-all duration-hover-fast group-hover:scale-105"
              alt="Companion logo icon"
            />
            <span className="font-mono text-xl font-bold tracking-tight text-arctic group-hover:text-forsythia transition-colors duration-hover-fast">
              Companion
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <a
              href="#features"
              className="text-sm font-medium text-mystic/80 hover:text-arctic transition-colors duration-hover-fast"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-mystic/80 hover:text-arctic transition-colors duration-hover-fast"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-mystic/80 hover:text-arctic transition-colors duration-hover-fast"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm font-medium text-mystic/80 hover:text-arctic transition-colors duration-hover-fast"
            >
              Status
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 font-mono text-sm font-bold text-oceanic bg-forsythia hover:bg-forsythia/90 hover:scale-105 rounded-xl transition-all duration-hover-fast ease-out shadow-md shadow-forsythia/5"
              id="header-cta"
            >
              Launch Console
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {/* HERO SECTION */}
        <section className="relative py-24 md:py-32 flex flex-col items-center text-center px-6" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-forsythia/20 bg-forsythia/5 animate-entry-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-pulse" />
              <span className="font-mono text-xs font-bold text-forsythia uppercase tracking-widest">
                Companion Cluster v2.4 Active
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-mono text-4xl sm:text-5xl md:text-6xl font-extrabold text-arctic leading-[1.1] tracking-tight uppercase max-w-3xl mx-auto animate-entry-heading"
            >
              Orchestrate Data Pipelines with <span className="bg-gradient-to-r from-forsythia to-saffron bg-clip-text text-transparent">Sub-Millisecond</span> Precision
            </h1>

            {/* Sub-Headline / Copy */}
            <p className="text-mystic/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-entry-paragraph">
              Companion is the enterprise AI data automation engine engineered to parse unstructured streams, manage auto-recovery rollbacks, and synchronize distributed buffers with absolute zero-latency overhead.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-entry-cta">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 font-mono text-sm font-bold text-oceanic bg-forsythia hover:bg-forsythia/90 hover:scale-105 rounded-xl transition-all duration-hover-fast ease-out shadow-lg shadow-forsythia/5"
                id="hero-cta-primary"
              >
                Deploy Free Cluster
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 font-mono text-sm font-bold text-arctic bg-nocturnal/80 hover:bg-nocturnal border border-mystic/10 hover:border-mystic/20 hover:scale-105 rounded-xl transition-all duration-hover-fast ease-out"
                id="hero-cta-secondary"
              >
                Explore Architecture
              </a>
            </div>

          </div>

          {/* Premium UI Component: Live Pipeline Mockup */}
          <div className="max-w-5xl w-full mt-20 border border-mystic/10 bg-oceanic/80 rounded-2xl shadow-2xl p-4 md:p-6 text-left relative overflow-hidden animate-entry-cta">
            {/* Window controls */}
            <div className="flex items-center gap-2 mb-6 border-b border-mystic/5 pb-4">
              <span className="w-3 h-3 rounded-full bg-saffron/80" />
              <span className="w-3 h-3 rounded-full bg-forsythia/80" />
              <span className="w-3 h-3 rounded-full bg-mystic/30" />
              <span className="font-mono text-xs text-mystic/40 ml-2">cluster-monitor@companion-node-1</span>
            </div>

            {/* Visual Grid representing pipeline nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              
              {/* Pipeline Source Node */}
              <div className="bg-oceanic/40 border border-mystic/5 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-saffron">
                    <span>[SOURCE_STREAM]</span>
                    <span className="text-[10px] bg-saffron/10 px-2 py-0.5 rounded">CONNECTED</span>
                  </div>
                  <div className="space-y-1.5 text-mystic/60">
                    <p>&gt; ingress: kafka.prod.raw</p>
                    <p>&gt; rate: 142.8k events/sec</p>
                    <p>&gt; status: healthy</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-mystic/5 text-[10px] text-mystic/30">
                  REFRESHED: JUST NOW
                </div>
              </div>

              {/* Automation Engine Node */}
              <div className="bg-nocturnal/10 border border-forsythia/10 rounded-xl p-4 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forsythia opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forsythia"></span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3 text-forsythia">
                    <span>[COMPANION_CORE]</span>
                    <span className="text-[10px] bg-forsythia/10 px-2 py-0.5 rounded">ACTIVE</span>
                  </div>
                  <div className="space-y-1.5 text-mystic/60">
                    <p>&gt; engine: LLM semantic parse</p>
                    <p>&gt; latency: 0.38ms avg</p>
                    <p>&gt; threads: 64 isolated pools</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-mystic/5 text-[10px] text-mystic/30">
                  RECOVERY: ACTIVE
                </div>
              </div>

              {/* Destination Buffer Node */}
              <div className="bg-oceanic/40 border border-mystic/5 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-mystic">
                    <span>[BUFFER_OUT]</span>
                    <span className="text-[10px] bg-mystic/10 px-2 py-0.5 rounded">SYNCED</span>
                  </div>
                  <div className="space-y-1.5 text-mystic/60">
                    <p>&gt; egress: clickhouse.main</p>
                    <p>&gt; load: 100% stable</p>
                    <p>&gt; queue: 0 byte overflow</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-mystic/5 text-[10px] text-mystic/30">
                  SLA LEVEL: 99.999%
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className="py-12 bg-nocturnal/5 border-y border-mystic/10" aria-label="Performance Metrics">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center font-mono text-xs uppercase tracking-widest text-mystic/40 mb-8">
              Proven High-Performance Telemetry Under Load
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              
              <article>
                <div className="font-mono text-3xl md:text-4xl font-bold bg-gradient-to-r from-forsythia to-saffron bg-clip-text text-transparent mb-1">
                  99.999%
                </div>
                <div className="text-xs text-mystic/60 uppercase font-medium tracking-wide">
                  SLA Uptime Guarantee
                </div>
              </article>

              <article>
                <div className="font-mono text-3xl md:text-4xl font-bold bg-gradient-to-r from-forsythia to-saffron bg-clip-text text-transparent mb-1">
                  1.2B+
                </div>
                <div className="text-xs text-mystic/60 uppercase font-medium tracking-wide">
                  Daily Runs Executed
                </div>
              </article>

              <article>
                <div className="font-mono text-3xl md:text-4xl font-bold bg-gradient-to-r from-forsythia to-saffron bg-clip-text text-transparent mb-1">
                  &lt;0.4ms
                </div>
                <div className="text-xs text-mystic/60 uppercase font-medium tracking-wide">
                  Avg Execution Latency
                </div>
              </article>

              <article>
                <div className="font-mono text-3xl md:text-4xl font-bold bg-gradient-to-r from-forsythia to-saffron bg-clip-text text-transparent mb-1">
                  Zero
                </div>
                <div className="text-xs text-mystic/60 uppercase font-medium tracking-wide">
                  State Leak Failures
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* FEATURES BENTO SECTION */}
        <BentoAccordion />

        {/* PRICING SECTION */}
        <PricingEngine />
      </main>

      {/* Footer */}
      <footer className="bg-oceanic border-t border-mystic/10 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/FB_Companion/export-cropped.svg"
                className="w-6 h-6 object-contain"
                alt="Companion logo icon"
              />
              <span className="font-mono text-lg font-bold text-arctic">Companion</span>
            </div>
            <p className="text-xs text-mystic/40 mt-1">
              &copy; {new Date().getFullYear()} Companion Inc. All rights reserved.
            </p>
          </div>

          {/* Social Proof Quote / Status */}
          <div className="text-center md:text-right max-w-md">
            <p className="text-xs italic text-mystic/60">
              &ldquo;Companion has completely solved our multi-region data latency issues. Absolutely zero pipeline failures since migration.&rdquo;
            </p>
            <span className="block text-[10px] font-mono text-saffron uppercase tracking-widest mt-2">
              — Made by Dhruv
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
