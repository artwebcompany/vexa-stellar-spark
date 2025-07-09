
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative">
      {/* Newsletter Section - Overlapping */}
      <div className="relative z-20 -mb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-vexa-purple via-vexa-blue to-vexa-cyan rounded-3xl p-8 shadow-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-playfair font-bold text-white mb-3">
                Stay Updated with VEXA
              </h3>
              <p className="text-white/90 mb-6 text-sm">
                Get the latest insights on digital marketing, brand growth, and creative trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                />
                <button className="bg-white text-vexa-purple font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 text-gray-800 relative overflow-hidden pt-32 pb-8">
        {/* Gradient Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-transparent rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <img 
                    src="/public/assets/logo.png" 
                    alt="VEXA Creative" 
                    className="w-10 h-10"
                  />
                  <span className="text-xl font-playfair font-bold text-gray-800">VEXA Creative</span>
                </Link>
                <p className="text-gray-600 mb-4 max-w-md text-sm">
                  We don't just create content. We build magnetic brands. VEXA Creative is your 
                  creative partner in the digital era, helping brands grow and glow in the digital space.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://instagram.com/vexauae" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-vexa-purple to-vexa-cyan p-2 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href="mailto:hello@vexacreative.net"
                    className="bg-gradient-to-r from-vexa-blue to-vexa-cyan p-2 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-playfair font-semibold text-base mb-4 text-gray-800">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-600 hover:text-vexa-blue transition-colors text-sm">Home</Link></li>
                  <li><Link to="/services" className="text-gray-600 hover:text-vexa-blue transition-colors text-sm">Services</Link></li>
                  <li><Link to="/about" className="text-gray-600 hover:text-vexa-blue transition-colors text-sm">About</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-vexa-blue transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-playfair font-semibold text-base mb-4 text-gray-800">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-vexa-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Dubai, UAE</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Mail className="w-4 h-4 text-vexa-blue mt-0.5 flex-shrink-0" />
                    <a 
                      href="mailto:hello@vexacreative.net"
                      className="text-gray-600 hover:text-vexa-blue transition-colors text-sm"
                    >
                      hello@vexacreative.net
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Instagram className="w-4 h-4 text-vexa-blue mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://instagram.com/vexauae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-vexa-blue transition-colors text-sm"
                    >
                      @vexauae
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300/50 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-500 text-xs">
                © 2024 VEXA Creative. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2 sm:mt-0">
                Based in Dubai — trusted by brands worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle animated elements */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-vexa-blue rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-0.5 h-0.5 bg-vexa-purple rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-vexa-cyan rounded-full animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
      </footer>
    </div>
  );
};

export default Footer;
