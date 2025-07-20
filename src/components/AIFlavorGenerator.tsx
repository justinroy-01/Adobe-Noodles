import React, { useState } from 'react';
import { Wand2, Sparkles, RefreshCw, Download } from 'lucide-react';

const AIFlavorGenerator: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedFlavor, setGeneratedFlavor] = useState<{
    name: string;
    description: string;
    image: string;
  } | null>(null);

  const handleGenerate = async () => {
    if (!userInput.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // TODO: Replace with actual ChatGPT/DALL·E API integration
    const demoFlavor = {
      name: `${userInput.charAt(0).toUpperCase() + userInput.slice(1)} Fusion Noodles`,
      description: `A revolutionary blend inspired by your mood! This is a placeholder description that showcases how the AI would generate personalized flavor profiles. The actual implementation would use ChatGPT to create unique, engaging descriptions based on your input. Each flavor would be carefully crafted to match your personality and preferences.`,
      image: 'https://i.postimg.cc/8PLhgHSF/Gemini-Generated-Image-yp1cpoyp1cpoyp1c.png' // TODO: Replace with DALL·E generated image
    };
    
    setGeneratedFlavor(demoFlavor);
    setIsGenerating(false);
  };

  const prompts = [
    'Creative Professional',
    'Late Night Gamer',
    'Busy Student',
    'Adventurous Foodie',
    'Zen Master',
    'Coffee Addict'
  ];

  return (
    <section id="flavors" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Flavor <span className="text-red-600">Generator</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let our AI create the perfect noodle flavor based on your mood, profession, or personality
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Input Section */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What describes you today?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Describe your mood, profession, or what inspires you... (e.g., 'Creative designer working late', 'Adventurous traveler', 'Stressed student')"
                    className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white resize-none h-24"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick prompts:</p>
                  <div className="flex flex-wrap gap-2">
                    {prompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => setUserInput(prompt)}
                        className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900 hover:border-red-300 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!userInput.trim() || isGenerating}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      <span>Generating Your Flavor...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-5 w-5" />
                      <span>Generate My Flavor</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Result Section */}
            <div className="flex-1 w-full">
              {generatedFlavor ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="h-5 w-5 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Custom Flavor</h3>
                  </div>
                  
                  <div className="mb-6">
                    {/* TODO: Replace with DALL·E generated image */}
                    <img
                      src={generatedFlavor.image}
                      alt={generatedFlavor.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h4 className="text-2xl font-bold text-red-600 mb-3">{generatedFlavor.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {generatedFlavor.description}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <span>Order This Flavor</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <Wand2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Your custom flavor will appear here
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    Enter your description and click generate to see the magic!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIFlavorGenerator;