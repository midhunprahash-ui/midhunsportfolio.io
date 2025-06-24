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
    link.href = 'public/Midhun_Prahash_Resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Midhun_Prahash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black pt-14">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Terminal Window */}
        <div className="bg-black border border-gray-900 mb-12 animate-fade-in">
          <div className="flex items-center px-4 py-2 border-b border-gray-900">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-gray-500">terminal</span>
            </div>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-2 text-gray-500">$ whoami</div>
            <div className="mb-4 text-white">midhun_prahash</div>
            <div className="mb-2 text-gray-500">$ echo role</div>
            <div className="text-amber-100">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-4">
              MIDHUN PRAHASH
            </h1>
            <div className="w-20 h-px bg-amber-100 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems that solve real-world challenges through
              machine learning, computer vision, and innovative AI solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-amber-100 text-black font-mono text-sm hover:bg-amber-200 transition-colors"
            >
              VIEW_PROJECTS
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 border border-amber-100 text-amber-100 font-mono text-sm hover:bg-amber-100 hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} />
              DOWNLOAD_RESUME
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-amber-100 text-amber-100 font-mono text-sm hover:bg-amber-100 hover:text-black transition-colors"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
