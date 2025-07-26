import { useState } from 'react';
import { Utensils, Wine, Cake } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function Menu(){
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories: MenuCategory[] = [
    {
      id: 'appetizers',
      title: 'Snacks',
      icon: <Utensils size={24} />,
      items: [
        {
          name: 'Herring under a fur coat',
          description: 'Traditional layered salad with herring, vegetables and mayonnaise',
          price: '480 ₽',
          image: 'https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Red caviar with pancakes',
          description: 'Gourmet red caviar with thin pancakes',
          price: '1200 ₽',
          image: 'https://images.pexels.com/photos/8697460/pexels-photo-8697460.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Pickled cucumbers and tomatoes',
          description: 'Homemade pickles according to an old recipe',
          price: '320 ₽',
          image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'main',
      title: 'Main courses',
      icon: <Utensils size={24} />,
      items: [
        {
          name: 'Borscht with sour cream',
          description: 'Classic Ukrainian borscht with beef and sour cream',
          price: '580 ₽',
          image: 'https://images.pexels.com/photos/8969226/pexels-photo-8969226.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Beef Stroganoff',
          description: 'Tender beef in a creamy sauce with mushrooms',
          price: '890 ₽',
          image: 'https://images.pexels.com/photos/11442478/pexels-photo-11442478.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Homemade dumplings',
          description: 'Siberian dumplings with meat filling',
          price: '650 ₽',
          image: 'https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'drinks',
      title: 'Drinks',
      icon: <Wine size={24} />,
      items: [
        {
          name: 'Premium Vodka',
          description: 'Selected Russian vodka of the highest quality',
          price: '250 ₽',
          image: 'https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Mead',
          description: 'Traditional Russian honey drink',
          price: '380 ₽',
          image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Cranberry juice',
          description: 'Homemade juice from fresh cranberries',
          price: '180 ₽',
          image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      icon: <Cake size={24} />,
      items: [
        {
          name: 'Curd pancakes with sour cream',
          description: 'Curd pancakes with homemade sour cream and jam',
          price: '420 ₽',
          image: 'https://images.pexels.com/photos/7937437/pexels-photo-7937437.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Birds Milk Cake',
          description: 'Light airy cake with delicate soufflé',
          price: '480 ₽',
          image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Pancakes with honey',
          description: 'Thin pancakes with natural honey',
          price: '350 ₽',
          image: 'https://images.pexels.com/photos/6210751/pexels-photo-6210751.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  const activeMenuItems = menuCategories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the richness of Russian cuisine with dishes prepared according to ancient recipes
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-red-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeMenuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};