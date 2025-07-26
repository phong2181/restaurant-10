import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-900 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-400">
            Red Izba
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#menu" className="hover:text-yellow-400 transition-colors">Menu</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a>
            <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contacts</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-sm">Moscow, Red Square</span>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-800">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#menu" className="hover:text-yellow-400 transition-colors">Меnu</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About us</a>
              <a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contacts</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};