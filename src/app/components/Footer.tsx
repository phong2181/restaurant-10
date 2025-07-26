
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer(){
  return (
    <footer className="bg-red-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-4">
              Red Izba
            </div>
            <p className="text-red-100 mb-4 leading-relaxed">
              Authentic Russian cuisine in the heart of Moscow.
              Traditions, taste and hospitality since 1995.
            </p>
            <div className="flex items-center space-x-2 text-red-200">
              <Heart size={16} className="text-red-400" />
              <span className="text-sm">Made with love for traditions</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Menu</h3>
            <ul className="space-y-2 text-red-100">
              <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Snacks</a></li>
              <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Main courses</a></li>
              <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Drinks</a></li>
              <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Desserts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Information</h3>
            <ul className="space-y-2 text-red-100">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About the restaurant</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contacts</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Delivery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contacts</h3>
            <div className="space-y-3 text-red-100">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>info@krasnayaizba.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Moscow, Red Square, 1</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-yellow-400">Opening hours</h4>
              <div className="text-sm text-red-100 space-y-1">
                <p>Mon-Thu: 12:00 - 23:00</p>
                <p>Fri-Sat: 12:00 - 01:00</p>
                <p>Sun: 12:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-red-200 text-sm mb-4 md:mb-0">
              © 2024 Red Izba. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-red-200">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

