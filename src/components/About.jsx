import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Pacientes Atendidos' },
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: GraduationCap, value: '3', label: 'Especializações' },
  { icon: Heart, value: '98%', label: 'Satisfação' }
];

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-600">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-[500px] object-cover"
                alt="Dra. Ana Silva, gerontóloga especializada"
               src="https://images.unsplash.com/photo-1617565980755-d57f254b0ba7" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Dra. Ana Silva
            </h2>
            
            <p className="text-xl mb-6 text-emerald-50 leading-relaxed">
              Gerontóloga com mais de 15 anos de experiência dedicados ao cuidado integral da terceira idade.
            </p>

            <p className="text-lg mb-8 text-emerald-100 leading-relaxed">
              Formada em Medicina pela USP, com especialização em Geriatria e Gerontologia. 
              Minha missão é proporcionar qualidade de vida, dignidade e bem-estar para cada paciente, 
              através de um atendimento humanizado e baseado em evidências científicas.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 mb-3 text-emerald-200" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-emerald-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
                CRM 123456
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
                Membro da SBGG
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
                Pós-graduação USP
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;