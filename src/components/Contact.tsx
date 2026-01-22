import { useState } from 'react';
import { Send, ArrowRight, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ember/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-ember font-mono text-sm tracking-wider uppercase mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to stop guessing?<br />
            <span className="text-silver">Let's build.</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Stop planning. Start building. Tell us what you're working on
            and we'll show you how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-charcoal border border-titanium/30 rounded-2xl p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-ember" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Received</h3>
                <p className="text-silver mb-6">
                  We'll review your inquiry and get back to you within 24 hours.
                </p>
                <p className="text-sm text-silver italic">
                  "While you're thinking about it, someone else is doing it."
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gunmetal border border-titanium/50 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-ember focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gunmetal border border-titanium/50 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-ember focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-gunmetal border border-titanium/50 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-ember focus:outline-none transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What do you need?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({ ...formData, service })}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                          formData.service === service
                            ? 'bg-ember text-white'
                            : 'bg-gunmetal border border-titanium/50 text-silver hover:border-ember/50'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us more</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gunmetal border border-titanium/50 rounded-lg px-4 py-3 text-white placeholder-silver focus:border-ember focus:outline-none transition-colors resize-none"
                    placeholder="What are you building? What's the challenge?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ember hover:bg-ember/90 text-white py-4 rounded-lg font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-charcoal border border-titanium/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@venturestack.io"
                  className="flex items-center gap-3 text-silver hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-ember" />
                  hello@venturestack.io
                </a>
                <div className="flex items-center gap-3 text-silver">
                  <MessageSquare className="w-5 h-5 text-ember" />
                  Response within 24 hours
                </div>
              </div>
            </div>

            <div className="bg-gunmetal border border-titanium/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">What Happens Next</h3>
              <ol className="space-y-4">
                {[
                  'We review your inquiry within 24 hours',
                  'Quick discovery call to understand your needs',
                  'Custom proposal with clear scope and pricing',
                  'Start building — no agency delays',
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-ember/10 rounded-full flex items-center justify-center flex-shrink-0 text-ember text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-silver">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-center p-6 border border-dashed border-titanium/30 rounded-xl">
              <p className="text-silver text-sm italic">
                "Follow for more. Or don't — your competitors will."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
