
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import MinimalBackground from '../components/MinimalBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <MinimalBackground />
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
