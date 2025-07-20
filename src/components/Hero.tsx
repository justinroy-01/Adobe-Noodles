import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [logoRotation, setLogoRotation] = useState(0);

  const heroImages = [
    'https://i.postimg.cc/Ssx5wKzQ/Gemini-Generated-Image-7t6aq87t6aq87t6a.png',
    'https://i.postimg.cc/qvwtLDsT/Gemini-Generated-Image-43f77k43f77k43f7.png'
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const logoInterval = setInterval(() => {
      setLogoRotation((prev) => prev + 360);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(logoInterval);
    };
  }, [heroImages.length]);

  const scrollToFlavors = () => {
    const flavorsSection = document.getElementById('flavors');
    flavorsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="h-4 w-4 text-white/30" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://i.postimg.cc/NMNrj9zH/Gemini-Generated-Image-pggl3mpggl3mpggl.png"
            alt="Adobe Noodles Logo"
            className="h-32 w-32 transition-transform duration-1000 ease-in-out hover:scale-110"
            style={{ transform: `rotate(${logoRotation}deg)` }}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
          Adobe Noodles
        </h1>
        
        <p className="text-2xl md:text-4xl mb-8 text-white/90 font-light">
          Design That You Can <span className="italic text-orange-300">Taste</span>
        </p>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed">
          Experience the perfect fusion of creative excellence and culinary artistry. 
          Where every flavor is crafted with the precision of professional design tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToFlavors}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 group"
          >
            <Sparkles className="h-5 w-5 group-hover:animate-spin" />
            <span>Design Your Flavor</span>
          </button>
          
          <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300 hover:scale-105">
            Order Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
};

export default Hero;