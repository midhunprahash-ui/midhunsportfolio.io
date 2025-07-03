
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Midhun_Prahash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight">
              Hello, I'm
              <span className="block font-medium">Midhun</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I build intelligent systems and solve real-world problems through 
              machine learning, computer vision, and innovative AI solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 border border-gray-300 text-gray-900 hover:border-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
