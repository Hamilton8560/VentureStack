import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-obsidian" />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gunmetal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-titanium/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ember font-mono text-sm tracking-wider uppercase mb-8">
              Growth Partner for Ambitious Businesses
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              We build the systems.<br />
              <span className="text-silver">You build the empire.</span>
            </h1>

            <p className="text-xl text-silver mb-10 leading-relaxed max-w-xl">
              Software, marketing, and operations — all under one roof.
              A dedicated team that ships, not a revolving door of freelancers.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href="#contact"
                className="group bg-ember hover:bg-ember/90 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-3"
              >
                <span>Let's talk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="text-silver hover:text-white py-4 font-medium transition-colors"
              >
                See what we do
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ember/10 to-transparent rounded-2xl blur-2xl" />
              <div className="relative bg-gunmetal/50 border border-titanium/30 rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-silver text-sm mb-2">The short version</p>
                    <p className="text-lg">
                      13 years building businesses. 3 exits. Now we help others do the same.
                    </p>
                  </div>
                  <div className="h-px bg-titanium/30" />
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold">US + SV</p>
                      <p className="text-silver text-sm">Teams in both</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">Full Stack</p>
                      <p className="text-silver text-sm">Dev to marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-titanium/20">
          <p className="text-silver text-sm mb-6">Industries we've built in:</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-titanium">
            <span>Oil & Gas</span>
            <span>Logistics</span>
            <span>Fitness</span>
            <span>E-commerce</span>
            <span>Professional Services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
