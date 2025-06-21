import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-black pt-16 relative overflow-hidden">
      {/* Floating Profile Photo */}
      {/* Changed positioning from 'absolute top-1/2 right-10' to 'relative mb-8' and removed hidden lg:block */}
      <div className="relative mb-8"> {/* mb-8 adds space below the image */}
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl animate-float">
          <img
            src="https://images.unsplash.com/vector-1750444037899-2e1050c9a4ac?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Midhun Prahash"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-400"
          />
        </div>
        {/* Floating animation glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-300/10 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-500">
              Midhun
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I like training and partnering with machines to solve the majorly faced challenges, which in turn revolutionize industries,
            enhance efficiency, and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-600 text-white rounded-lg hover:border-gray-400 hover:bg-gray-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;