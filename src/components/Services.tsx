import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.p
      ref={ref}
      className="text-4xl font-bold mb-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      {value}{suffix}
    </motion.p>
  );
}

const services = [
  {
    num: '01',
    title: 'Build',
    description: "Software that works. Not slide decks about software that might work someday.",
    tags: ['Web Apps', 'Mobile', 'APIs', 'Databases'],
  },
  {
    num: '02',
    title: 'Run',
    description: "We don't disappear after launch. Your systems, managed by people who built them.",
    tags: ['Operations', 'Support', 'Monitoring', 'Security'],
  },
  {
    num: '03',
    title: 'Grow',
    description: "Video, content, strategy. Everywhere your audience looks — you're there.",
    tags: ['Video', 'Social', 'Content', 'Brand'],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gunmetal/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="ember" className="mb-6">The Stack</Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8">
              Build.<br />
              <span className="text-titanium">Run.</span><br />
              <span className="text-ember">Grow.</span>
            </h2>
            <p className="text-silver text-lg max-w-md">
              Three words. One system. Everything your business needs to move from idea to dominance.
            </p>
          </motion.div>

          <div className="space-y-16 lg:pt-8">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <motion.span
                    className="text-8xl font-black text-gunmetal transition-colors duration-500"
                    whileHover={{ color: '#E63946' }}
                  >
                    {service.num}
                  </motion.span>
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                </div>
                <p className="text-xl text-silver mb-6 max-w-lg">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, j) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.15 + j * 0.05, duration: 0.3 }}
                    >
                      <Badge className="hover:border-ember/30 hover:text-white transition-all duration-300 cursor-default">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="border-t border-titanium/20 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="group p-6 rounded-2xl hover:bg-gunmetal/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <AnimatedCounter value="6" suffix=" days" />
              <p className="text-silver">Average time to first deploy</p>
            </motion.div>
            <motion.div
              className="group p-6 rounded-2xl hover:bg-gunmetal/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <AnimatedCounter value="0" />
              <p className="text-silver">Freelancers. Dedicated team only.</p>
            </motion.div>
            <motion.div
              className="group p-6 rounded-2xl hover:bg-gunmetal/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <AnimatedCounter value="100" suffix="%" />
              <p className="text-silver">Systems we use ourselves</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
