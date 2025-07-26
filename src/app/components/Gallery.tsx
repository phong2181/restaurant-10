import React from 'react';

export default function Gallery(){
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Уютный интерьер ресторана'
    },
    {
      url: 'https://images.pexels.com/photos/6270086/pexels-photo-6270086.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Традиционные русские блюда'
    },
    {
      url: 'https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Селедка под шубой'
    },
    {
      url: 'https://images.pexels.com/photos/8969226/pexels-photo-8969226.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Борщ со сметаной'
    },
    {
      url: 'https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Водка и закуски'
    },
    {
      url: 'https://images.pexels.com/photos/7937437/pexels-photo-7937437.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Сырники со сметаной'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Gallery</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in the atmosphere of a real Russian hut and enjoy the view of our dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Visit us and feel the atmosphere
            </h3>
            <p className="text-lg text-red-100 mb-6">
              Every corner of our restaurant is imbued with the spirit of Russian traditions. 
              From wooden furniture to national ornaments - everything is created for your comfort.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Book a table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

