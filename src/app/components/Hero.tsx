
import { Star, Clock, Users } from 'lucide-react';

export default function Hero(){
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/6270086/pexels-photo-6270086.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
          Red Izba
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Authentic Russian cuisine in the heart of Moscow
        </p>
        <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
          Discover the richness of traditional Russian flavours in the atmosphere of an old hut
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book a table
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View menu
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-400" size={20} />
            <span>4.9 out of 5 stars</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-yellow-400" size={20} />
            <span>Open 12:00 - 23:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="text-yellow-400" size={20} />
            <span>1000+ satisfied guests</span>
          </div>
        </div>
      </div>
    </section>
  );
};
