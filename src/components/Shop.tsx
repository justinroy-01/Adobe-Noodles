import React, { useState } from 'react';
import { Check, ShoppingCart, Zap, Crown, Gift, X } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const plans = [
    {
      id: 'freemium',
      name: 'Freemium Ramen',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for creative beginners',
      icon: <Gift className="h-8 w-8" />,
      color: 'border-gray-300',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
      features: [
        '1 Basic Flavor Pack',
        'Community Recipe Access',
        'Standard Cooking Instructions',
        'Basic Seasoning Kit',
        'Email Support'
      ],
      popular: false
    },
    {
      id: 'individual',
      name: 'Individual Creative',
      price: '₹799',
      period: 'month',
      description: 'For solo creative professionals',
      icon: <Zap className="h-8 w-8" />,
      color: 'border-red-500',
      buttonColor: 'bg-red-600 hover:bg-red-700',
      features: [
        '3 Premium Flavor Packs',
        'AI Flavor Generator Access',
        'Priority Recipe Updates',
        'Advanced Seasoning Kit',
        'Video Cooking Tutorials',
        'Priority Support'
      ],
      popular: true
    },
    {
      id: 'creative-cloud',
      name: 'Creative Cloud Curry',
      price: '₹1599',
      period: 'month',
      description: 'For creative teams and agencies',
      icon: <Crown className="h-8 w-8" />,
      color: 'border-purple-500',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      features: [
        'All Premium Flavors',
        'Unlimited AI Generations',
        'Team Collaboration Tools',
        'Custom Flavor Development',
        'Chef Illustrator Chatbot',
        'Bulk Order Discounts',
        'Dedicated Account Manager',
        '24/7 Priority Support'
      ],
      popular: false
    }
  ];

  const handlePurchase = (planId: string) => {
    setSelectedPlan(planId);
    setShowCheckout(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      setShowCheckout(false);
      setCheckoutSuccess(true);
    }, 2000);
  };

  const closeSuccess = () => {
    setCheckoutSuccess(false);
    setSelectedPlan(null);
  };

  return (
    <section id="shop" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your <span className="text-red-600">Creative Fuel</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Unlock your creative potential with our carefully crafted subscription plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 ${plan.color} transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-red-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                    plan.id === 'freemium' ? 'bg-gray-100' :
                    plan.id === 'individual' ? 'bg-red-100' : 'bg-purple-100'
                  } mb-4`}>
                    <div className={`${
                      plan.id === 'freemium' ? 'text-gray-600' :
                      plan.id === 'individual' ? 'text-red-600' : 'text-purple-600'
                    }`}>
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.price !== '₹0' && (
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePurchase(plan.id)}
                  className={`w-full ${plan.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{plan.price === '₹0' ? 'Get Started' : 'Subscribe Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Complete Your Order
                  </h3>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleCheckoutSubmit} className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </h4>
                  <p className="text-2xl font-bold text-red-600">
                    {plans.find(p => p.id === selectedPlan)?.price}
                    {plans.find(p => p.id === selectedPlan)?.price !== '₹0' && (
                      <span className="text-sm text-gray-500">
                        /{plans.find(p => p.id === selectedPlan)?.period}
                      </span>
                    )}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiry
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {checkoutSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to Adobe Noodles!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your subscription is now active. Get ready to taste the future of creative fuel!
              </p>
              <button
                onClick={closeSuccess}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Start Creating
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;