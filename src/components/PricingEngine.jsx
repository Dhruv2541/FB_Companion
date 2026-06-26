import { useRef, useEffect } from 'react';

const configMatrix = {
  base: { starter: 29, pro: 99, max: 249 },
  discountMultiplier: 0.8, // Flat 20% annual discount
  rates: { USD: 1, EUR: 0.92, INR: 83 },
  symbols: { USD: '$', EUR: '€', INR: '₹' }
};

export default function PricingEngine() {
  // Silent state refs
  const currentCurrencyRef = useRef('USD');
  const currentBillingRef = useRef('monthly');

  // DOM node refs
  const starterPriceRef = useRef(null);
  const proPriceRef = useRef(null);
  const maxPriceRef = useRef(null);

  const starterBillingTextRef = useRef(null);
  const proBillingTextRef = useRef(null);
  const maxBillingTextRef = useRef(null);

  // Active toggle styling refs to modify classes without re-rendering
  const usdBtnRef = useRef(null);
  const eurBtnRef = useRef(null);
  const inrBtnRef = useRef(null);
  const toggleTrackRef = useRef(null);
  const toggleBallRef = useRef(null);

  const updatePrices = () => {
    const currency = currentCurrencyRef.current;
    const billing = currentBillingRef.current;
    const rate = configMatrix.rates[currency];
    const symbol = configMatrix.symbols[currency];
    const isAnnual = billing === 'annual';
    const multiplier = isAnnual ? configMatrix.discountMultiplier : 1;

    // Calculate rounded values
    const starterVal = Math.round(configMatrix.base.starter * rate * multiplier);
    const proVal = Math.round(configMatrix.base.pro * rate * multiplier);
    const maxVal = Math.round(configMatrix.base.max * rate * multiplier);

    // Update prices in DOM
    if (starterPriceRef.current) {
      starterPriceRef.current.innerHTML = `<span class="font-mono text-2xl text-mystic/50 mr-1">${symbol}</span>${starterVal}`;
    }
    if (proPriceRef.current) {
      proPriceRef.current.innerHTML = `<span class="font-mono text-2xl text-mystic/50 mr-1">${symbol}</span>${proVal}`;
    }
    if (maxPriceRef.current) {
      maxPriceRef.current.innerHTML = `<span class="font-mono text-2xl text-mystic/50 mr-1">${symbol}</span>${maxVal}`;
    }

    // Update billing cycle subtexts
    const subtext = isAnnual ? '/month, billed annually' : '/month';
    if (starterBillingTextRef.current) starterBillingTextRef.current.textContent = subtext;
    if (proBillingTextRef.current) proBillingTextRef.current.textContent = subtext;
    if (maxBillingTextRef.current) maxBillingTextRef.current.textContent = subtext;
  };

  const handleCurrencyChange = (currency) => {
    currentCurrencyRef.current = currency;
    updatePrices();

    // Toggle button active classes manually
    const buttons = {
      USD: usdBtnRef.current,
      EUR: eurBtnRef.current,
      INR: inrBtnRef.current
    };

    Object.keys(buttons).forEach(key => {
      const btn = buttons[key];
      if (btn) {
        if (key === currency) {
          btn.classList.add('bg-nocturnal', 'text-forsythia', 'border-forsythia');
          btn.classList.remove('text-mystic/60', 'border-transparent');
        } else {
          btn.classList.remove('bg-nocturnal', 'text-forsythia', 'border-forsythia');
          btn.classList.add('text-mystic/60', 'border-transparent');
        }
      }
    });
  };

  const handleBillingToggle = () => {
    const nextBilling = currentBillingRef.current === 'monthly' ? 'annual' : 'monthly';
    currentBillingRef.current = nextBilling;
    updatePrices();

    // Toggle visual ball manually
    if (toggleBallRef.current) {
      if (nextBilling === 'annual') {
        toggleBallRef.current.style.transform = 'translateX(24px)';
        toggleTrackRef.current.classList.add('bg-forsythia');
        toggleTrackRef.current.classList.remove('bg-nocturnal');
      } else {
        toggleBallRef.current.style.transform = 'translateX(0px)';
        toggleTrackRef.current.classList.add('bg-nocturnal');
        toggleTrackRef.current.classList.remove('bg-forsythia');
      }
    }
  };

  // Perform initial paint to populate values correctly
  useEffect(() => {
    updatePrices();
  }, []);

  return (
    <section id="pricing" className="py-24 border-t border-mystic/10 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl text-arctic font-bold mb-4 tracking-tight uppercase">
            Predictable, Scale-Isolated Pricing
          </h2>
          <p className="text-mystic/70 max-w-2xl mx-auto text-base">
            No hidden costs. Instantly scale execution limits to match your production demands. Select currency and billing frequency below.
          </p>
        </div>

        {/* Pricing Controls - No State Updates */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          
          {/* Currency Switcher */}
          <div className="bg-oceanic/80 border border-mystic/10 p-1.5 rounded-xl flex items-center gap-1 shadow-lg">
            <button
              ref={usdBtnRef}
              id="currency-usd"
              onClick={() => handleCurrencyChange('USD')}
              className="px-4 py-2 text-sm font-mono font-medium rounded-lg transition-all duration-hover-fast ease-out bg-nocturnal text-forsythia border border-forsythia"
            >
              USD
            </button>
            <button
              ref={eurBtnRef}
              id="currency-eur"
              onClick={() => handleCurrencyChange('EUR')}
              className="px-4 py-2 text-sm font-mono font-medium rounded-lg transition-all duration-hover-fast ease-out text-mystic/60 border border-transparent hover:text-arctic"
            >
              EUR
            </button>
            <button
              ref={inrBtnRef}
              id="currency-inr"
              onClick={() => handleCurrencyChange('INR')}
              className="px-4 py-2 text-sm font-mono font-medium rounded-lg transition-all duration-hover-fast ease-out text-mystic/60 border border-transparent hover:text-arctic"
            >
              INR
            </button>
          </div>

          {/* Billing Switcher (Toggle) */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-mystic/80">Monthly</span>
            <button
              id="billing-toggle"
              onClick={handleBillingToggle}
              aria-label="Toggle Billing Cycle"
              className="focus:outline-none"
            >
              <div
                ref={toggleTrackRef}
                className="w-12 h-6 bg-nocturnal rounded-full p-1 transition-all duration-reflow-fast ease-in-out border border-mystic/10 cursor-pointer"
              >
                <div
                  ref={toggleBallRef}
                  className="w-4 h-4 bg-arctic rounded-full shadow-md transition-transform duration-reflow-fast ease-in-out"
                  style={{ transform: 'translateX(0px)' }}
                />
              </div>
            </button>
            <span className="text-sm font-medium text-arctic flex items-center gap-2">
              Annual <span className="bg-forsythia/25 text-forsythia text-xs font-mono font-bold px-2 py-0.5 rounded border border-forsythia/35 uppercase">-20%</span>
            </span>
          </div>

        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* Starter Card */}
          <article className="bg-oceanic/40 border border-mystic/10 p-8 rounded-2xl flex flex-col justify-between transition-all duration-hover-slow ease-out hover:shadow-xl hover:-translate-y-1">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20">
                Developer
              </span>
              <h3 className="text-2xl font-mono font-bold text-arctic mt-4 mb-2">Starter</h3>
              <p className="text-mystic/60 text-sm mb-6">
                Perfect for automated side projects and early pipeline prototypes.
              </p>
              
              {/* Dynamic Price Area */}
              <div className="flex items-baseline mb-2">
                <span
                  ref={starterPriceRef}
                  className="font-mono text-5xl font-bold tracking-tight text-arctic"
                >
                  {/* Managed by Ref */}
                </span>
                <span
                  ref={starterBillingTextRef}
                  className="text-xs text-mystic/50 font-medium ml-2"
                >
                  /month
                </span>
              </div>
              
              <ul className="space-y-4 my-8 text-sm text-mystic/80 border-t border-mystic/10 pt-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span>10,000 runs per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span>5 active workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span>Standard execution speed</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span>Community support</span>
                </li>
              </ul>
            </div>

            <button
              id="cta-starter"
              className="w-full py-3 px-6 font-mono text-sm font-bold text-arctic bg-nocturnal/80 hover:bg-nocturnal border border-mystic/10 hover:border-mystic/20 hover:scale-105 rounded-xl transition-all duration-hover-fast ease-out"
            >
              Get Started
            </button>
          </article>

          {/* Pro Card (Featured) */}
          <article className="bg-nocturnal/20 border-2 border-forsythia p-8 rounded-2xl flex flex-col justify-between relative transition-all duration-hover-slow ease-out hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-forsythia text-oceanic font-mono text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
              Recommended
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-forsythia bg-forsythia/10 px-3 py-1 rounded-full border border-forsythia/20">
                Production
              </span>
              <h3 className="text-2xl font-mono font-bold text-arctic mt-4 mb-2">Professional</h3>
              <p className="text-mystic/60 text-sm mb-6">
                Our main engine configuration for orchestrating large production pipelines.
              </p>
              
              {/* Dynamic Price Area */}
              <div className="flex items-baseline mb-2">
                <span
                  ref={proPriceRef}
                  className="font-mono text-5xl font-bold tracking-tight text-arctic"
                >
                  {/* Managed by Ref */}
                </span>
                <span
                  ref={proBillingTextRef}
                  className="text-xs text-mystic/50 font-medium ml-2"
                >
                  /month
                </span>
              </div>

              <ul className="space-y-4 my-8 text-sm text-mystic/80 border-t border-mystic/10 pt-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia" />
                  <span>100,000 runs per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia" />
                  <span>Unlimited workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia" />
                  <span>Prioritized execution queues</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia" />
                  <span>24/7 priority support</span>
                </li>
              </ul>
            </div>

            <button
              id="cta-pro"
              className="w-full py-3 px-6 font-mono text-sm font-bold text-oceanic bg-forsythia hover:bg-forsythia/90 hover:scale-105 rounded-xl transition-all duration-hover-fast ease-out shadow-lg shadow-forsythia/10"
            >
              Deploy Pro Cluster
            </button>
          </article>

          {/* Max Card */}
          <article className="bg-oceanic/40 border border-mystic/10 p-8 rounded-2xl flex flex-col justify-between transition-all duration-hover-slow ease-out hover:shadow-xl hover:-translate-y-1">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-arctic bg-arctic/10 px-3 py-1 rounded-full border border-arctic/20">
                Enterprise
              </span>
              <h3 className="text-2xl font-mono font-bold text-arctic mt-4 mb-2">Max</h3>
              <p className="text-mystic/60 text-sm mb-6">
                Dedicated infrastructure for sub-millisecond data processing.
              </p>
              
              {/* Dynamic Price Area */}
              <div className="flex items-baseline mb-2">
                <span
                  ref={maxPriceRef}
                  className="font-mono text-5xl font-bold tracking-tight text-arctic"
                >
                  {/* Managed by Ref */}
                </span>
                <span
                  ref={maxBillingTextRef}
                  className="text-xs text-mystic/50 font-medium ml-2"
                >
                  /month
                </span>
              </div>

              <ul className="space-y-4 my-8 text-sm text-mystic/80 border-t border-mystic/10 pt-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-mystic" />
                  <span>Unlimited execution runs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-mystic" />
                  <span>Dedicated compute nodes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-mystic" />
                  <span>Sub-millisecond TTI SLAs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-mystic" />
                  <span>Dedicated Solutions Engineer</span>
                </li>
              </ul>
            </div>

            <button
              id="cta-max"
              className="w-full py-3 px-6 font-mono text-sm font-bold text-arctic bg-nocturnal/80 hover:bg-nocturnal border border-mystic/10 hover:border-mystic/20 hover:scale-105 rounded-xl transition-all duration-hover-fast ease-out"
            >
              Contact Enterprise
            </button>
          </article>

        </div>

      </div>
    </section>
  );
}
