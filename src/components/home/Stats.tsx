
import React from 'react';
import { Users, Rocket, Globe, Star } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Stats = () => {
  const stats = [
    { number: '120+', label: 'Happy Clients', icon: Users },
    { number: '500+', label: 'Projects Completed', icon: Rocket },
    { number: '25+', label: 'Countries Reached', icon: Globe },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 z-0">
        {/* Large floating stars */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-[15%] w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-[20%] w-1 h-1 bg-cyan-400/70 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 right-[25%] w-2.5 h-2.5 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-60 right-[8%] w-1.5 h-1.5 bg-violet-400/60 rounded-full animate-bounce" style={{ animationDelay: '4s', animationDuration: '3.2s' }}></div>
        <div className="absolute top-40 left-[35%] w-1 h-1 bg-sky-400/50 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4.2s' }}></div>
        <div className="absolute bottom-32 left-[60%] w-2 h-2 bg-blue-300/40 rounded-full animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '3.8s' }}></div>
        <div className="absolute top-60 right-[40%] w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '2.8s' }}></div>
        
        {/* Medium stars */}
        <div className="absolute top-28 left-[50%] w-1 h-1 bg-cyan-300/50 rounded-full animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3.3s' }}></div>
        <div className="absolute bottom-48 right-[30%] w-0.5 h-0.5 bg-indigo-300/60 rounded-full animate-ping" style={{ animationDelay: '1.8s', animationDuration: '2.7s' }}></div>
        <div className="absolute top-36 right-[60%] w-1.5 h-1.5 bg-violet-300/40 rounded-full animate-bounce" style={{ animationDelay: '2.8s', animationDuration: '4.1s' }}></div>
        <div className="absolute bottom-44 left-[45%] w-1 h-1 bg-sky-300/50 rounded-full animate-pulse" style={{ animationDelay: '3.8s', animationDuration: '3.6s' }}></div>
        
        {/* Small twinkling stars */}
        <div className="absolute top-24 left-[75%] w-0.5 h-0.5 bg-blue-200/70 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.2s' }}></div>
        <div className="absolute bottom-36 right-[70%] w-0.5 h-0.5 bg-purple-200/60 rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '2.9s' }}></div>
        <div className="absolute top-44 left-[25%] w-0.5 h-0.5 bg-cyan-200/50 rounded-full animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '3.4s' }}></div>
        <div className="absolute bottom-52 right-[50%] w-0.5 h-0.5 bg-indigo-200/60 rounded-full animate-ping" style={{ animationDelay: '3.2s', animationDuration: '2.6s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
              Trusted by Clients 
              <span className="block vexa-gradient-text">Across the Globe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're proud to have worked with over 120+ clients across industries — from beauty and wellness to tech and lifestyle.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimationWrapper 
                key={index} 
                animation="fade-in"
                className="text-center group"
              >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 rounded-3xl"></div>
                  
                  {/* Floating icon background */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-vexa-purple/10 to-vexa-cyan/10 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-5 h-5 text-vexa-purple/60" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Icon className="w-10 h-10 text-vexa-purple mx-auto group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-5xl lg:text-6xl font-playfair font-bold vexa-gradient-text mb-3 group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium text-lg">
                      {stat.label}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-vexa-purple/5 via-vexa-blue/5 to-vexa-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>

        <AnimationWrapper className="text-center mt-20">
          <div className="relative inline-block">
            <p className="text-xl text-gray-700 font-semibold bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 shadow-lg">
              Based in Dubai — trusted by brands worldwide.
            </p>
            {/* Decorative stars around the text */}
            <div className="absolute -top-2 -left-2 w-1 h-1 bg-vexa-purple/60 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-vexa-cyan/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Stats;
