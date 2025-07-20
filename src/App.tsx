import React, { useState, useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
import Navigation from './components/Navigation';
import AuthModal from './components/AuthModal';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AIFlavorGenerator from './components/AIFlavorGenerator';
import BehindTheNoodles from './components/BehindTheNoodles';
import Testimonials from './components/Testimonials';
import Shop from './components/Shop';
import Chatbot from './components/Chatbot';

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Initialize dark mode on first load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Update favicon
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = 'https://i.postimg.cc/NMNrj9zH/Gemini-Generated-Image-pggl3mpggl3mpggl.png';
    }
    
    // Update title
    document.title = 'Adobe Noodles - Design That You Can Taste';
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
          <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navigation 
              onAuthClick={() => setAuthModalOpen(true)}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            
            <main>
              <Hero />
              <ProductShowcase />
              <AIFlavorGenerator />
              <BehindTheNoodles />
              <Testimonials />
              <Shop />
            </main>

            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <img 
                      src="https://i.postimg.cc/NMNrj9zH/Gemini-Generated-Image-pggl3mpggl3mpggl.png" 
                      alt="Adobe Noodles Logo" 
                      className="h-8 w-8"
                    />
                    <span className="text-xl font-bold">Adobe Noodles</span>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <p className="text-gray-400 mb-2">Design That You Can Taste</p>
                    <p className="text-sm text-gray-500">
                      © 2024 Adobe Noodles. All rights reserved. 
                      <span className="ml-2">Made with ❤️ and AI</span>
                    </p>
                  </div>
                </div>
              </div>
            </footer>

            <AuthModal 
              isOpen={authModalOpen} 
              onClose={() => setAuthModalOpen(false)} 
            />
            
            <Chatbot />
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;