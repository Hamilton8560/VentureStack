import { Layers } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const footerLinks = {
    services: [
      { label: 'Software Development', href: '#services' },
      { label: 'Video Production', href: '#services' },
      { label: 'Marketing Strategy', href: '#services' },
      { label: 'System Operations', href: '#services' },
    ],
    company: [
      { label: 'Team', href: '#team' },
      { label: 'Results', href: '#results' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-charcoal border-t border-titanium/10 py-16 relative" ref={footerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-4 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-ember rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-ember/25">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">VENTURESTACK</span>
            </motion.a>
            <p className="text-silver mb-6 max-w-sm leading-relaxed">
              Full-service growth partner for ambitious businesses.
              US quality. Global efficiency.
            </p>
            <p className="text-2xl font-bold">
              Build. <span className="text-silver">Run.</span> <span className="text-ember">Grow.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-silver hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-silver hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-titanium/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-silver text-sm">
            {currentYear} VentureStack. Execution over everything.
          </p>
          <p className="text-silver text-sm font-mono">
            US + El Salvador
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
