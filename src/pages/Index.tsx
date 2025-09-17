
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import AtomVisualization from '../components/AtomVisualization';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Articles />
      <Contact />
    </div>
  );
};

export default Index;
