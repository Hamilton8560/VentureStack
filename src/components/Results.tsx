import { ArrowRight } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedNumber({ target, className = '' }: { target: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      });
      const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, count, rounded, target]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

const quotes = [
  {
    text: '"Marine discipline meets entrepreneur hustle."',
    source: 'The founder ethos',
    accent: true,
  },
  {
    text: '"Ideas are cheap. Execution is everything."',
    source: 'How we think about work',
    accent: false,
  },
  {
    text: '"We don\'t discount quality. We reward commitment."',
    source: 'How we think about pricing',
    accent: false,
  },
];

export default function Results() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const quotesRef = useRef(null);
  const quotesInView = useInView(quotesRef, { once: true, margin: '-50px' });

  return (
    <section id="results" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-ember font-mono text-sm tracking-wider uppercase mb-6">Why Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
            We got tired of watching businesses<br />
            <span className="text-gradient">pay agency prices for agency excuses.</span>
          </h2>
          <p className="text-xl text-silver">
            So we built something different. A team that actually ships. Systems we run ourselves.
            Skin in the game.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-titanium/10 rounded-2xl overflow-hidden mb-20">
          {[
            { number: 3, label: 'Exits', description: 'Oil & gas. Logistics. Fitness. Different industries, same playbook — build systems that work, then get out of the way.', highlight: false },
            { number: 2, label: 'Countries', description: 'US leadership in strategy and architecture. El Salvador team for execution and content. You get both without the markup.', highlight: false },
            { number: 0, label: 'Freelancers', description: 'No contractor roulette. No "let me check with my guy." Your project gets a committed team from day one.', highlight: true },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-charcoal p-10 group hover:bg-gunmetal/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <p className={`text-5xl font-black mb-4 ${stat.highlight ? 'text-ember' : 'text-white'}`}>
                <AnimatedNumber target={stat.number} />
              </p>
              <p className="text-xl font-semibold mb-3">{stat.label}</p>
              <p className="text-silver leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={quotesRef}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={quotesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
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
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 text-ember font-semibold group"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span>See what we can build for you</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <div className="space-y-6">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                className={`border-l-2 ${quote.accent ? 'border-ember' : 'border-titanium/30 hover:border-ember/50'} pl-6 py-2 transition-all duration-300`}
                initial={{ opacity: 0, x: 20 }}
                animate={quotesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <p className="text-lg mb-2">{quote.text}</p>
                <p className="text-silver text-sm">{quote.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
