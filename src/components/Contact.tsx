import { useState, useRef } from 'react';
import { ArrowRight, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const services = [
    'Software Development',
    'Video & Content',
    'Full Growth Package',
    'Not sure yet',
  ];

  return (
    <section id="contact" className="py-24 bg-obsidian relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ember/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={sectionRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="ember" className="mb-4">Get Started</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to stop guessing?<br />
            <span className="text-gradient">Let's build.</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Stop planning. Start building. Tell us what you're working on
            and we'll show you how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <motion.div
                        className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle className="w-8 h-8 text-ember" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3">Message Received</h3>
                      <p className="text-silver mb-6">
                        We'll review your inquiry and get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-silver italic">
                        "While you're thinking about it, someone else is doing it."
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-silver">Name</label>
                          <Input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-silver">Email</label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-silver">Company</label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company (optional)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-silver">What do you need?</label>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <motion.button
                              key={service}
                              type="button"
                              onClick={() => setFormData({ ...formData, service })}
                              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                formData.service === service
                                  ? 'bg-ember text-white shadow-lg shadow-ember/20'
                                  : 'bg-gunmetal border border-titanium/30 text-silver hover:border-ember/30 hover:text-white'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {service}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-silver">Tell us more</label>
                        <Textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="What are you building? What's the challenge?"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group shadow-lg shadow-ember/20 hover:shadow-ember/40 hover:scale-[1.02] transition-all duration-300"
                      >
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="hover:border-ember/20 transition-all duration-300">
              <CardHeader>
                <CardTitle>Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.a
                  href="mailto:hello@venturestack.io"
                  className="flex items-center gap-3 text-silver hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-ember/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-ember" />
                  </div>
                  hello@venturestack.io
                </motion.a>
                <div className="flex items-center gap-3 text-silver">
                  <div className="w-9 h-9 rounded-lg bg-ember/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-ember" />
                  </div>
                  Response within 24 hours
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gunmetal hover:border-ember/20 transition-all duration-300">
              <CardHeader>
                <CardTitle>What Happens Next</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {[
                    'We review your inquiry within 24 hours',
                    'Quick discovery call to understand your needs',
                    'Custom proposal with clear scope and pricing',
                    'Start building — no agency delays',
                  ].map((step, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                    >
                      <span className="w-7 h-7 bg-ember/10 rounded-lg flex items-center justify-center flex-shrink-0 text-ember text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-silver text-sm leading-relaxed">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <motion.div
              className="text-center p-6 border border-dashed border-titanium/20 rounded-2xl hover:border-ember/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-silver text-sm italic">
                "Follow for more. Or don't — your competitors will."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
