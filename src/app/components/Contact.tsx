import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Droplet as Metro } from 'lucide-react';

export default function Contact(){
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мы находимся в самом сердце Москвы. Приезжайте к нам и окунитесь в атмосферу русского гостеприимства
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">Как нас найти</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Адрес</h4>
                  <p className="text-gray-300">Москва, Красная площадь, 1</p>
                  <p className="text-gray-400 text-sm">рядом с ГУМом</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Телефон</h4>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                  <p className="text-gray-400 text-sm">Бронирование столов</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-gray-300">info@krasnayaizba.ru</p>
                  <p className="text-gray-400 text-sm">Для вопросов и предложений</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Время работы</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Пн-Чт: 12:00 - 23:00</p>
                    <p>Пт-Сб: 12:00 - 01:00</p>
                    <p>Вс: 12:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-yellow-400">Как добраться</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Metro className="text-red-400" size={20} />
                  <span className="text-gray-300">
                    Станции метро: "Охотный ряд", "Театральная", "Площадь Революции"
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="text-blue-400" size={20} />
                  <span className="text-gray-300">
                    Парковка: подземная парковка ГУМа (платная)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Карта</h3>
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-red-400" size={48} />
                <p className="text-gray-300">Интерактивная карта</p>
                <p className="text-gray-400 text-sm">Красная площадь, 1</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">5 мин</div>
                <div className="text-sm text-gray-300">пешком от метро</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">охраняемая парковка</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-900 rounded-lg">
              <h4 className="font-semibold mb-2">💡 Полезный совет</h4>
              <p className="text-sm text-red-100">
                Рекомендуем бронировать столик заранее, особенно в выходные дни и праздники. 
                Мы очень популярны среди туристов и местных жителей!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
