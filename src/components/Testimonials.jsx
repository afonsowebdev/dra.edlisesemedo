import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Santos',
    age: '78 anos',
    text: 'A Dra. Ana transformou minha qualidade de vida. Seu cuidado vai além do profissional, é verdadeiramente humano e atencioso.',
    rating: 5
  },
  {
    name: 'João Oliveira',
    age: '82 anos',
    text: 'Excelente profissional! Me sinto seguro e bem cuidado. As consultas são sempre esclarecedoras e o acompanhamento é impecável.',
    rating: 5
  },
  {
    name: 'Carmen Rodriguez',
    age: '75 anos',
    text: 'Encontrei na Dra. Ana não apenas uma médica, mas uma parceira no meu processo de envelhecimento saudável. Recomendo!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O que nossos pacientes dizem sobre o atendimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-200" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.age}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;