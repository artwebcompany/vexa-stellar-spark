
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/public/assets/logo.png" alt="VEXA Creative" className="w-10 h-10" />
            <img src="/lovable-uploads/2a041c16-2d12-4ab4-ae51-4e62283a2cdd.png" alt="VEXA Creative - Your Digital Growth Partner" className="w-[190px] h-[40px] object-fill" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-inter font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                  location.pathname === item.href
                    ? 'text-vexa-purple bg-vexa-purple/10 shadow-sm'
                    : 'text-gray-700 hover:text-vexa-purple hover:bg-vexa-purple/5'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-vexa-purple rounded-full"></div>
                )}
              </Link>
            ))}
            <Link to="/contact" className="vexa-btn text-sm">
              Let's Work Together
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-inter font-medium py-3 px-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-vexa-purple bg-vexa-purple/10'
                      : 'text-gray-700 hover:text-vexa-purple hover:bg-vexa-purple/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block vexa-btn text-center text-sm mt-4"
              >
                Let's Work Together
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
