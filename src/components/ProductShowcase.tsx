import React, { useState } from 'react';
import { Star, Package, Zap, Palette } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'photoshop-pepper',
      name: 'Photoshop Pepper Masala',
      image: 'https://i.postimg.cc/8PLhgHSF/Gemini-Generated-Image-yp1cpoyp1cpoyp1c.png',
      price: '₹999',
      description: 'Layer upon layer of complex spices, just like your favorite editing tool. Each bite reveals new depths of flavor with advanced masking technology.',
      features: ['Multi-layer spice blend', 'Advanced heat adjustment', 'Perfect color correction for your taste buds'],
      icon: <Palette className="h-6 w-6" />
    },
    {
      id: 'illustrator-imli',
      name: 'Illustrator Imli',
      image: 'https://i.postimg.cc/ZKKFhNw4/img1.jpg',
      price: '₹849',
      description: 'Vectorized tanginess with mathematical precision. Sharp, crisp flavors that scale perfectly from mild to mind-blowing.',
      features: ['Vector-perfect sourness', 'Scalable heat levels', 'Precision-crafted tamarind blend'],
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 'premiere-pasta',
      name: 'Premiere Pasta',
      image: 'https://i.postimg.cc/zDkSM7Sx/img2.jpg',
      price: '₹1199',
      description: 'Timeline-perfect pasta that renders in real-time flavor. Smooth transitions from al dente to perfectly cooked, every time.',
      features: ['Real-time cooking', 'Smooth flavor transitions', 'Professional-grade pasta blend'],
      icon: <Package className="h-6 w-6" />
    },
    {
      id: 'after-effects-authentic',
      name: 'After Effects Authentic',
      image: 'https://i.postimg.cc/yYQh6NG9/img3.jpg',
      price: '₹1349',
      description: 'Motion graphics for your mouth! Dynamic flavors that animate on your palate with cinematic quality and special effects.',
      features: ['Motion-activated flavors', 'Cinematic taste experience', 'Special effects seasoning'],
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Creative <span className="text-red-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Each flavor is crafted with the same precision and attention to detail as Adobe's legendary software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Front of Card */}
              <div className={`transition-transform duration-500 ${hoveredProduct === product.id ? 'rotateY-180' : ''}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {product.icon}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {product.name}
                      </h3>
                    </div>
                    <span className="text-2xl font-bold text-red-600">
                      {product.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(4.9/5)</span>
                  </div>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Back of Card */}
              <div className={`absolute inset-0 bg-white dark:bg-gray-800 p-6 transition-transform duration-500 ${hoveredProduct === product.id ? '' : 'rotateY-180'}`}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-600">{product.price}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;