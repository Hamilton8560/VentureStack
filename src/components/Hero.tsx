import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gunmetal/30 to-transparent" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-ember/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-ember/3 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-titanium/30 to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="ember" className="mb-8 gap-2">
                <Sparkles className="w-3 h-3" />
                Growth Partner for Ambitious Businesses
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We build the systems.
              <br />
              <span className="text-gradient">You build the empire.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-silver mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Software, marketing, and operations — all under one roof.
              A dedicated team that ships, not a revolving door of freelancers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button asChild size="lg" className="group shadow-lg shadow-ember/25 hover:shadow-ember/40 hover:scale-105 transition-all duration-300">
                <a href="#contact">
                  <span>Let's talk</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-silver hover:text-white">
                <a href="#services">See what we do</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ember/10 to-transparent rounded-2xl blur-2xl animate-pulse-glow" />
              <div className="relative bg-charcoal/80 backdrop-blur-sm border border-titanium/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-silver text-sm mb-2 font-mono">// the_short_version</p>
                    <p className="text-lg">
                      13 years building businesses. 3 exits. Now we help others do the same.
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-ember/30 via-titanium/30 to-transparent" />
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gunmetal/50 rounded-xl p-4 border border-titanium/10"
                    >
                      <p className="text-3xl font-bold bg-gradient-to-r from-white to-silver bg-clip-text text-transparent">US + SV</p>
                      <p className="text-silver text-sm">Teams in both</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gunmetal/50 rounded-xl p-4 border border-titanium/10"
                    >
                      <p className="text-3xl font-bold bg-gradient-to-r from-white to-silver bg-clip-text text-transparent">Full Stack</p>
                      <p className="text-silver text-sm">Dev to marketing</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 pt-12 border-t border-titanium/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-silver text-sm mb-6">Industries we've built in:</p>
          <div className="flex flex-wrap gap-3">
            {['Oil & Gas', 'Logistics', 'Fitness', 'E-commerce', 'Professional Services'].map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
              >
                <Badge variant="outline">{industry}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
