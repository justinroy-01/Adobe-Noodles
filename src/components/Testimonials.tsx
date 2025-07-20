import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'UX Designer',
      avatar: '👩‍🎨',
      rating: 5,
      content: 'The Photoshop Pepper Masala literally changed my creative process! The complex layers of flavor helped me understand layer masking in a whole new way. Now my designs AND my lunch are perfectly balanced.',
      favorite: 'Photoshop Pepper Masala'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Video Editor',
      avatar: '🎬',
      rating: 5,
      content: 'Premiere Pasta is a game-changer! The smooth transitions between flavors mirror my editing workflow perfectly. It\'s like my timeline came to life in a bowl. Highly recommend for any creative professional.',
      favorite: 'Premiere Pasta'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Graphic Designer',
      avatar: '✏️',
      rating: 5,
      content: 'Illustrator Imli is mathematically perfect! The vector-precise tanginess scales beautifully from mild to intense. As someone who lives in Illustrator, this speaks to my soul (and my taste buds).',
      favorite: 'Illustrator Imli'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Digital Artist',
      avatar: '🎨',
      rating: 5,
      content: 'After Effects Authentic blew my mind! The dynamic flavors literally animate in your mouth. It\'s like experiencing a motion graphics masterpiece through food. Pure genius!',
      favorite: 'After Effects Authentic'
    },
    {
      id: 5,
      name: 'Lisa Johnson',
      role: 'Art Director',
      avatar: '🖼️',
      rating: 5,
      content: 'The AI Flavor Generator created the perfect noodle for my hectic creative director lifestyle. It\'s like having a personal chef who understands the creative process. Absolutely revolutionary!',
      favorite: 'Custom AI Blend'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      role: 'Motion Designer',
      avatar: '🎭',
      rating: 5,
      content: 'Adobe Noodles understands creatives like no other brand. Each flavor tells a story, just like my animations. The attention to detail is incredible - it\'s like eating art!',
      favorite: 'Creative Cloud Combo'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-red-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Creatives Are <span className="text-red-600">Saying</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of designers, developers, and creative professionals who've enhanced their workflow with our noodles
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar and Info */}
              <div className="text-center md:text-left">
                <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-red-600 font-semibold mb-3">{currentTestimonial.role}</p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start items-center space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full">
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                    Favorite: {currentTestimonial.favorite}
                  </p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-red-600 w-8' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
             className="bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white dark:hover:bg-gray-700 transition-all cursor-pointer"
              onClick={() => setCurrentIndex(testimonial.id - 1)}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{testimonial.avatar}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                  <p className="text-red-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;