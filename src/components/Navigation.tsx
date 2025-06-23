
import { useState } from 'react';
import { Terminal, Menu, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/ThemeProvider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#articles', label: 'Articles' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-green-400/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Terminal className="w-6 h-6 text-green-400 mr-2" />
            <span className="text-xl font-bold text-white font-mono">
              Midhun's portfolio
              <span className="text-green-400 animate-pulse">_</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800 rounded transition-all duration-200 font-mono text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-600">
              <Sun className="w-4 h-4 text-yellow-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-green-400"
              />
              <Moon className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center space-x-1">
              <Sun className="w-3 h-3 text-yellow-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-green-400 scale-75"
              />
              <Moon className="w-3 h-3 text-blue-400" />
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400 p-2"
            >
              <Menu size={24} />
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
                  {item.label}
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
