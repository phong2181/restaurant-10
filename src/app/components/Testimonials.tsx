
import { Star, Quote } from 'lucide-react';

export default function Testimonials(){
  const testimonials = [
    {
      name: 'Anna Petrova',
      rating: 5,
      text: 'Amazing atmosphere and incredibly delicious food! They cook borscht here like my grandma. We will definitely come back here again.',
      date: '2 weeks ago'
    },
    {
      name: 'Mikhail Ivanov',
      rating: 5,
      text: 'A great place for a family dinner. The staff is very friendly, and the interior creates the feeling of a real Russian hut.',
      date: '1 month ago'
    },
    {
      name: 'Elena Sidorova',
      rating: 5,
      text: 'The best dumplings in Moscow! And the herring under a fur coat is simply amazing. I recommend it to all lovers of traditional cuisine.',
      date: '3 weeks ago'
    },
    {
      name: 'Dmitry Kozlov',
      rating: 5,
      text: 'I brought foreign colleagues here - they were delighted! Now this is our favorite place for business dinners.',
      date: '1 week ago'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Guest Reviews</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are proud that our guests are satisfied and come back to us again and again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 text-red-200" size={32} />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
                <div className="text-red-900 font-bold text-2xl">5.0</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-800">4.9</div>
            <div className="text-gray-600">out of 5 based on 247+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};