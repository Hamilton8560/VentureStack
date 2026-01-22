import { Layers } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-titanium/20 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-ember rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">VENTURESTACK</span>
            </a>
            <p className="text-silver mb-6 max-w-sm">
              Full-service growth partner for ambitious businesses.
              US quality. Global efficiency.
            </p>
            <p className="text-2xl font-bold">
              Build. <span className="text-silver">Run.</span> <span className="text-ember">Grow.</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-silver hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#services" className="text-silver hover:text-white transition-colors">Video Production</a></li>
              <li><a href="#services" className="text-silver hover:text-white transition-colors">Marketing Strategy</a></li>
              <li><a href="#services" className="text-silver hover:text-white transition-colors">System Operations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#team" className="text-silver hover:text-white transition-colors">Team</a></li>
              <li><a href="#results" className="text-silver hover:text-white transition-colors">Results</a></li>
              <li><a href="#contact" className="text-silver hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-titanium/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver text-sm">
            {currentYear} VentureStack. Execution over everything.
          </p>
          <p className="text-silver text-sm font-mono">
            US + El Salvador
          </p>
        </div>
      </div>
    </footer>
  );
}
