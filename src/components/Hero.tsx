
import React, { useState, useEffect } from 'react';
import { Terminal, Download } from 'lucide-react';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    'ML Engineer',
    'Problem Solver',
    'AI Researcher',
    'Code Architect'
  ];

  useEffect(() => {
    const typeCommand = () => {
      const command = commands[currentCommand];
      let i = 0;
      const timer = setInterval(() => {
        setDisplayText(command.slice(0, i));
        i++;
        if (i > command.length) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % commands.length);
          }, 2000);
        }
      }, 100);
    };

    typeCommand();
  }, [currentCommand]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Midhun_Prahash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-medium text-foreground mb-6">
              Hello, I'm Midhun
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems that solve real-world challenges through
              machine learning, computer vision, and innovative AI solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors shadow-google-md"
            >
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
