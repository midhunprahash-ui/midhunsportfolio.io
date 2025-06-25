
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import SpaceBackground from '../components/SpaceBackground';
import AtomVisualization from '../components/AtomVisualization';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <AtomVisualization />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Experience />
        <Articles />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
