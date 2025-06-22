
import { useState } from 'react';
import { Terminal, Code } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'about()' },
    { href: '#projects', label: 'projects[]' },
    { href: '#experience', label: 'experience' },
    { href: '#articles', label: 'articles' },
    { href: '#contact', label: 'contact()' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-400/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Terminal className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-xl font-bold text-white font-mono">
              <span className="text-green-400">~/</span>midhun
              <span className="text-green-400 animate-pulse">_</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800 rounded transition-all duration-200 font-mono text-sm relative group"
              >
                <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">$</span>{' '}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400 p-2"
            >
              <Code size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-green-400/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800 transition-colors duration-200 font-mono text-sm"
                >
                  <span className="text-green-400">$</span> {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
