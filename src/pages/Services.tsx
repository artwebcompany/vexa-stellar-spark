
import React from 'react';
import { Instagram, Camera, Globe, TrendingUp, Users, Zap } from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';

const Services = () => {
  const mainServices = [
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Complete social media strategy and management to build your brand presence.',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop',
      features: [
        'Content strategy & planning',
        'Daily posting & scheduling',
        'Community management',
        'Hashtag research & optimization',
        'Analytics & reporting',
        'Competitor analysis'
      ]
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Professional photo and video content that tells your brand story.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      features: [
        'Product photography',
        'Video production',
        'Graphic design',
        'Brand photoshoots',
        'Animation & motion graphics',
        'UGC-style content'
      ]
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      features: [
        'Custom website design',
        'E-commerce solutions',
        'Mobile optimization',
        'SEO optimization',
        'Performance optimization',
        'Maintenance & support'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      features: [
        'Google Ads management',
        'Social media advertising',
        'Email marketing',
        'Influencer partnerships',
        'Campaign optimization',
        'ROI tracking'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: 'Brand Strategy',
      description: 'Comprehensive brand development and positioning strategies.'
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Optimize your funnels and increase conversion rates.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-vexa-gradient overflow-hidden">
        <div className="absolute inset-0 bg-galaxy opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper>
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital solutions that help your brand grow and thrive in the digital landscape.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  <AnimationWrapper animation={isEven ? 'slide-in-left' : 'slide-in-right'}>
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-vexa-gradient p-4 rounded-2xl">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-playfair font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-vexa-gradient rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimationWrapper>
                  
                  <AnimationWrapper 
                    animation={isEven ? 'slide-in-right' : 'slide-in-left'}
                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-3xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vexa-purple/20 to-transparent rounded-3xl"></div>
                    </div>
                  </AnimationWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50 galaxy-bg">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600">
                We also offer specialized services to complement your digital strategy.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimationWrapper key={index} animation="fade-in">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-vexa-gradient p-3 rounded-2xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-vexa-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <AnimationWrapper>
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can help achieve your business goals.
            </p>
            <button className="bg-white text-vexa-purple font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Get Your Free Consultation
            </button>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Services;
