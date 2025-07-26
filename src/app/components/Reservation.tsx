import{ useState } from 'react';
import { Calendar, Clock, Users, Phone, User } from 'lucide-react';

export default function Reservation(){
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь была бы логика отправки формы
    alert('Спасибо! Ваша бронь принята. Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Table reservation</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Book a table in advance to be guaranteed to enjoy Russian cuisine in a cozy atmosphere
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Book a table</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telephone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 text-gray-400" size={20} />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'гость' : 'гостей'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional wishes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Special requests, allergies, special occasions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-900 hover:bg-red-800 text-white py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Book a table
                </button>
              </form>
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Booking information</h3>
              
              <div className="space-y-6">
                <div className="bg-red-800 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3">Opening hours</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Mon-Thu:</span> 12:00 - 23:00</p>
                    <p><span className="font-medium">Fri-Sat:</span> 12:00 - 01:00</p>
                    <p><span className="font-medium">Vs:</span> 12:00 - 22:00</p>
                  </div>
                </div>

                <div className="bg-red-800 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3">Booking rules</h4>
                  <ul className="space-y-2 text-red-100">
                    <li>• Reservations are valid for 15 minutes</li>
                    <li>• Prepayment is required for groups of 8 or more people</li>
                    <li>• Cancellation of reservations no later than 2 hours in advance</li>
                    <li>• Special menu available on holidays</li>
                  </ul>
                </div>

                <div className="bg-red-800 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-3">Contacts</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Telephone:</span> +7 (495) 123-45-67</p>
                    <p><span className="font-medium">Email:</span> info@krasnayaizba.ru</p>
                    <p><span className="font-medium">Address:</span> Moscow, Red Square, 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};