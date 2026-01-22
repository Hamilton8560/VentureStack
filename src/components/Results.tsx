import { ArrowRight } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <p className="text-ember font-mono text-sm tracking-wider uppercase mb-6">Why Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
            We got tired of watching businesses<br />
            <span className="text-silver">pay agency prices for agency excuses.</span>
          </h2>
          <p className="text-xl text-silver">
            So we built something different. A team that actually ships. Systems we run ourselves.
            Skin in the game.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-titanium/20 mb-20">
          <div className="bg-charcoal p-10">
            <p className="text-5xl font-black mb-4">3</p>
            <p className="text-xl font-semibold mb-3">Exits</p>
            <p className="text-silver">
              Oil & gas. Logistics. Fitness. Different industries, same playbook —
              build systems that work, then get out of the way.
            </p>
          </div>
          <div className="bg-charcoal p-10">
            <p className="text-5xl font-black mb-4">2</p>
            <p className="text-xl font-semibold mb-3">Countries</p>
            <p className="text-silver">
              US leadership in strategy and architecture. El Salvador team for
              execution and content. You get both without the markup.
            </p>
          </div>
          <div className="bg-charcoal p-10">
            <p className="text-5xl font-black text-ember mb-4">0</p>
            <p className="text-xl font-semibold mb-3">Freelancers</p>
            <p className="text-silver">
              No contractor roulette. No "let me check with my guy."
              Your project gets a committed team from day one.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Our software runs real businesses right now.
            </h3>
            <p className="text-silver text-lg mb-6">
              The same systems we'll build for you? They're powering gyms in the US and El Salvador
              as you read this. Member management. Scheduling. Payments. The works.
            </p>
            <p className="text-silver text-lg mb-8">
              We don't sell theory. We deploy what's already proven.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-ember font-semibold group"
            >
              <span>See what we can build for you</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-ember pl-6">
              <p className="text-lg mb-2">"Marine discipline meets entrepreneur hustle."</p>
              <p className="text-silver text-sm">The founder ethos</p>
            </div>
            <div className="border-l-2 border-titanium pl-6">
              <p className="text-lg mb-2">"Ideas are cheap. Execution is everything."</p>
              <p className="text-silver text-sm">How we think about work</p>
            </div>
            <div className="border-l-2 border-titanium pl-6">
              <p className="text-lg mb-2">"We don't discount quality. We reward commitment."</p>
              <p className="text-silver text-sm">How we think about pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
