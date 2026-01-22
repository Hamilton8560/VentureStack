export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="lg:sticky lg:top-32">
            <p className="text-ember font-mono text-sm tracking-wider uppercase mb-6">The Stack</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8">
              Build.<br />
              <span className="text-titanium">Run.</span><br />
              <span className="text-ember">Grow.</span>
            </h2>
            <p className="text-silver text-lg max-w-md">
              Three words. One system. Everything your business needs to move from idea to dominance.
            </p>
          </div>

          <div className="space-y-16 lg:pt-8">
            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-8xl font-black text-gunmetal group-hover:text-titanium transition-colors">01</span>
                <h3 className="text-3xl font-bold">Build</h3>
              </div>
              <p className="text-xl text-silver mb-6 max-w-lg">
                Software that works. Not slide decks about software that might work someday.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Web Apps', 'Mobile', 'APIs', 'Databases'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gunmetal text-silver text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-8xl font-black text-gunmetal group-hover:text-titanium transition-colors">02</span>
                <h3 className="text-3xl font-bold">Run</h3>
              </div>
              <p className="text-xl text-silver mb-6 max-w-lg">
                We don't disappear after launch. Your systems, managed by people who built them.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Operations', 'Support', 'Monitoring', 'Security'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gunmetal text-silver text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-8xl font-black text-gunmetal group-hover:text-titanium transition-colors">03</span>
                <h3 className="text-3xl font-bold">Grow</h3>
              </div>
              <p className="text-xl text-silver mb-6 max-w-lg">
                Video, content, strategy. Everywhere your audience looks — you're there.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Video', 'Social', 'Content', 'Brand'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gunmetal text-silver text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-titanium/20 pt-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">6 days</p>
              <p className="text-silver">Average time to first deploy</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">0</p>
              <p className="text-silver">Freelancers. Dedicated team only.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-ember mb-2">100%</p>
              <p className="text-silver">Systems we use ourselves</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
