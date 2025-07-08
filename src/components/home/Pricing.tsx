
import React from 'react';
import { Check } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '2,500',
      period: 'month',
      description: 'Perfect for small businesses getting started with social media.',
      features: [
        '12 posts per month',
        'Content creation',
        'Basic analytics',
        'Community management',
        'Monthly strategy call'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '4,500',
      period: 'month',
      description: 'Ideal for growing brands ready to scale their presence.',
      features: [
        '20 posts per month',
        'Advanced content creation',
        'Detailed analytics',
        'Community management',
        'Weekly strategy calls',
        'Instagram/TikTok ads setup',
        'Email marketing setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-service solution for established businesses.',
      features: [
        'Unlimited posts',
        'Full content production',
        'Advanced analytics & reporting',
        '24/7 community management',
        'Daily strategy support',
        'Multi-platform ads management',
        'Website development',
        'Brand strategy consultation'
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Choose Your Growth Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible plans designed to scale with your business growth.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative ${
                plan.popular 
                  ? 'ring-2 ring-vexa-purple scale-105 shadow-xl bg-gradient-to-br from-vexa-purple/5 via-vexa-blue/5 to-vexa-cyan/5' 
                  : 'hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-vexa-purple/5 hover:via-vexa-blue/5 hover:to-vexa-cyan/5'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-vexa-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold vexa-gradient-text">
                      {plan.price === 'Custom' ? plan.price : `AED ${plan.price}`}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-vexa-purple mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-8 ${
                  plan.popular 
                    ? 'vexa-btn' 
                    : 'bg-gray-100 hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300'
                }`}>
                  Get Started
                </button>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
