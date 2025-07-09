
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Trusted by Clients Across the Globe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to have worked with over 120+ clients across industries — from beauty and wellness to tech and lifestyle.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimationWrapper 
                key={index} 
                animation="fade-in"
                className="text-center"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Individual gradient background for each card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vexa-purple/10 via-vexa-blue/5 to-vexa-cyan/10 opacity-60"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-vexa-purple mx-auto" />
                    </div>
                    <div className="text-4xl font-playfair font-bold vexa-gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>

        <AnimationWrapper className="text-center mt-16">
          <p className="text-lg text-gray-700 font-medium">
            Based in Dubai — trusted by brands worldwide.
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Stats;
