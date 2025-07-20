import React, { useState } from 'react';
import { X, Linkedin, Twitter, Mail } from 'lucide-react';

const BehindTheNoodles: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const team = [
    {
      id: 1,
      name: 'Chef Alessandro Photoshop',
      title: 'Chief Noodle Officer',
      image: 'https://i.postimg.cc/XJk7jps0/Gemini-Generated-Image-1rtkce1rtkce1rtk.png',
      bio: 'With 15 years of experience blending pixels and spices, Alessandro revolutionized the culinary world by applying layer masking techniques to flavor profiles. His signature move? Using the healing brush tool on overcooked noodles. When he\'s not perfecting the latest batch of Photoshop Pepper Masala, you can find him teaching workshops on "Advanced Seasoning Adjustments" and "Non-destructive Cooking Methods."',
      specialties: ['Flavor Layer Masking', 'Spice Level Adjustments', 'Color Correction Cuisine'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alessandro@adobenoodles.com'
      }
    },
    {
      id: 2,
      name: 'Isabella Illustrator',
      title: 'Vector Taste Designer',
      image: 'https://i.postimg.cc/NMcjv174/Gemini-Generated-Image-8k7ot48k7ot48k7o.png',
      bio: 'Isabella brings mathematical precision to every flavor profile. Armed with her trusty pen tool and an acute understanding of Bézier curves, she crafts taste experiences that are both scalable and vector-perfect. Her Illustrator Imli recipe uses anchor points to create the perfect balance of sweet and sour. She holds a PhD in Computational Gastronomy and speaks fluent SVG.',
      specialties: ['Vector Flavor Design', 'Scalable Taste Solutions', 'Precision Spice Geometry'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'isabella@adobenoodles.com'
      }
    },
    {
      id: 3,
      name: 'Marcus Premiere',
      title: 'Timeline Taste Engineer',
      image: 'https://i.postimg.cc/QCNNHhzK/Gemini-Generated-Image-ximzd6ximzd6ximz.png',
      bio: 'Marcus orchestrates flavors like a symphony, ensuring perfect timing and seamless transitions. His revolutionary "Real-time Flavor Rendering" technique means your noodles cook with cinematic quality. He\'s the genius behind our Premiere Pasta line, where every bite transitions smoothly to the next. Marcus can cut, splice, and edit taste profiles with frame-perfect accuracy.',
      specialties: ['Timeline Cooking', 'Flavor Editing', 'Real-time Taste Rendering'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus@adobenoodles.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Behind the <span className="text-red-600">Noodles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the creative minds who blend culinary artistry with design excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800 p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square overflow-hidden rounded-xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-red-400 font-semibold mb-3">{member.title}</p>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">Specialties:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {member.specialties.slice(0, 2).map((specialty, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {specialty}
                      </li>
                    ))}
                    <li className="text-red-400 font-medium">Click to read more...</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors z-10 text-gray-900 dark:text-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full aspect-square object-cover rounded-2xl"
                      />
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-xl text-red-600 font-semibold mb-6">
                        {selectedMember.title}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {selectedMember.bio}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Specialties:</h4>
                        <ul className="space-y-2">
                          {selectedMember.specialties.map((specialty: string, index: number) => (
                            <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                              <span className="text-red-600 mr-2">•</span>
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={selectedMember.social.linkedin}
                          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={selectedMember.social.twitter}
                          className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${selectedMember.social.email}`}
                          className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BehindTheNoodles;