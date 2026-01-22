import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
