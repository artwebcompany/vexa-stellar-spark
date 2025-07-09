
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, Rocket, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../AnimationWrapper';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop'
  ];

  const miniStats = [
    { number: '120+', label: 'Happy Clients', icon: Users },
    { number: '500+', label: 'Projects', icon: Rocket },
    { number: '25+', label: 'Countries', icon: Globe },
    { number: '98%', label: 'Satisfaction', icon: Star },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-vexa-purple/70 via-vexa-blue/50 to-vexa-cyan/60"></div>
          </div>
        ))}
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-32 w-0.5 h-0.5 bg-white rounded-full animate-bounce opacity-90" style={{ animationDelay: '3s', animationDuration: '2s' }}></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-70" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-bounce opacity-80" style={{ animationDelay: '2.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '3.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Content */}
          <AnimationWrapper animation="fade-in" className="text-left">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
                Where Brands Come to 
                <span className="vexa-gradient-text block mt-2">Life</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
                From bold visuals to digital campaigns — we help brands grow, connect, and stand out.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Link
                  to="/contact"
                  className="vexa-btn text-base flex items-center gap-2 px-6 py-3"
                >
                  Let's Work Together
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <button className="flex items-center gap-3 text-white hover:text-vexa-cyan transition-colors group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-vexa-cyan/20 transition-colors">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                  <span className="text-base font-medium">Watch Our Story</span>
                </button>
              </div>
            </div>
          </AnimationWrapper>

          {/* Right Side - Mini Stats Cards */}
          <AnimationWrapper animation="fade-in" className="lg:flex justify-center items-center hidden">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {miniStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="relative bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-xl"></div>
                    <div className="relative z-10">
                      <Icon className="w-5 h-5 text-white mx-auto mb-2 opacity-90" />
                      <div className="text-xl font-playfair font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-white/80 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimationWrapper>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
