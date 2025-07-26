
import { Award, Heart, Users, Clock } from 'lucide-react';

export default function About(){
  const features = [
    {
      icon: <Award className="text-yellow-500" size={32} />,
      title: 'Премия "Лучший ресторан"',
      description: '2023 год, Москва'
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: 'Семейные рецепты',
      description: 'Переданные через поколения'
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: 'Опытные повара',
      description: 'Более 15 лет стажа'
    },
    {
      icon: <Clock className="text-green-500" size={32} />,
      title: 'Работаем с 1995 года',
      description: 'Почти 30 лет традиций'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">О ресторане</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              "Красная Изба" - это не просто ресторан, это место, где живут традиции русской кухни. 
              Наша история началась в 1995 году с мечты создать уютное место, где каждый гость 
              почувствует себя как дома.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы используем только свежие продукты от местных поставщиков и готовим по рецептам, 
              которые передавались в наших семьях из поколения в поколение. Каждое блюдо - это 
              история, рассказанная через вкус.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Интерьер ресторана"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-900 rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Наша философия</h3>
            <p className="text-xl text-gray-600">
              Мы верим, что еда объединяет людей и создаёт незабываемые воспоминания
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🥘</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Качество</h4>
              <p className="text-gray-600">
                Только свежие продукты и проверенные рецепты
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Уют</h4>
              <p className="text-gray-600">
                Атмосфера домашнего тепла и гостеприимства
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎭</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Традиции</h4>
              <p className="text-gray-600">
                Сохранение и передача культурного наследия
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};