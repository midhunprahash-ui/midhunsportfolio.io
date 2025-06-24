
import React, { useState, useEffect } from 'react';
import { Terminal, Code, Coffee } from 'lucide-react';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    'Developer: Midhun Prahash',
    'Specialization: ML,RAG,NLP,RPA',
    'Status: Building Solutions',
    'Mission: Innovation'
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

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black pt-16 relative overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-green-500 font-mono text-xs">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal */}
          <div className="space-y-8">
            {/* Terminal Window */}
            <div className="bg-gray-950 border border-gray-800 rounded-lg shadow-2xl">
              <div className="flex items-center px-4 py-2 bg-gray-900 rounded-t-lg border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-gray-500 text-sm font-mono">
                  terminal
                </div>
              </div>
              <div className="p-6 text-green-500 font-mono text-lg">
                <div className="mb-2 text-gray-600">$ whoami</div>
                <div className="mb-4 text-blue-400">Midhun Prahash SR</div>
                <div className="mb-2 text-gray-600">$ cat about.txt</div>
                <div className="mb-4 text-yellow-400">
                  AI/ML Enthusiast | Python Developer | CV | RAG | ML | RPA
                </div>
                <div className="mb-2 text-gray-600">$ echo status</div>
                <div className="text-green-500">
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </div>
              </div>
            </div>

            {/* Simple code preview */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Code className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-gray-400 text-sm font-mono">about.py</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                <span className="text-purple-400">name</span> = <span className="text-yellow-400">"Midhun Prahash"</span>
                {'\n'}<span className="text-purple-400">role</span> = <span className="text-yellow-400">"Developer. Problem solver. Solution builder"</span>
                {'\n'}<span className="text-purple-400">passion</span> = <span className="text-yellow-400">"Innovation"</span>
              </pre>
            </div>
          </div>

          {/* Right side - Profile */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8 inline-block">
              <div className="w-64 h-64 overflow-hidden border-4 border-green-500 shadow-2xl animate-float hover:scale-105 transition-transform duration-300 rounded-3xl"
                style={{
                  clipPath: 'polygon(63% 14%, 89% 35%, 82% 63%, 77% 82%, 39% 94%, 13% 78%, 8% 50%, 25% 28%, 45% 8%)'
                }}>
                <img
                  src="https://images.unsplash.com/vector-1750444037899-2e1050c9a4ac?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Midhun Prahash"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-black p-2 rounded-full animate-bounce">
                <Coffee className="w-6 h-6" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono">
              <span className="text-green-500">&lt;</span>
              Midhun
              <span className="text-green-500">/&gt;</span>
            </h1>

            <div className="space-y-4 mb-8">
              <div className="text-xl text-gray-300">
                <span className="text-green-500">Learning ML</span>
              </div>
              <div className="text-lg text-gray-500">
                I like training and partnering with machines to solve the majorly faced challenges, which in turn revolutionize industries, enhance efficiency, and drive innovation.
              </div>
              <div className="text-lg text-gray-500">
                Building innovative solutions with artificial intelligence & Machine Learning.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-mono font-bold flex items-center justify-center"
              >
                <Terminal className="w-5 h-5 mr-2" />
                View Projects
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 font-mono font-bold"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
